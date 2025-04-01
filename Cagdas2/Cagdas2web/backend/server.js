const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const eventRoutes = require('./routes/events'); // Events routes'u dahil ediyoruz
const app = express();
const port = 5000;
const SECRET_KEY = "gizli_anahtar"; // JWT için gizli anahtar

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/kayit_sistemi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB bağlantısı başarılı');
}).catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
});

// Kullanıcı modelini oluştur
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    deleteCode: { type: String, required: true },
  
});

const User = mongoose.model('User', userSchema);

// Register API
app.post('/api/register', async (req, res) => {
    const { username, password, email, phone, deleteCode } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: 'Bu kullanıcı adı zaten kullanılıyor!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({
            username,
            password: hashedPassword,
            email,
            phone,
            deleteCode
        });

        await newUser.save();
        res.status(201).json({ message: 'Kullanıcı başarıyla kaydedildi' });
    } catch (err) {
        console.error('Hata:', err);
        res.status(500).json({ message: 'Kullanıcı kaydedilirken hata oluştu', error: err.message });
    }
});

// Giriş API'si 
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        
        if (!user) {
            return res.status(400).json({ message: 'Kullanıcı adı bulunamadı' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Hatalı şifre' });
        }

        // JWT Token oluştur
        const token = jwt.sign({ userId: user._id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({ message: 'Giriş başarılı', token, username: user.username });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Giriş yapılırken hata oluştu' });
    }
});

// Kullanıcı bilgilerini getiren API 
app.get('/api/user', async (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Yetkisiz erişim! Token bulunamadı." });
    }

    try {
        const decoded = jwt.verify(token.split(" ")[1], SECRET_KEY);
        const user = await User.findById(decoded.userId).select("-password");
        
        if (!user) {
            return res.status(404).json({ message: "Kullanıcı bulunamadı!" });
        }

        res.json(user);
    } catch (err) {
        return res.status(401).json({ message: "Geçersiz token!" });
    }
});
// Şifre Değiştirme İşlemi API'Si

app.post('/api/user/change-password', async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const token = req.headers.authorization?.split(" ")[1];  // Token'ı header'dan alıyoruz

    if (!token) {
        return res.status(401).json({ message: 'JWT tokenı gerekli!' });
    }

    try {
        // Token doğrulama
        const decoded = jwt.verify(token, SECRET_KEY);
        const userId = decoded.userId;

    
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ message: 'Kullanıcı bulunamadı' });
        }

     
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Eski şifre hatalı' });
        }

      
        if (newPassword.length < 6) {
            return res.status(400).json({ message: 'Şifre en az 6 karakter olmalıdır.' });
        }

     
        const hashedPassword = await bcrypt.hash(newPassword, 10);

      
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Şifre başarıyla değiştirildi' });
    } catch (err) {
        console.error('Hata:', err);
        res.status(500).json({ message: 'Şifre değiştirilirken hata oluştu' });
    }
});

app.use('/api/events', eventRoutes);


//  En yüksek level karakteri getiren API
app.get("/top-character/:type", async (req, res) => {
    try {
      const { type } = req.params;
      const character = await User.findOne({ "character.type": type })
        .sort({ "character.level": -1 }) // Level'e göre sıralama
        .lean();
  
      if (!character) return res.status(404).json({ message: "Karakter bulunamadı" });
  
      res.json(character.character); // Sadece `character` nesnesini döndürüyoruz
    } catch (error) {
      res.status(500).json({ message: "Sunucu hatası", error });
    }
  });
  
  //  En yüksek level ilk 10 karakteri getiren API
  app.get("/top-10", async (req, res) => {
    try {
      const characters = await User.find()
        .sort({ "character.level": -1 }) // Level'e göre azalan sırala
        .limit(10)
        .lean();
  
      res.json(characters.map((user) => user.character)); // `character` nesnesini al
    } catch (error) {
      res.status(500).json({ message: "Sunucu hatası", error });
    }
  });
  // En yüksek level ilk 100 karakteri getiren API
 
  app.get("/get-100", async (req, res) => {
    try {   
      const characterCount = await User.countDocuments({ character: { $exists: true } });
      const limit = Math.min(characterCount, 100);
      const characters100 = await User.find()
        .sort({ "character.level": -1 })
        .select("character -_id")
        .limit(limit)
        .lean();
      
    
      res.json(characters100.map((user) => user.character));
    } catch (error) {
      console.error("get-100 API hatası:", error);
      res.status(500).json({ message: "Sunucu hatası", error });
    }
  });
  



// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Backend sunucusu ${port} portunda çalışıyor`);
});
