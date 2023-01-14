#include<stdio.h>
#include<string.h>

int main()
{
    char s[20] = "Hello World";
    // int i,count=1;
    // for(i=0;s[i]!='\0';i++){
    //     if(s[i]==' '){
    //         // continue;
    //         count++;
    //     }
    //     // count++;
    // }
    // printf("Length of the string is %d\n",count);


    int  l = strlen(s);
    printf("%d",l);
    return 0;
}