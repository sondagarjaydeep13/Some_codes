/* 1
   2 3
   4 5 6
   7 8 9 10
   11 12 13 14 15  */

   #include<stdio.h>
   int main()
   {
    int i,j,number=0;
    for(i=1;i<=5;i++){
        for(j=1;j<=i;j++){
            ++number;
            printf(" %d",number);

        }
        printf("\n");
    }
    return 0;
   }

