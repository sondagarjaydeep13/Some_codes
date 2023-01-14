#include<stdio.h>

int main()
{
    int a[7] = {34,56,21,43,13,67,9};
    int max = a[0];
    for(int i=0;i<7;i++){
        if(a[i]>max){
            max = a[i];
        }
    printf("%d\n",max);
    }
    return 0;
}