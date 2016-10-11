using COMP2614Assign03.Entities;
using System;
using System.Collections.Generic;
using System.IO;

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

        /// <summary>
        /// Initialize the service with the file content.
        /// </summary>
        /// <param name="pathToFile">Path to file data.</param>
        public InvoicesService(string pathToFile) : this()
        {
            List<string> fileData = ReadFile(pathToFile);
            ParseFileData(fileData);
        }

        /// <summary>
        /// Get all invoices.
        /// </summary>
        /// <returns>Returns a List of Invoice with all invoices.</returns>
        /// Returns an IEnumerable to prevent the manipulation of it (no Add, Remove, ...)
        public IEnumerable<Invoice> GetInvoices()
        {
            return Invoices;
        }

        /// <summary>
        /// Parse each line of the file to an Invoice and storage it in the Invoices list.
        /// </summary>
        /// <param name="fileData">List of strings that represents each line of the file.</param>
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

        /// <summary>
        /// Read the entire file.
        /// </summary>
        /// <param name="path">Path to file</param>
        /// <returns>List of string where each item represents one line in the file.</returns>
        private static List<string> ReadFile(string path)
        {
            List<string> data = new List<string>();

            if (File.Exists(path))
            {
                StreamReader reader = null;
                try
                {
                    reader = new StreamReader(path);
                    while (reader.Peek() > 0)
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
                    if (reader != null)
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
