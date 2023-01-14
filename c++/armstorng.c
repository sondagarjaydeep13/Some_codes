#include<stdio.h>
int main()
{
    int n,rem,sum=0,temp;
    printf("Enter number :");
    scanf("%d",&n);
    temp=n;
    while(n!=0){
        rem=n%10;
        sum=sum+rem*rem*rem;
        n=n/10; 
    }
  if(sum==temp){
    printf("Number is Armstromg");
  }
  else{
    printf("Number is not armstrong");
  }
    
  return 0;
}