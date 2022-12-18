#include<stdio.h>
int main()
{
    int n,rem,min=0;
    printf("Enter The Value : ");
    scanf("%d",&n);                            //4568
    
    while (n>0){
        rem=n%10;
        if (min<rem){
            printf("min number is : %d",min);
             n=n/10;
        }
       
        
    }
    return 0;
}

  

