using System.Collections.Generic;
using System.Linq;

namespace COMP2614Midterm
{
    public class GroceryItemCollection
    {
        public List<GroceryItem> Items { get; set; }

        public List<GroceryItem> ItemsSortedByExpirationDate
        {
            get
            {
                return Items.OrderByDescending(item => item.ExpirationDate).ToList();
            }
        }

        public decimal TotalPrice
        {
            get
            {
                return Items.Sum(item => item.Price);
            }
        }

        public GroceryItemCollection()
        {
            Items = new List<GroceryItem>();
        }

        public void AddItem(GroceryItem item)
        {
            Items.Add(item);
        }
    }
}