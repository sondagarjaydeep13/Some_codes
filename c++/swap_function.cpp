#include<iostream>
using namespace std;
int swap(int &a,int &b){
    cout<<"Enter the value of the a and b :";
    cin>>a>>b;
    int c=a;
    a=b;
    b=c;
    cout<<a<<endl;
    cout<<b<<endl;
}
int main()
{
    int a,b;
    swap(a,b);
    return 0;
}