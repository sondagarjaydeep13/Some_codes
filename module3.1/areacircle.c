#include<stdio.h>
int main()
{
    int r;
    float circle;
    printf("Enter the radious of the circle...");
    scanf("%d",&r);
    {
    circle=3.14*r*r;
    printf("Are of the circle is %.2f",circle);
    }
    return 0;
}