// Rev the number using recursion..!!
#include<stdio.h>
int rev=0;
int rev1(int n){
 while (n>0){
    rev*=10;
    rev=rev+n%10;
    n=n/10;
 }
 printf("%d",rev);
}
int main()
{

rev1(123);


    return 0;
}
