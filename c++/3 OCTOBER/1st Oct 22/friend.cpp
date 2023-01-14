#include<iostream>
using namespace std;

class B;
class C;
class A{
    int a;
    public:
    A(int a){
        this->a=a;
    }
    friend void Addition(A a,B b,C c);

};
class B{
    int a;
    public:
    B(int a){
        this->a=a;
    }
    friend void Addition(A a,B b,C c);

};
class C{
    friend void Addition(A a,B b,C c);
    int a;
    public:
    C(int a){
        this->a=a;
    }
};

void Addition(A a,B b,C c){
    cout<<a.a+b.a+c.a<<endl;
}

int main()
{
    A a1(10);
    B b1(20);
    C c1(30);
    Addition(a1,b1,c1);
return 0;
}