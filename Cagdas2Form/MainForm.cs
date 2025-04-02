using System;
using System.Windows.Forms;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Cagdas2
{
    public partial class MainForm : Form
    {
        public string KullaniciAdi { get; set; }  // Kullanıcı adı bilgisi

        // Karakter bilgilerini tutacak değişkenler
        private string charname = "";
        private string charlevel = "";
        private string chartype = "";
        private string charreligion = "";

        public MainForm()
        {
            InitializeComponent();
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            labeluser.Text = KullaniciAdi; // Kullanıcı adını label'a yaz

            // Kullanıcıya ait karakter bilgilerini MongoDB'den çek
            var karakter = MongoDBHelper.KarakteriGetir(KullaniciAdi);

            // Eğer karakter bilgisi varsa, ListBox'a ekle ve butonu devre dışı bırak
            if (karakter != null)
            {
                listBox1.Items.Add("Karakter Adı: " + karakter["name"]);
                listBox1.Items.Add("Seviye: " + karakter["level"]);
                listBox1.Items.Add("Tip: " + karakter["type"]);
                listBox1.Items.Add("Din: " + karakter["religion"]);

                btnCreateCharacter.Enabled = false;  // Yeni karakter oluşturulmasını engelle
            }
        }

        // Karakter oluşturma butonuna tıklandığında
        private void btnCreateCharacter_Click_1(object sender, EventArgs e)
        {
            // Eğer karakter zaten oluşturulmuşsa, işlem yapma
            if (!btnCreateCharacter.Enabled)
            {
                MessageBox.Show("Zaten bir karakteriniz mevcut!", "Uyarı", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            // Karakter bilgilerini al
            charname = charName.Text;
            charlevel = charLevel.Text;
            chartype = charType.Text;
            charreligion = charReligion.Text;

            // Kullanıcı adıyla birlikte MongoDB'ye kaydet
            MongoDBHelper.KarakterEkle(KullaniciAdi, charname, charlevel, chartype, charreligion);

            // Listeye karakteri ekle
            listBox1.Items.Add("Karakter Adı: " + charname);
            listBox1.Items.Add("Seviye: " + charlevel);
            listBox1.Items.Add("Tip: " + chartype);
            listBox1.Items.Add("Din: " + charreligion);

            // Butonu devre dışı bırak
            btnCreateCharacter.Enabled = false;
          
        }

        // Listeyi temizle butonuna tıklandığında
        private void btnClearList_Click(object sender, EventArgs e)
        {
            listBox1.Items.Clear();
            btnCreateCharacter.Enabled = true;  // Listeyi temizledikten sonra butonu tekrar aktif et
        }
    }
}
