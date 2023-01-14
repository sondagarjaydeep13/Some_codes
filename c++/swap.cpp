#include<iostream>
using namespace std;
int main()
{
    int a,b,c;
    cout<<"Enter the value of a and b"<<endl;
    cin>>a>>b;
    cout<<".......Value without Swap......."<<endl;
    cout<<"The Value of a is :"<<a<<endl;
    cout<<"The Value of b is :"<<b<<endl;
    c=a;
    a=b;
    b=c;
    cout<<".......Swap Value........"<<endl;
    cout<<"The valu of a is:"<<a<<endl;
    cout<<"The value of b is :"<<b<<endl;
    return 0;
}