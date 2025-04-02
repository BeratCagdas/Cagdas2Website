
namespace Cagdas2
{
    partial class MainForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.labeluser = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.btnCreateCharacter = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.Karakter = new System.Windows.Forms.Label();
            this.charName = new System.Windows.Forms.TextBox();
            this.charLevel = new System.Windows.Forms.TextBox();
            this.charType = new System.Windows.Forms.ComboBox();
            this.charReligion = new System.Windows.Forms.ComboBox();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.listBox1 = new System.Windows.Forms.ListBox();
            this.btnClearList = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // labeluser
            // 
            this.labeluser.AutoSize = true;
            this.labeluser.Location = new System.Drawing.Point(403, 47);
            this.labeluser.Name = "labeluser";
            this.labeluser.Size = new System.Drawing.Size(35, 13);
            this.labeluser.TabIndex = 0;
            this.labeluser.Text = "label1";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(321, 47);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(59, 13);
            this.label1.TabIndex = 1;
            this.label1.Text = "Hoş Geldin";
            // 
            // btnCreateCharacter
            // 
            this.btnCreateCharacter.Location = new System.Drawing.Point(348, 221);
            this.btnCreateCharacter.Name = "btnCreateCharacter";
            this.btnCreateCharacter.Size = new System.Drawing.Size(137, 23);
            this.btnCreateCharacter.TabIndex = 2;
            this.btnCreateCharacter.Text = "Karakter Oluştur";
            this.btnCreateCharacter.UseVisualStyleBackColor = true;
            this.btnCreateCharacter.Click += new System.EventHandler(this.btnCreateCharacter_Click_1);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(366, 74);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(106, 13);
            this.label2.TabIndex = 3;
            this.label2.Text = "Karakter Oluşturunuz";
            // 
            // Karakter
            // 
            this.Karakter.AutoSize = true;
            this.Karakter.Location = new System.Drawing.Point(285, 104);
            this.Karakter.Name = "Karakter";
            this.Karakter.Size = new System.Drawing.Size(74, 13);
            this.Karakter.TabIndex = 4;
            this.Karakter.Text = "Karakter Adı : ";
            // 
            // charName
            // 
            this.charName.Location = new System.Drawing.Point(377, 101);
            this.charName.Name = "charName";
            this.charName.Size = new System.Drawing.Size(121, 20);
            this.charName.TabIndex = 5;
            // 
            // charLevel
            // 
            this.charLevel.Location = new System.Drawing.Point(377, 128);
            this.charLevel.Name = "charLevel";
            this.charLevel.Size = new System.Drawing.Size(121, 20);
            this.charLevel.TabIndex = 6;
            // 
            // charType
            // 
            this.charType.FormattingEnabled = true;
            this.charType.Items.AddRange(new object[] {
            "Savaşçı",
            "Sura",
            "Ninja",
            "Şaman"});
            this.charType.Location = new System.Drawing.Point(377, 154);
            this.charType.Name = "charType";
            this.charType.Size = new System.Drawing.Size(121, 21);
            this.charType.TabIndex = 7;
            // 
            // charReligion
            // 
            this.charReligion.FormattingEnabled = true;
            this.charReligion.Items.AddRange(new object[] {
            "Shinsoo Krallığı",
            "Chunjo Krallığı",
            "Jinno Krallığı"});
            this.charReligion.Location = new System.Drawing.Point(377, 181);
            this.charReligion.Name = "charReligion";
            this.charReligion.Size = new System.Drawing.Size(121, 21);
            this.charReligion.TabIndex = 8;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(285, 135);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(33, 13);
            this.label4.TabIndex = 9;
            this.label4.Text = "Level";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(285, 162);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(47, 13);
            this.label5.TabIndex = 10;
            this.label5.Text = "Karakter";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(285, 184);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(40, 13);
            this.label6.TabIndex = 11;
            this.label6.Text = "Bayrak";
            // 
            // listBox1
            // 
            this.listBox1.FormattingEnabled = true;
            this.listBox1.Location = new System.Drawing.Point(324, 273);
            this.listBox1.Name = "listBox1";
            this.listBox1.Size = new System.Drawing.Size(187, 108);
            this.listBox1.TabIndex = 12;
            // 
            // btnClearList
            // 
            this.btnClearList.Location = new System.Drawing.Point(369, 387);
            this.btnClearList.Name = "btnClearList";
            this.btnClearList.Size = new System.Drawing.Size(75, 23);
            this.btnClearList.TabIndex = 13;
            this.btnClearList.Text = "temizle";
            this.btnClearList.UseVisualStyleBackColor = true;
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btnClearList);
            this.Controls.Add(this.listBox1);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.charReligion);
            this.Controls.Add(this.charType);
            this.Controls.Add(this.charLevel);
            this.Controls.Add(this.charName);
            this.Controls.Add(this.Karakter);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.btnCreateCharacter);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.labeluser);
            this.Name = "MainForm";
            this.Text = "MainForm";
            this.Load += new System.EventHandler(this.MainForm_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label labeluser;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btnCreateCharacter;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label Karakter;
        private System.Windows.Forms.TextBox charName;
        private System.Windows.Forms.TextBox charLevel;
        private System.Windows.Forms.ComboBox charType;
        private System.Windows.Forms.ComboBox charReligion;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.ListBox listBox1;
        private System.Windows.Forms.Button btnClearList;
    }
}