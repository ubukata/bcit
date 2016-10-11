using System;
using System.Collections.Generic;
using System.Linq;

namespace COMP2614Assign03.Entities
{
    /// <summary>
    /// Represents an invoice, only created using a file data.
    /// </summary>
    /// Protected set to prevent the manipulation of it.
    public class Invoice
    {
        public int Number { get; protected set; }
        public DateTime Date { get; protected set; }
        public int TermPercentage { get; protected set; }
        public int TermDays { get; protected set; }
        public List<InvoiceItem> Items { get; protected set; }

        public DateTime DiscontDate
        {
            get
            {
                return Date.AddDays(TermDays);
            }
        }

        public decimal Tax
        {
            get
            {
                return Items.Sum(item => item.Tax);
            }
        }

        public decimal Subtotal
        {
            get
            {
                return Items.Sum(item => item.ExtendedCost);
            }
        }

        public decimal Total
        {
            get
            {
                return Subtotal + Tax;
            }
        }

        public decimal Discount
        {
            get
            {
                return Total * (TermPercentage / 100.00m);
            }
        }

        protected Invoice()
        {
            Items = new List<InvoiceItem>();
        }

        /// <summary>
        /// Initialize the Invoice with the file data.
        /// </summary>
        /// <param name="data">String with the format: InvoiceNumber:InvoiceDate:Terms</param>
        public Invoice(string[] data) : this()
        {
            Number = Convert.ToInt32(data[0]);
            Date = Convert.ToDateTime(data[1]);
            char[] terms = data[2].ToCharArray();
            TermPercentage = (int)char.GetNumericValue(terms[0]);
            TermDays = (int)char.GetNumericValue(terms[1]) * 10 + (int)char.GetNumericValue(terms[2]);
        }

        public void AddItem(string[] data)
        {
            Items.Add(new InvoiceItem(data));
        }
    }
}
