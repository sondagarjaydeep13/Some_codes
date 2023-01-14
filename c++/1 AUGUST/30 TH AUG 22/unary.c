#include<stdio.h>

int main()
{
    int a = 5;
    int b = a--;  // single operand
    printf("The value of a is %d\n",a);
    printf("The value of b is %d\n",b);
    return 0;
}