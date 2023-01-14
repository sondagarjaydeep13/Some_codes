#include<iostream>
using namespace std;
int main()
{
    int n,sum,temp,sum1=0,n1;
    cout<<"Enter Number :";
    cin>>n;
    while(n!=0){                //153!=0
    n=n%10;                 //3
    sum=n*n*n;        // 3*3*3
    temp=sum1+sum;   //temp=0+27
    temp=sum1;       //27
    n/=10;
    }
    if(sum1==n){
        cout<<"Number is Armstrong";
    }
    else{
        cout<<"Number is not Armstrong";
    }
    return 0;
    
}