using COMP2614Assign04.Entities;
using COMP2614Assign04.Repositories;
using System;
using System.Collections.Generic;

namespace COMP2614Assign04
{
    public class Program
    {
        public static void Main(string[] args)
        {
            ProvinceRepository provinceRepository = new ProvinceRepository();
            CustomerRepository customerRepository = new CustomerRepository();

            string[] provinces = provinceRepository.GetAll();

            //Print the list of provinces and wait for user input
            ConsolePrinter.PrintProvinces(provinces);

            //Try to pase the user input and if success list customers from respective province
            //in case of error prints the respective error
            int indexSelectedProvince;
            if (int.TryParse(Console.ReadLine(), out indexSelectedProvince))
            {
                if(indexSelectedProvince > provinces.Length)
                {
                    Console.WriteLine($"Invalid input, input should be between 1 and {provinces.Length}");
                    return;
                }

                string selectedProvince = provinces[indexSelectedProvince - 1];
                List<Customer> customers = customerRepository.GetAllByProvince(selectedProvince);

                ConsolePrinter.PrintCustomers(customers, selectedProvince);
            }
            else {
                Console.WriteLine("Invalid input, input should be an integer");
            }
        }
    }
}
