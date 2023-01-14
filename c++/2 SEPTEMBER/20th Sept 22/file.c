#include<stdio.h>

int main()
{
    FILE *p;
    p = fopen("sample.txt","r");
    int a;
    fscanf(p,"\n%d",&a);
    printf("The value of a is %d ",a);
    fclose(p);
    return 0;
}