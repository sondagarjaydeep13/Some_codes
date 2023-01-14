#include <stdio.h>

int main()
{
    int a = 10;
    printf("%d\n", a += 10); // a = a+10
    printf("%d\n", a -= 10);
    printf("%d\n", a *= 10);
    printf("%d\n", a /= 10);
    printf("%d\n", a %= 10);
    return 0;
}