using System;

namespace COMP2614Assign05
{
    public class DateValidator
    {
        public static bool Validate(string year, string month, string day)
        {
            DateTime date;

            if(DateTime.TryParse($"{month}/{day}/{year}", out date))
            {
                if (date.Year < 1900)
                {
                    return false;
                }

                return true;
            }

            return false;
        }
    }
}