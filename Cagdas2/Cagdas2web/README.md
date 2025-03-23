# React + Vite
Proje hakkında: 
Proje Tanımı: 
 -Windows oyununa ait bir internet sitesi oluşturuluyor
Front-End İşlemleri:
 -Proje üstünde çalışabilmek için geçiçi bir ekran oluşturuldu
 -Kayıt sistemi eklendi
 -Giriş sistemi eklendi
 -Kullanıcı bilgileri backend'e gönderildi ve veritabanına kaydedildi
 -Kullanıcı bilgileri JWT ile çözülüp Navbar üzerinde gösterildi
 -Kullanıcı işlemleri için Userpanel eklendi
 -Userpanel üstünde şifre değişikliği sistemi eklendi
Back-End İşlemleri
-Kullanıcılar sisteme giriş yaptıktan sonra JWT token oluşturuluyor.
-Bu token, frontend tarafına gönderilip, her request ile kullanıcı doğrulaması sağlanıyor.
-Token doğrulandıktan sonra, kullanıcı bilgileri (username, userId vb) frontend'e sağlanıyor.
-Kullanıcı şifresini değiştirebilmesi için eski şifre doğrulaması yapıldı.
-Şifre, bcrypt ile güvenli şekilde hash'lenip veritabanında güncellendi.
Gelcekteki Adımlar: 
-Veritabanında saklanan oyun içi etkinlikler frontend'e çekilecek ve ana sayfada gösterilecek.
-Temsili bir Windows Form uygulaması eklenecek, Bu forma site üzerinden kayıt olunacak, giriş yapılacak. formda temsili karakterler oluşturulacak bu karakterler site üzerinde gösterilecek,