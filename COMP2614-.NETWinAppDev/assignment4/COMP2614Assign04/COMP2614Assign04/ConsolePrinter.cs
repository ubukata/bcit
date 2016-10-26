using COMP2614Assign04.Entities;
using System;
using System.Collections.Generic;

namespace COMP2614Assign04
{
    public class ConsolePrinter
    {
        public static void PrintProvinces(string[] provinces)
        {
            Console.WriteLine("Select province filter:");
            for (int i = 0; i < provinces.Length; i++)
            {
                Console.WriteLine($"    {(i + 1)}: {provinces[i]}");
            }
        }

        public static void PrintCustomers(List<Customer> customers, string province)
        {
            Console.WriteLine($"Customer listing for {province}");
            Console.WriteLine();
            Console.WriteLine($"{"CompanyName",-34} {"City",-16} {"Prov",-4} {"Postal",-7} {"Hold",-4}");
            Console.WriteLine("---------------------------------------------------------------------");

            foreach (Customer item in customers)
            {
                string creditHold = string.Empty;
                if (item.CreditHold.HasValue)
                {
                    creditHold = item.CreditHold.Value ? "Y" : "N";
                }

                Console.WriteLine($"{item.Name,-34} {item.City,-16} {item.Province,-4} {item.PostalCode,-7} {creditHold,2}");
            }

        }
    }
}
