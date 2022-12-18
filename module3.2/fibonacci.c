// write the program to print the febonacci series..!!
#include<stdio.h>
int main()
{
    int a=0,b=1,i,c;
    scanf("%d%d",&a,&b);
    //scanf("%d%d",&a,&b);
    for(i=3;i<=15;i++){
    c=a+b;
    printf("%d\n",c);
    a=b;
    b=c;
    }
    


    return 0;

}
