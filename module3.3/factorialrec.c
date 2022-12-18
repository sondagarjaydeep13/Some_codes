// Using recursion to find the factorial..!!
#include<stdio.h>

int fact(int n){
    if (n==1||n==0){
        return 1;
    }
    else {
        return n*fact(n-1);
    }
}
int main()
{
int f=fact(5);
printf("Factorial is : %d ",f);
return 0;
}