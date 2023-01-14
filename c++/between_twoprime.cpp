#include<iostream>
using namespace std;
int check_prime(int);
int main()
{
    int a,b,i;
    bool flag;
    cout<<"Enter Value of a and b :";
    cin>>a>>b;
    if(a>b){
        a=a+b;
        b=a-b;
        a=a-b;
    }
    cout<<"Prime Number Between :"<<a<<"....."<<b<<endl;
    for(i=a+1;i<b;i++){
    if(flag)
    cout<<i<<",";
    }
    return 0;
}
int check_prime(int n){
    bool is_prime=true;
    if(n==0||n==1){
        is_prime=false;
    }
    for(int j=2;j<=n;j++){
        if(n%j==0){
            is_prime=false;
            break;
        }
    }
    return is_prime;
}