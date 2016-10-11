using COMP2614Assign03.Entities;
using System;
using System.Collections.Generic;

namespace COMP2614Assign03
{
    /// <summary>
    /// Main console program.
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length != 1)
            {
                Console.WriteLine("\nOne argument with the path to the data file is expected.\n");
                return;
            }

            string filePath = args[0];

            InvoicesService invoiceService = new InvoicesService(filePath);

            IEnumerable<Invoice> invoices = invoiceService.GetInvoices();

            ConsolePrinter.PrintInvoices(invoices);
        }
    }
}
