#include <stdio.h>

int main()
{
    int n = 5, i, j;
    char c= 'A';
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("%c ", c);
            c++;
        }
        printf("\n");
    }
    return 0;
}