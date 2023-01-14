#include<stdio.h>

int main()
{
    // char s[20] = {'h','e','l','l','o','\0'};
    char s[20];
    printf("Enter the string: ");
    // scanf("%s",s);
    gets(s);
    puts(s);
    // printf("%s",s);
    return 0;
}