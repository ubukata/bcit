using System;

namespace COMP2614Assign02
{
    class Program
    {
        static void Main(string[] args)
        {
            string firstName, lastName, address, city, province, postalCode;
            Console.WriteLine("Contact Information");
            Console.WriteLine("-----------------------------");
            Console.Write("Firstname: ");
            firstName = Console.ReadLine();
            Console.Write("Lastname: ");
            lastName = Console.ReadLine();
            Console.Write("Address: ");
            address = Console.ReadLine();
            Console.Write("City: ");
            city = Console.ReadLine();
            Console.Write("Province: ");
            province = Console.ReadLine();
            Console.Write("Postal Code: ");
            postalCode = Console.ReadLine();

            Contact[] contacts = ProcessContactInformation(firstName, lastName, address, city, province, postalCode);

            ConsolePrinter.PrintContactsInformation(contacts);

            //keep console open
            Console.ReadLine();
        }

        private static Contact[] ProcessContactInformation(string firstName, string lastName, string address, string city, string province, string postalCode)
        {
            Contact[] contacts = new Contact[3];
            // Populate Contact class creating an empty object and populate via properties
            Contact contact1 = new Contact();
            contact1.FirstName = firstName;
            contact1.LastName = lastName;
            contact1.Address = address;
            contact1.City = city;
            contact1.Province = province;
            contact1.PostalCode = postalCode;

            contacts[0] = contact1;

            // Populate Contact class using a parameterized constructor
            Contact contact2 = new Contact(firstName, lastName, address, city, province, postalCode);
            contacts[1] = contact2;

            // Populate Contact class using object initializer syntax
            Contact contact3 = new Contact() {
                FirstName = firstName,
                LastName = lastName,
                Address = address,
                City = city,
                Province = province,
                PostalCode = postalCode
            };
            contacts[2] = contact3;

            return contacts;
        }
    }
}
