#include<stdio.h>

int main()
{
    int a[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int ele,i,j,flag=0;
    printf("Enter the element: ");
    scanf("%d",&ele);

    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            if(a[i][j]==ele){
                flag = 1;
                break;
            }
        }
    }

    if(flag == 1){
        printf("Element is found at a[%d][%d] index position",i,j);
    }
    else{
        printf("Element is not found");
    }
    return 0;
}