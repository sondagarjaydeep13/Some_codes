//check to the value is odd or even...!!!
#include<stdio.h>
int main()
{
    int n=101;
    while(n!=0){
        if(n%2==0){
            printf("Number is even...!!\n");
        }
        else {
            printf("Number is odd...!!\n");
        }
        break;
    }
    return 0;

}