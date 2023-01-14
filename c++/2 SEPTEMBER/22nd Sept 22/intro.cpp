#include<iostream>
using namespace std;

//  << -> extraction
//  :: -> Scope resolution operator
//  >> -> Insertion

inline int Square(int a){
    return a*a;
}
int main()
{
    // cout<<"Hello World";
    // cout<<"Hello World";

    // int a,b;
    // cout<<"Enter the value of a ";
    // cin>>a;
    // cout<<"Enter the value of b ";
    // cin>>b;
    // cout<<"The value of a is "<<a<<" and b is "<<b<<endl;
    // cout<<"The value of a is "<<a<<" and b is "<<b<<endl;

    string name = "tops tech";
    cout<<name;

    int s = Square(3);
    cout<<s;
    return 0;
}