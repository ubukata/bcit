using COMP2614Assign03.Entities;
using System;
using System.Collections.Generic;
using System.IO;

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

            List<string> fileData = ReadFile(filePath);

            InvoicesService invoiceService = new InvoicesService(fileData);
            IEnumerable<Invoice> invoices = invoiceService.GetInvoices();

            ConsolePrinter.PrintInvoices(invoices);
        }

        private static List<string> ReadFile(string path)
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
}
