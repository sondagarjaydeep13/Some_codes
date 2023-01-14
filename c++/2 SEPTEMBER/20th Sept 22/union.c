#include<stdio.h>
#include<string.h>

union Emp1{
    int id;
    char name[20];
};

int main()
{
    union Emp1 e1;
    e1.id = 101;
    strcpy(e1.name,"vivek");
    printf("%d %s",e1.id,e1.name);

    return 0;
}