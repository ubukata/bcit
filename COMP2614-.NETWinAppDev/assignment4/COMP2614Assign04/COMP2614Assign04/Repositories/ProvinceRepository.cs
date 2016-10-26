using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace COMP2614Assign04.Repositories
{
    public class ProvinceRepository : BaseRepository
    {
        public string[] GetAll()
        {
            List<string> data = new List<string>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string query = @"SELECT DISTINCT Province FROM Customer ORDER BY Province";
                using (SqlCommand command = new SqlCommand())
                {
                    command.CommandType = System.Data.CommandType.Text;
                    command.CommandText = query;
                    command.Connection = connection;

                    connection.Open();

                    using(SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            if (!reader.IsDBNull(0))
                                data.Add(reader["Province"] as string);
                        }
                    }

                }
            }

            return data.ToArray();
        }
    }
}
