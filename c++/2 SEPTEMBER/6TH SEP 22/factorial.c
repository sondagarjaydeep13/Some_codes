#include<stdio.h>

int main()
{
    int n=5,i,fact=1;
    for(i=n;i>=1;i--){
        fact*=i;
    }
    printf("Factorial of %d is %d",n,fact);
    return 0;
}