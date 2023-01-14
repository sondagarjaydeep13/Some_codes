#include<stdio.h>

float Bill(float p1,float p2)
{
    return p1+p2;
}


int main()
{

    float Total = (Bill(45.67,34.78)*0.18)+Bill(45.67,34.78);
    printf("Amount payable without GST is %.2f\n",Bill(45.67,34.78));
    printf("Total payable amount is %.3f",Total);
    return 0;
}