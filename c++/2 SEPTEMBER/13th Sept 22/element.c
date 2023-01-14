#include<stdio.h>

int main()
{
    int a[5] = {10,20,30,40,50};
    int ele,flag=0,i;
    printf("Enter the element: ");
    scanf("%d",&ele);
    for( i=0;i<5;i++){
        if(a[i]==ele){
            flag=1;
            break;
        }
    }
    if(flag==1){
        printf("Elemtnt is found at %d index position",i);
    }
    else{
        printf("Element is not found");
    }
    return 0;
}