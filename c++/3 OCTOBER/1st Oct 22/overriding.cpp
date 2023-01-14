#include<iostream>
using namespace std;

class A{
    public:
    virtual void display(){
        cout<<"Hello"<<endl;
    }
};

class B : public A{
    public:
    void display(){
        cout<<"Namaste"<<endl;
    }
};

int main()
{
    A a1;
    B b1;
    // a1 = *p
    A *p;
    p=&b1;
    p->display();
return 0;
}