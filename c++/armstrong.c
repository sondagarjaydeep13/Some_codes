#include<stdio.h>
int main()
{
    int n,rem,sum=0,a;
    printf("Enter the number :");
    scanf("%d",&n);
    a=n;
    while(n>0){
        rem=n%10;
        sum=sum+rem*rem*rem;
        n=n/10;
    }
    if(sum==a){                              //153==153
        printf("Armstrong number");
    }
    else{
        printf("Not Armstrong");
    }
    return 0;
}