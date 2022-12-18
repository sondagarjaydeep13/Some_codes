#include<stdio.h>
int main()
{
    float triangle,b,h;
    printf("Enter the base length and height of the triangle..!!\n");
    scanf("%f%f",&b,&h);
    {
        triangle=0.5*b*h;
        printf("Are of the triangle is %.2f\n",triangle);
        return 0;
    }
}