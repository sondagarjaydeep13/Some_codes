#include <stdio.h>

int main()
{
    int n = 8, i;
    if (n == 1 || n == 2)
    {
        printf("Value is prime");
    }
    for (i = 2; i <= n - 1; i++)
    {
        if (n % i == 0)
        {
            printf("Number is not prime");
            break;
        }
        else{
            printf("Number is prime");
            break;
        }
    }
    return 0;
}