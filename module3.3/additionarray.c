// WIP for matrix..!!
#include<stdio.h>

int main()
{
   
    int a[3][3],b[3][3];
    int i,j;
    
    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            printf("Enter the Value of Matrix a[i][j] index position :");
            scanf("%d",&a[i][j]);
        }
    }
            for (i=0;i<3;i++){
            for (j=0;j<3;j++){
            printf("Enter the Value of Matrix b[i][j] index position :");
            scanf("%d",&b[i][j]);
        }
    }
    printf("\n............A Matrix.................\n");
    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            printf("%d\t",a[i][j]);
        }
         printf("\n");
        }
            printf("\n................B Matrix................\n");
              for (i=0;i<3;i++){
             for (j=0;j<3;j++){
           
            printf("%d\t",b[i][j]);
             }
              printf("\n");
              }
        

    return 0;
}