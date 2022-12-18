#include<stdio.h>
int main()
{
    int a,b,option;
    printf("enter the value of a and b..!!\n");
    scanf("%d%d",&a,&b);
    printf("enter 1 for addition\n");
    printf("enter 2 for subtraction\n");
    printf("enter 3 for multiplication\n");
    printf("enter 4 for division\n");
    scanf("%d",&option);
    
    switch(option)
    {
       
        case 1:
        printf("Addition of %d and %d is %d\n",a,b,a+b);
        break;
       
        case 2:
        printf("subtraction of %d and %d is %d\n",a,b,a-b);
        break;
        case 3:
        printf("multiplication of %d and %d is %d\n",a,b,a*b);
        break;
        case 4:
        printf("division of %d and %d is %d\n",a,b,a/b);
        break;
        default:
        printf("Invalide option..!!");
        break;
    }
    
    return 0;
}