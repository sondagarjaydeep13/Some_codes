#include<stdio.h>
int main()
{
    int n,i,sum;
    printf("Enter number :");
    scanf("%d",&n);
        for(i=1;i<n;i++){     
        sum=n%10;
         }
    
             if(sum==0){
             printf("Number is not prime");
        }
            else{
                printf("NUmber is prime");
           }
   return 0;
}