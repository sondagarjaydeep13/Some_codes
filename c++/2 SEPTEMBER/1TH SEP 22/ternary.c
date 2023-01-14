#include <stdio.h>

int main()
{
    // (condition) ? TURE : False;
    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    (age >= 18) ? printf("You are eligible for voting") : printf("You are not eligible for voting");
    return 0;
}