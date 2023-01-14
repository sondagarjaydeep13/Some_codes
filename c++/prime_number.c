#include<stdio.h>
int main()
{
    int n,i,flage=0;
    printf("Enter number :");
    scanf("%d",&n);  

    if(n==1||n==2){
        printf("Number is prime");
        
        for(i=1;i<n;i++){
        if(n%i==0){
            printf("Number is not prime");
            break;
        }
        else{
            printf("Number is prime");
            break;
        }
        }
    }
    return 0;
}