#include<iostream>
using namespace std;

class A{
    public:
    virtual void display() = 0;  // pure virtual fun
};

class B: public A{
    public:
    void display(){
        cout<<"This is display function of class B"<<endl;
    }
};
class C: public A{
    public:
    void display(){
        cout<<"This is display function of class C"<<endl;
    }
};
int main()
{
    B b1;
    b1.display();
    C c1;
    c1.display();
return 0;
}