#include<stdio.h>

int main()
{
    int a[6] = {23,54,12,9,45,32};
    int i,j,temp;
    for(i=0;i<6;i++){
        for(j=i+1;j<6;j++){
            if(a[i]<a[j]){
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
        printf("%d ",a[i]);
    }
    return 0;
}