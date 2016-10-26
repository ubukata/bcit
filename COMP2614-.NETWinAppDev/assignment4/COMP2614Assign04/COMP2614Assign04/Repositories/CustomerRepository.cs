using COMP2614Assign04.Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace COMP2614Assign04.Repositories
{
    public class CustomerRepository : BaseRepository
    {
        public List<Customer> GetAllByProvince(string province)
        {
            List<Customer> data = new List<Customer>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string query = @"SELECT CustomerCode,CompanyName,Address,City,Province,PostalCode,CreditHold FROM Customer WHERE Province = @Province";

                using (SqlCommand command = new SqlCommand())
                {
                    command.CommandType = System.Data.CommandType.Text;
                    command.CommandText = query;
                    command.Connection = connection;
                    command.Parameters.AddWithValue("@Province", province);

                    connection.Open();

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            data.Add(
                                new Customer()
                                {
                                    Code = reader["CustomerCode"] as string,
                                    Name = reader["CompanyName"] as string,
                                    Address = !reader.IsDBNull(2) ? reader["Address"] as string : string.Empty,
                                    City = !reader.IsDBNull(3) ? reader["City"] as string : string.Empty,
                                    Province = !reader.IsDBNull(4) ? reader["Province"] as string : string.Empty,
                                    PostalCode = !reader.IsDBNull(5) ? reader["PostalCode"] as string : string.Empty,
                                    CreditHold = !reader.IsDBNull(6) ? (bool?)Convert.ToBoolean(reader["CreditHold"]) : null,
                                });
                        }
                    }
                }
            }

            return data;
        }
    }
}
