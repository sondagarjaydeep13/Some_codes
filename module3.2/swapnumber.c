//swap two number without using third variable
#include<stdio.h>
int main()
{
    int a,b; //a=20,b=30
    printf("Enter value of a and b\n");
    scanf("%d%d",&a,&b);
    a=a+b;//20+30=50
    b=a-b;//50-30=20
    a=a-b;//50-20=30
    printf("after swap a=%d b=%d",a,b);
    return 0;
}