#include<stdio.h>
int main()
{
    int i,n,rev=0;
    printf("Enter the number : \n");
    scanf("%d",&n);
    while (n!=0){
        rev=rev*10;
        rev=rev+n%10;
        n=n/10;
    }
    printf("reverse of enterd number is %d\n",rev);
    return 0;

 }
