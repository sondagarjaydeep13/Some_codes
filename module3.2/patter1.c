  // write a program to below pattern..!!
/*  1
    1 0
    1 0 1 
    1 0 1 0
    1 0 1 0 1  */
 #include<stdio.h>
 int main()
 {
    int i,j;
    for(i=1;i<=5;i++){
        for(j=1;j<=i;j++){
            if (j==1||j==3||j==5){
                printf("1");
            }
            else{
                printf("0");
            }

        }
        printf("\n");
    }
    return 0;
 }