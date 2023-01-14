#include<stdio.h>
#include<string.h>

int main()
{
    char s1[20] = "Hello";
    char s2[20] = " World";
    // int l1 = strlen(s1);
    // int l2 = strlen(s2);
    // for(int i=0;i<=l1+l2;i++){
    //     s1[l1+i] = s2[i];
    // }
    // printf("%s",s1);

    strcat(s1,s2);
    strcpy(s1,s2);
    printf("%s",s1);
    return 0;
}