#include<stdio.h>
int main()
{
    float a,b;
    int option;
    printf("enter the value of a and b:\n");
    scanf("%f%f",&a,&b);
    printf("enter 1 for Addition :\n");
    printf("enter 2 for subtraction :\n");
    printf("enter 3 for multiplication :\n");
    printf("enter 4 for division :\n");
    scanf("%d",&option);
    switch (option)
    {
    case 1:
    printf("Addition of %f and %f is %.3f\n",a,b,a+b);
    break;
    case 2:
    printf("subtraction of %f and %f is %.3f\n",a,b,a-b);
    break;
    case 3:
    printf("multiplication of %f and %f is %.3f\n",a,b,a*b);
    break;
    case 4:
    printf("division of %f and %f is %.3f\n",a,b,a/b);
    break;
    default :
    printf("Invalide input..!!\n");
    break;
    }
    return 0;
}