#include<stdio.h>

int main()
{
    int a[5];
    for(int i=0;i<5;i++){
        printf("Enter the value of %d index position element: ",i);
        scanf("%d",&a[i]);
    }
    printf("\n----------Array is --------------\n\n");
    for(int i=0;i<5;i++){
        printf("%d\t",a[i]);
    }
    return 0;
}