#include<iostream>
using namespace std;
void Myfunction(){
    cout<<"My Function is call"<<endl;
}
void Myfunction1(){
    int a,b;
    cout<<"Enter the Value of the a and b :";
    cin>>a>>b;
    cout<<"The addition of the a and b is :"<<a+b;
}
int main()
{
    Myfunction();
    Myfunction1();
    return 0;
}