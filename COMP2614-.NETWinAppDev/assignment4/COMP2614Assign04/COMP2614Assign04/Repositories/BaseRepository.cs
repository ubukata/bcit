namespace COMP2614Assign04.Repositories
{
    public class BaseRepository
    {
        protected string connectionString = @"Server=tcp:comp2614.database.windows.net,1433;
                                            Initial Catalog=week06;
                                            User ID=student;
                                            Password=93nu5#S163;
                                            Encrypt=True;
                                            TrustServerCertificate=False;
                                            Connection Timeout=30;";
    }
}
