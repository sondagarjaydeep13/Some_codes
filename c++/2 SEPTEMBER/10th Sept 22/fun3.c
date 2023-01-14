#include<stdio.h>

void Factorial(int n)
{
    int i,fact=1;
    for(i=n;i>=1;i--){
        fact*=i;
    }
    printf("Factorial of %d is %d\n",n,fact);
}

int main()
{
    Factorial(5);
    Factorial(6);
    Factorial(7);
    return 0;
}