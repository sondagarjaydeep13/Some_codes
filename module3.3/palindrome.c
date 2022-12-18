// check the string are palimdrome or not..!!
// user Define input.
#include<stdio.h>
#include<string.h>   // here use inbuilt Function for length check

int main()
{
    char stringA[30];
    int i,flage=0,length;
    printf ("Enter The String :");
    scanf("%s",&stringA);

    length=strlen(stringA);
        for (i=0;i<length;i++){
            if (stringA[i]!=stringA[length-i-1]){
                flage=1;
                break;
            }
        }
            if (flage==1){
                printf("Enter String is not palimdrome...!!");
            }
        
            else{
                printf("Enter String is palimdrome..!!");
            
        }
    return 0;
}