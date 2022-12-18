// convert year to days and day to year..
#include<stdio.h>
int main()
{
    int day,year,week,day1;
    printf("Enter the days:\n");
    scanf("%d",&day);
    year=day/365;
    week=(day%365)/7;
    day1=(day%365)%7;
    printf("%d = %d  year  %d  week  %d  days\n",day,year,week,day1);
    return 0;
    
}