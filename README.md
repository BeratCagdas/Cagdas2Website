Sitenin görünüşü : https://www.youtube.com/watch?v=FDiMl_yQmgk

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
Eklenenler: 
 -Oyundan geliyor olması gereken verileri sağlayacak Temsili bir Windows Form uygulaması oluşturuldu.
 -Windows Form uygulaması veritabanına entegre edildi, Siteden olunun kayıt ile giriş yapılıp Windows Form üzerinden karakter oluşturulup, veritabanına kaydedildi.
 -Windows Form üzerinden oluşturulan dört farklı karakterin her birisi kendi type'ı seçildiğinde type'ında en yüksek level olan karakter getirilecek şekilde, sectionda level, buyruk ve karakter adı da dahil olmak üzere gösterildi, Seçilen karakterin görüntüsü aynı sectionda gösterildi.
 -Oluşturulan karakterlerden, En iyi 10 oyuncu listesi yapıldı, listeden tıklanılan karakterin bilgileri aynı şekilde section'a yazdırıldı.
 -Veritabanından oyun içi event bilgileri çekildi ve Duyurular kısmına eklendi.
 -Sıralama sayfasına en yüksek leveldeki ilk 100 karakter veritabanından çekildi, aynı şekilde leveli, karakter type'ı, buyruğu ve karakter adı sıralamada gösterildi.
 -Siteye giriş yapıldıktan sonra, Userpanelde karakter bilgileri ve hesap bilgileri gösterildi.
 -Site tamamen mobil uyumlu hale getirildi.
 -HTML,CSS Geliştirmesi yapıldı.
