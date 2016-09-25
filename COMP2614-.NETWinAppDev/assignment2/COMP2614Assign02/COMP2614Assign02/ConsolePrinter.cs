using System;

namespace COMP2614Assign02
{
    public class ConsolePrinter
    {
        public static void PrintContactsInformation(Contact[] contacts)
        {
            //skip a line
            Console.WriteLine();
            Console.WriteLine("Contacts");
            Console.WriteLine("-----------------------------");

            foreach (var contact in contacts)
            {
                PrintContactInformation(contact);
            }
        }

        public static void PrintContactInformation(Contact contact)
        {
            Console.WriteLine("{0} {1}", contact.FirstName, contact.LastName);
            Console.WriteLine(contact.Address);
            Console.WriteLine("{0} {1}  {2}", contact.City, contact.Province.ToUpper(), contact.PostalCode.ToUpper());
            //skip two line
            Console.WriteLine();
            Console.WriteLine();
        }
    }
}
