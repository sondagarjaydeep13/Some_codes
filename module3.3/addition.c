#include<stdio.h>

int main()
{
    int a[3][3]={{1,2,3},{1,2,3},{1,2,3}},b[3][3]={{1,2,3},{1,2,3},{1,2,3}},c[3][3],i,j;

    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            c[i][j] = a[i][j]+b[i][j]; 
            printf("%d\t",c[i][j]);
        }
        printf("\n");
        
    }
    return 0;
}