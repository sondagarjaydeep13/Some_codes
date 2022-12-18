#include<stdio.h>
int main()
{
    //int length,width,rectangle;
    float rectangle,length,width;
    printf("Enter the length and width of the Rectangle...\n");
    scanf("%f%f",&length,&width);
    rectangle=length*width;
    printf("Area of the rectangle is %.2f :",rectangle);
    return 0;
}