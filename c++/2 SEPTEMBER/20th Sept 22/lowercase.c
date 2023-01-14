#include<stdio.h>
#include<string.h>

int main()
{
    char s[20] = "Hello World";
    // int i;
    // for(i=0;s[i]!='\0';i++){
    //     if(s[i]>='a' && s[i]<='z'){
    //         s[i] = s[i]-32;
    //     }
    // }

    strupr(s);
    strlwr(s);
    printf("%s",s);
    return 0;
}