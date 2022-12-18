// find the factorial of the enter number..!!
#include<stdio.h>
int main()
{
    int n,i,fact=1;
    printf("Enter the number..!!\n");
    scanf("%d",&n);
    for(i=n;i>=1;i--){
        fact*=i;
    }
    printf("Factorial is %d",fact);

    return 0;
}