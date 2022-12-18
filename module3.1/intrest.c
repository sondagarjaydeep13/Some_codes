//find the simple intrest
#include<stdio.h>
int main()
{
    float si,p,r,t;
    printf("Enter the amount was taken by you:\n");
    scanf("%f",&p);
    printf("Enter the rate of intres:\n");
    scanf("%f",&r);
    printf("Enter the duration of intres in months:\n");
    scanf("%f",&t);
    {
        si=p*r*t/1200;
        printf("you simple intrest amount is %.3f\n",si);
    }
    printf("total paid amout %.3f and %.3f is %.3f\n",p,si,si+p);
    return 0;
}