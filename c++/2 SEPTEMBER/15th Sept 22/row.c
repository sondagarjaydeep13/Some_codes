#include <stdio.h>

int main()
{
    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}},i,j;

    printf("\n-------- MAtrix is --------------\n\n");

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            printf("%d\t", a[i][j]);
        }
        printf("\n");
    }

    int sum=0;
    // printf("Enter the row: ");
    // scanf("%d",&r);
   for(i=0;i<3;i++){
     for(j=2;j>=0;j--){
        
            sum = sum+ a[i][j];
    
    }
   }

    printf("Addition is %d",sum);
    return 0;
}