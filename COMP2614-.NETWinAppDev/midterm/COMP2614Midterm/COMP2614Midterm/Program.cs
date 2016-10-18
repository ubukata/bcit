using System;

namespace COMP2614Midterm
{
    public class Program
    {
        public static void Main(string[] args)
        {
            GroceryItem milk = new GroceryItem("4L Milk", 3.87m, new DateTime(2016, 10, 16));
            GroceryItem cheese = new GroceryItem("500g Cottage Cheese", 4.28m, new DateTime(2016, 11, 5));
            GroceryItem mushroom = new GroceryItem("1 Tin Mushroom Soup", 0.99m, DateTime.MinValue);
            GroceryItem dogFood = new GroceryItem("15kg Dog Food", 29.99m, new DateTime(2018, 07, 23));

            GroceryItemCollection invoice = new GroceryItemCollection();

            invoice.AddItem(milk);
            invoice.AddItem(cheese);
            invoice.AddItem(mushroom);
            invoice.AddItem(dogFood);

            ConsolePrinter.PrintReceipt(invoice, SortingType.NaturalOrder);
            ConsolePrinter.PrintReceipt(invoice, SortingType.SortedByExpirationDate);
        }
    }
}
