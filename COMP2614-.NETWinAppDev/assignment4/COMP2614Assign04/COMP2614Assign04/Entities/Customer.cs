namespace COMP2614Assign04.Entities
{
    public class Customer
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string PostalCode { get; set; }
        public bool? CreditHold { get; set; }
    }
}
