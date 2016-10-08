using COMP2614Assign03.Entities;
using System;
using System.Linq;
using System.Collections.Generic;

namespace COMP2614Assign03
{
    /// <summary>
    /// Helper to print invoices to the Console.
    /// </summary>
    public class ConsolePrinter
    {
        public static void PrintInvoices(IEnumerable<Invoice> invoices)
        {
            Console.WriteLine("Invoice Listing");
            PrintLineSeparator();
            Console.WriteLine();

            foreach (Invoice invoice in invoices)
            {
                PrintInvoice(invoice);
            }

            if (!invoices.Any())
            {
                Console.WriteLine("0 invoices.");
            }

        }

        public static void PrintInvoice(Invoice invoice)
        {
            Console.WriteLine($"{"Invoice Number:",-15} {invoice.Number}");
            Console.WriteLine($"{"Invoice Date:",-15} {invoice.Date.ToString("MMM d, yyyy")}");
            Console.WriteLine($"{"Discount Date:",-15} {invoice.DiscontDate.ToString("MMM d, yyyy")}");
            Console.WriteLine($"{"Terms:",-15} {invoice.TermPercentage}% {invoice.TermDays} days ADI");
            PrintLineSeparator();
            Console.WriteLine($"{"Qty",3} {"SKU",-11} {"Description",-20} {"Price",11} {"PST",3} {"Ext",10}");
            PrintLineSeparator();

            foreach (InvoiceItem item in invoice.Items)
            {
                Console.WriteLine($"{item.Quantity,3} {item.Sku,-11} {item.Description,-20} {item.Price,11:N2} {item.Taxable,2} {item.ExtendedCost,11:N2}");
            }

            PrintLineSeparator();
            Console.WriteLine($"{"",16}{"Subtotal:",-20} {"",15} {invoice.Subtotal,10:N2}");
            Console.WriteLine($"{"",16}{"GST:",-20} {"",15} {invoice.Tax,10:N2}");
            PrintLineSeparator();
            Console.WriteLine($"{"",16}{"Total:",-20} {"",15} {invoice.Total,10:N2}");
            Console.WriteLine();
            Console.WriteLine($"{"",16}{"Discount:",-20} {"",15} {invoice.Discount,10:N2}");

            Console.WriteLine();
            Console.WriteLine();
        }

        private static void PrintLineSeparator()
        {
            Console.WriteLine("---------------------------------------------------------------");
        }
    }
}