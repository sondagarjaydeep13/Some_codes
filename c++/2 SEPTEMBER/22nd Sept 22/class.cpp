#include<iostream>
using namespace std;

class A{
    public:
    void display(){
        cout<<"This is display function of class A"<<endl;
    }
};

int main()
{
    A a1,a2;
    a1.display();
    a2.display();
return 0;
}