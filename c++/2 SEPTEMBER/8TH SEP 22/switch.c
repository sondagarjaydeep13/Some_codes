#include <stdio.h>

int main()
{
    int option;
    double a = 10, b = 4;
    printf("Option 1 for Addition\n");
    printf("Option 2 for Subtraction\n");
    printf("Option 3 for Multiplication\n");
    printf("Option 4 for Division\n");
    printf("Enter your choice: ");
    scanf("%d", &option);
    switch (option)
    {
    case 1:
        printf("Addition is %lf\n", a + b);
        break;
    case 2:
        printf("Subtraction is %lf\n", a - b);
        break;
    case 3:
        printf("Multiplication is %lf\n", a * b);
        break;
    case 4:
        printf("Division is %lf\n", a / b);
        break;
    default:
        printf("Please enter valid option..!!");
        break;
    }

    return 0;
}