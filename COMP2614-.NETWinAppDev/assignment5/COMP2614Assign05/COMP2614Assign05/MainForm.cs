using System;
using System.Drawing;
using System.Windows.Forms;

namespace COMP2614Assign05
{
    public partial class MainForm : Form
    {
        private ToolTip validationStatusToolTip;

        public MainForm()
        {
            InitializeComponent();
            validationStatusToolTip = new ToolTip();
        }

        private void buttonCheckDate_Click(object sender, EventArgs e)
        {
            if(DateValidator.Validate(textBoxYear.Text, textBoxMonth.Text, textBoxDay.Text))
            {
                labelValidationStatus.Text = "Valid";
                labelValidationStatus.ForeColor = Color.Green;
                validationStatusToolTip.SetToolTip(labelValidationStatus, "Entered Date is Valid");
            }
            else
            {
                labelValidationStatus.Text = "Invalid";
                labelValidationStatus.ForeColor = Color.Red;
                validationStatusToolTip.SetToolTip(labelValidationStatus, "Entered Date is NOT Valid");
            }
        }

        private void textBoxYear_GotFocus(Object sender, EventArgs e)
        {
            textBoxYear.SelectAll();
        }

        private void textBoxMonth_GotFocus(Object sender, EventArgs e)
        {
            textBoxMonth.SelectAll();
        }

        private void textBoxDay_GotFocus(Object sender, EventArgs e)
        {
            textBoxDay.SelectAll();
        }
    }
}