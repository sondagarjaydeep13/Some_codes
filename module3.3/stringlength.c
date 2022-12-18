// Find the string length with ouit using the inbuilt function ..!!
#include<stdio.h>
int main()
{
    char s[30]="Hello World";
        int i,count=0;
        for (i=0;s[i]!='\0';i++){
            if (s[i]==' '){
                continue;           // if condition unhide than count the space ..!
            }
            count++;
        }
        printf("String length is : %d\n",count);
        return 0;
}