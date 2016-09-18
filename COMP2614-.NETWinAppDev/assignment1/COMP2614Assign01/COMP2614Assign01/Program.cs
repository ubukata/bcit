using System;

namespace COMP2614Assign01
{
    class Program
    {
        static void Main(string[] args)
        {
            PrintFormatedLine("number", "square", "cube");
            PrintLineSeparator();

            int sumNumbers = 0, sumSquares = 0, sumCubes = 0;

            for (int number = 0; number <= 20; number++)
            {
                if (number % 2 == 0)
                {
                    int square = number * number;
                    int cube = square * number;

                    PrintFormatedLine(number, square, cube);

                    sumNumbers += number;
                    sumSquares += square;
                    sumCubes += cube;
                }
            }

            PrintLineSeparator();
            PrintFormatedLine(sumNumbers, sumSquares, sumCubes);

            //used to keep the console open
            Console.Read();
        }

        static void PrintFormatedLine(object column1, object column2, object column3)
        {
            Console.WriteLine("{0, 8:N0} {1, 8:N0} {2, 8:N0}", column1, column2, column3);
        }

        static void PrintLineSeparator()
        {
            Console.WriteLine("--------------------------");
        }
    }
}
