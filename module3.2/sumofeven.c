//here we have enter the 5 than sum of even and odd is(1,2,3,4,5) odd=1+3+5,even=2+4
#include<stdio.h>
int main()
{
    int i,n,even=0,odd=0;
    printf("Enter the number : \n");
    scanf("%d",&n);
    for(i=1;i<=n;i++){
        if (i%2==0){
        even=even+i;
        }
        
        else {
        odd=odd+i;
            
        }
    }
        printf("sum of even digit is %d\n",even);
        printf("sum of odd digit is %d",odd);
    
    

    return 0;
}
