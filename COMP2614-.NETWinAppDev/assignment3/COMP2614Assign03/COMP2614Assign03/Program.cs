using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMP2614Assign03
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length != 1)
                return;

            string filePath = args[0];

            List<string> fileData = ReadFile(filePath);

            InvoiceService invoiceService = new InvoiceService(fileData);
            IEnumerable<Invoice> invoices = invoiceService.GetInvoices();

            ConsolePrinter.PrintInvoices(invoices);

        }

        static List<string> ReadFile(string path)
        {
            List<string> data = new List<string>();

            if (File.Exists(path))
            {
                StreamReader reader = null;
                try
                {
                    reader = new StreamReader(path);
                    while(reader.Peek() > 0)
                    {
                        data.Add(reader.ReadLine());
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"\n{ex.Message}\n");
                }
                finally
                {
                    if(reader != null)
                    {
                        reader.Dispose();
                    }
                }
            }
            else
            {
                Console.WriteLine("\nFile not found.\n");
            }

            return data;
        }
    }

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
        }

        private static void PrintInvoice(Invoice invoice)
        {
            Console.WriteLine($"{"Invoice Number:", 15} {invoice.Number}");
            Console.WriteLine($"{"Invoice Date:",15} {invoice.Date.ToLongDateString()}");
            Console.WriteLine($"{"Discount Date:",15} {invoice.Date.ToLongDateString()}");
            Console.WriteLine($"{"Terms:",15} {invoice.Terms[0]}% {invoice.Terms[1]}{invoice.Terms[2]} days ADI");
            PrintLineSeparator();
            Console.WriteLine("{Qty, 3} {SKU, 8} {Description, 20} {Price, 7} {PST, 3} Ext");
            PrintLineSeparator();
            decimal subTotal = 0;
            decimal tax = 0;
            foreach (InvoiceItem item in invoice.Items)
            {
                Console.WriteLine($"{item.Quantity, 3} {item.Sku, 8} {item.Description, 20} {item.Price, 7:N2} {item.Taxable, 3} {item.ExtendedCost}");
                subTotal += item.ExtendedCost;
            }
            decimal total = subTotal + tax;
            decimal discount = total * ((int)char.GetNumericValue(invoice.Terms[0]) / 100);
            PrintLineSeparator();
            Console.WriteLine($"{"",12} {"Subtotal:",20} {"",11} {subTotal}");
            Console.WriteLine($"{"",12} {"GST:",20} {"",11} {tax}");
            PrintLineSeparator();
            Console.WriteLine($"{"",12} {"Total:",20} {"",11} {total}");
            Console.WriteLine();
            Console.WriteLine($"{"",12} {"Discount:",20} {"",11} {discount}");
        }

        private static void PrintLineSeparator()
        {
            Console.WriteLine("-------------------------------");
        }
    }
}
