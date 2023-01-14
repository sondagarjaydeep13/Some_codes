#include<iostream>
using namespace std;
int main()
{
    int i,n;
    cout<<"Enter number you have print";
    cin>>n;
    for(i=1;i<=n;i++){
    if(i==10){
        break;
    }
    cout<<i<<endl;
    }
    return 0;
}