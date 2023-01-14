#include<iostream>
using namespace std;
int main()
{
    string a="Food";
    string *ptr=&a;
   // cout<<*ptr<<endl;  Here change the value of the ptr that time change the value of a...
    *ptr="Car";
    cout<<a;
    return 0;
}