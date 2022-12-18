// check if the given year is a leap or not...
#include<stdio.h>
int main()
{
    int year;
    printf("Enter the year:");
    scanf("%d",&year);
    if (year%400==0||year%4==0 && year%100!=0)
    {
      printf("year is leap year");

    }
    else{
            printf("year is not leap year");
    }
    return 0;
}