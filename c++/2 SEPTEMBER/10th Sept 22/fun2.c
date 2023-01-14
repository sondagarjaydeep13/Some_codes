#include<stdio.h>

void Addition(int a,int b){
    printf("Addition of %d and %d is %d\n",a,b,a+b);
}

int main()
{
    Addition(4,5);
    Addition(42,15);
    Addition(34,154);
    return 0;
}