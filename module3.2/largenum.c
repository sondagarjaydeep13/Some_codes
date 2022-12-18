#include<stdio.h>
int main()
{
    int num,max=0,rem;
    printf("Enter the number :\n");
    scanf("%d",&num);                        // 1234
                                             
     while (num>0){                           // num>0 yes
     rem=num%10;
     if (rem>max){                                 //4>0
        max=rem;                                     //max=4

     }
     num=num/10;
                                          
     }
     printf("Largest number is %d :\n",max);
     

    return 0;
}