using System;

namespace COMP2614Midterm
{
    public class GroceryItem
    {
        public string Description { get; private set; }
        public decimal Price { get; private set; }
        public DateTime ExpirationDate { get; private set; }

        public GroceryItem()
        {

        }

        public GroceryItem(string description, decimal price, DateTime expirationDate)
        {
            Description = description;
            Price = price;
            ExpirationDate = expirationDate;
        }
    }
}