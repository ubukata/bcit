using System;
using System.Collections.Generic;

namespace COMP2614Midterm
{
    public class ConsolePrinter
    {
        public static void PrintReceipt(GroceryItemCollection invoice, SortingType sorting)
        {
            List<GroceryItem> items = null;

            switch (sorting)
            {
                case SortingType.NaturalOrder:
                    Console.WriteLine("Natural Order:");
                    items = invoice.Items;
                    break;
                case SortingType.SortedByExpirationDate:
                    Console.WriteLine("Sorted Order: [Price Descending]");
                    items = invoice.ItemsSortedByExpirationDate;
                    break;
            }

            Console.WriteLine($"{"Grocery Item",-30} {"Price",5}  {"Expires",-16}");
            Console.WriteLine("------------------------------------------------------");
            foreach (GroceryItem item in items)
            {
                string expiration = (item.ExpirationDate == DateTime.MinValue ? "<Never>" : item.ExpirationDate.ToString("ddd MMM d, yyyy"));
                Console.WriteLine($"{item.Description,-30} {item.Price,5:N2}  {expiration,-16}");
            }
            Console.WriteLine("------------------------------------------------------");
            Console.WriteLine($"{"Total:",-30} {invoice.TotalPrice,-23:N2}");
            Console.WriteLine();
            Console.WriteLine();
        }
    }
}
