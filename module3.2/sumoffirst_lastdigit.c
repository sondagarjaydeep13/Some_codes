// 1234 write a program sum of the first and last digit ..!! 1+4=5

#include<stdio.h>
int main()
{
    int number,firsdigit,lastdigit,sum=0;
    
    printf("Enter the number to find sum of first and last digit : ");
    scanf("%d",&number);
    lastdigit=number%10;

    while (number>=10){
        number=number/10;
    }
        firsdigit=number;
        sum=firsdigit+lastdigit;
        printf("Sum of the first digit and last digit is %d \n",sum);
    
    return 0;
}

