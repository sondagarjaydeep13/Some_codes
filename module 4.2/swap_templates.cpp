#include<iostream>
using namespace std;
template <class T>
int Swap(T& a,T& b)
{
    T t;
    t=a;
    a=b;
    b=t;
}
int main()
{
    int a,b;
    cout<<"Enter the value of a and b :"<<endl;
    cin>>a>>b;
    Swap(a,b);
    cout<<"......Swap Number......"<<endl;
    cout<<"a is :"<<a<<endl;
    cout<<"b is :"<<b<<endl;
    return 0;
}