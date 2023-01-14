#include<iostream>
using namespace std;

class A{
    int a,b;
    public:
    void setData(int x,int y){
        a=x;
        b=y;
    }
    void display(){
        cout<<"The value of a is "<<a<<endl;
        cout<<"The value of b is "<<b<<endl;
    }
};

int main()
{
    A a1;
    a1.setData(5,6);
    a1.display();
return 0;
}