using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMP2614Assign03
{
    public class InvoiceService
    {
        private List<Invoice> Invoices;

        private const decimal Gst = 0.05m;
        private const decimal Pst = 0.07m;

        protected InvoiceService()
        {
            Invoices = new List<Invoice>();
        }

        public InvoiceService(List<string> fileData) : this()
        {
            ParseFile(fileData);
        }

        private void ParseFile(List<string> fileData)
        {
            Invoice invoice = null;

            foreach (string data in fileData)
            {
                string[] splitItems = data.Split('|');
                string header = splitItems[0];
                string[] headerSplit = header.Split(':');

                invoice = new Invoice(headerSplit);

                for (int i = 1; i < splitItems.Length; i++)
                {
                    invoice.AddItem(splitItems[i].Split(':'));
                }

                Invoices.Add(invoice);
            }
        }

        public IEnumerable<Invoice> GetInvoices()
        {
            return Invoices;
        }
    }

    public class Invoice
    {
        public int Number { get; set; }
        public DateTime Date { get; set; }
        public char[] Terms { get; set; }
        public List<InvoiceItem> Items { get; set; }

        public Invoice()
        {
            Items = new List<InvoiceItem>();
        }

        public Invoice(string[] data) : this()
        {
            Number = Convert.ToInt32(data[0]);
            Date = Convert.ToDateTime(data[1]);
            Terms = data[2].ToCharArray();
        }

        public void AddItem(string[] data)
        {
            InvoiceItem newItem = new InvoiceItem(data);
            Items.Add(newItem);
        }
    }

    public class InvoiceItem
    {

        public int Quantity { get; set; }
        public string Sku { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public char Taxable { get; set; }

        public decimal ExtendedCost
        {
            get
            {
                return Quantity * Price;
            }
        }

        public InvoiceItem()
        {

        }

        public InvoiceItem(string[] data)
        {
            Quantity = Convert.ToInt32(data[0]);
            Sku = data[1];
            Description = data[2];
            Price = Convert.ToDecimal(data[3]);
            Taxable = data[4][0];
        }
    }
}
