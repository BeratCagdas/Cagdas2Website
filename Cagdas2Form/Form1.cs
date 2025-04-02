using System;
using System.Windows.Forms;

namespace Cagdas2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private void Form1_Load(object sender, EventArgs e)
        {
          
        }

        private void btnLogin_Click_(object sender, EventArgs e)
        {
            MessageBox.Show("Butona tıklandı");
            string kullaniciAdi = txtUsername.Text;
            string sifre = txtPassword.Text;

            if (MongoDBHelper.KullaniciDogrula(kullaniciAdi, sifre))
            {
                MessageBox.Show("Giriş başarılı!", "Başarılı", MessageBoxButtons.OK, MessageBoxIcon.Information);
               
            }
            else
            {
                MessageBox.Show("Hatalı kullanıcı adı veya şifre!", "Hata", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void txtUsername_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnLogin_Click(object sender, EventArgs e)
        {

            string kullaniciAdi = txtUsername.Text;
            string sifre = txtPassword.Text;

            if (MongoDBHelper.KullaniciDogrula(kullaniciAdi, sifre))
            {
                MessageBox.Show("Giriş başarılı!", "Başarılı", MessageBoxButtons.OK, MessageBoxIcon.Information);
             
                MainForm mainForm = new MainForm();
                mainForm.KullaniciAdi = kullaniciAdi;
                this.Hide();  
                mainForm.Show();  
            }
            else
            {
                MessageBox.Show("Hatalı kullanıcı adı veya şifre!", "Hata", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}