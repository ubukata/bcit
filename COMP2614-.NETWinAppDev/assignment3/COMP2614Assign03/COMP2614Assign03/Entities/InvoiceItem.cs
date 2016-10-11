using System;

namespace COMP2614Assign03.Entities
{
    /// <summary>
    /// Represents an invoice item, only created using a file data.
    /// </summary>
    /// Protected set to prevent the manipulation of it.
    public class InvoiceItem
    {
        public int Quantity { get; protected set; }
        public string Sku { get; protected set; }
        public string Description { get; protected set; }
        public decimal Price { get; protected set; }
        public char Taxable { get; protected set; }

        public decimal ExtendedCost
        {
            get
            {
                return Quantity * Price;
            }
        }

        public decimal Tax
        {
            get
            {
                if (Taxable == 'Y')
                {
                    return ExtendedCost * TaxesBc.Gst + ExtendedCost * TaxesBc.Pst;
                }

                return ExtendedCost * TaxesBc.Gst;
            }
        }

        protected InvoiceItem()
        {

        }

        /// <summary>
        /// Initialize the Invoice Item with the file data.
        /// </summary>
        /// <param name="data">String with the format: Quantity:Sku:Description:Price:Taxable</param>
        public InvoiceItem(string[] data) : this()
        {
            Quantity = Convert.ToInt32(data[0]);
            Sku = data[1];
            Description = data[2];
            Price = Convert.ToDecimal(data[3]);
            Taxable = data[4][0];
        }
    }
}
