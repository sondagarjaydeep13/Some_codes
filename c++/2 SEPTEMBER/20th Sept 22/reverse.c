#include<stdio.h>
#include<string.h>

int main()
{
    // int i;
    char s[20] = "Hello World";
    // int l = strlen(s);
    // for(i=l-1;i>=0;i--){
    //     printf("%c",s[i]);
    // }

    strrev(s);
    printf("%s",s);
    return 0;
}