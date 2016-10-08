using COMP2614Assign03.Entities;
using System.Collections.Generic;

namespace COMP2614Assign03
{
    /// <summary>
    /// Service for invoices, each instace represents a file data and its invoices. Only created with file data.
    /// </summary>
    public class InvoicesService
    {
        private List<Invoice> Invoices;

        protected InvoicesService()
        {
            Invoices = new List<Invoice>();
        }

        public InvoicesService(List<string> fileData) : this()
        {
            ParseFileData(fileData);
        }

        private void ParseFileData(List<string> fileData)
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
}
