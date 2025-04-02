using BCrypt.Net;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Cagdas2
{
    public class MongoDBHelper
    {
        private static string connectionString = "mongodb://localhost:27017/"; // Buraya kendi bağlantı URL'nizi girin.
        private static string databaseName = "kayit_sistemi"; // Kullanılan veritabanı adı
        private static string collectionName = "users"; // Kullanıcı kayıtlarının olduğu koleksiyon

        private static IMongoDatabase database;
        private static IMongoCollection<BsonDocument> collection;

        static MongoDBHelper()
        {
            var client = new MongoClient(connectionString);
            database = client.GetDatabase(databaseName);
            collection = database.GetCollection<BsonDocument>(collectionName);
        }
        public static void KarakterEkle(string kullaniciAdi, string charname, string charlevel, string chartype, string charreligion)
        {
            var filter = Builders<BsonDocument>.Filter.Eq("username", kullaniciAdi);  // Kullanıcı adını filtrele
            var update = Builders<BsonDocument>.Update
                .Set("character.name", charname)  // Karakter adı
                .Set("character.level", charlevel)  // Karakter seviyesi
                .Set("character.type", chartype)  // Karakter tipi
                .Set("character.religion", charreligion);  // Karakter dini

            collection.UpdateOne(filter, update);  // Kullanıcıyı bulup güncelle
        }
        public static BsonDocument KarakteriGetir(string kullaniciAdi)
        {
            var filter = Builders<BsonDocument>.Filter.Eq("username", kullaniciAdi);  // Kullanıcı adını filtrele
            var result = collection.Find(filter).FirstOrDefault();  // Kullanıcıyı bul

            if (result != null && result.Contains("character"))
            {
                return result["character"].AsBsonDocument;  // Karakter bilgilerini döndür
            }
            return null;  // Karakter bilgisi yoksa null döndür
        }
        public static bool KullaniciDogrula(string kullaniciAdi, string sifre)
        {
            var filter = Builders<BsonDocument>.Filter.Eq("username", kullaniciAdi);

            var result = collection.Find(filter).FirstOrDefault();

            if (result != null)
            {
                // MongoDB'den alınan hash'li şifreyi alıyoruz
                var hashedPassword = result["password"].ToString();

                // Girişte girilen şifreyi bcrypt ile kontrol ediyoruz
                if (BCrypt.Net.BCrypt.Verify(sifre, hashedPassword))
                {
                    return true;
                }
            }
            return false;
        }
    }
}