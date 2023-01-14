#include<stdio.h>
#include<string.h>

struct Emp{
    int id;
    char name[20];
    float sal;
};

int main()
{
    struct Emp e1 = {101,"Rutvik",24345.456};
    printf("%d %s %.2f\n",e1.id,e1.name,e1.sal);
    struct Emp e2;
    e2.sal = 3454.534;
    e2.id = 102;
    strcpy(e2.name,"Vivek");
    printf("%d %s %.2f\n",e2.id,e2.name,e2.sal);

    return 0;
}