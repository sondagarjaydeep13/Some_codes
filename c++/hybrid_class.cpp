#include<iostream>
using namespace std;
class A{
    public:
    void printinfoA(){
    cout<<"Class A is Calling"<<endl;
    }
};
class B:public A{
    public:
    void printinfoB(){
        cout<<"Class B is calling"<<endl;
    }
};
class C{
    public:
    void printinfoC(){
        cout<<"CLass C is Calling"<<endl;
    }
};
class D:public B,public C{
    public:
    void printinfoD(){
        cout<<"Class D is Calling"<<endl;
    }
};
int main()
{
    D object_D;
    object_D.printinfoA();
    object_D.printinfoB();
    object_D.printinfoC();
    object_D.printinfoD(); 
    return 0;
}