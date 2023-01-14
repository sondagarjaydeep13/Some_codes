#include <stdio.h>
#include <string.h>

int main()
{
    char s1[20] = "Helol
    ";
    char s2[20] = "Hello";

    printf("%d",strcmp(s1, s2));
    return 0;
}