//using array to find the maximum value..!!
#include<stdio.h>
int main()
{
    int a[5]={10,20,5,7,50};
    int i,max=a[0];
    for (i=0;i<5;i++){
     if (a[i]>max){
        max=a[i];
     }
    }
     printf(" maximum value of array is %d :",max);
    
    return 0;
}