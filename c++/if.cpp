#include<iostream>
using namespace std;
int main()
{
    int a,b;
    cout<<"Enter the Value of a and b :";
    cin>>a>>b;
    if(a>b){
        cout<<"A is Greater";
    }
    else if(a==b){
        cout<<"a and b is Equal";
    }
    else{
        cout<<"B is greater";
    }
    return 0;
}