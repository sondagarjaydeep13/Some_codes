#include<stdio.h>

int main()
{
    int n=1221,rem,temp=n,sum=0;
    while(n!=0){
        rem = n%10;  //  1  2  2  1
        sum = sum*10 + rem;  //  1221
        n/=10;   //   
    }
    if(sum==temp){
        printf("Value is Armstrong");
    }
    else{
        printf("Value is not armstrong");
    }
    return 0;
}