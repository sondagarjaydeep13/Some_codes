#include <stdio.h>

int main()
{
    int a = 6;
    // AND Operator (&&) => true + true = true
    // printf("%d\n", (a == 6) && (a > 5));
    // printf("%d\n", (a == 6) && (a < 5));
    // printf("%d\n", (a != 6) && (a > 5));
    // printf("%d\n", (a != 6) && (a < 5));

    // OR Operator (||) => false + false = false
    // printf("%d\n", (a == 6) || (a > 5));
    // printf("%d\n", (a == 6) || (a < 5));
    // printf("%d\n", (a != 6) || (a > 5));
    // printf("%d\n", (a != 6) || (a < 5));

    // NOT Operator (!)
    printf("%d\n",!(a==6));
    printf("%d\n",!(a!=6));
    return 0;
}