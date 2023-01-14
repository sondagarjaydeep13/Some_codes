#include<iostream>
using namespace std;
class Base{
    protected :
    int a,b;
    public :
    void setData(int a,int b){
        this->a=a;
        this->b=b;
    }
};
class Derived:public Base{
    public :
    void display(){
        cout<<a<<endl;
        cout<<b;
    }
};
int main()
{
    Derived d1;
    d1.setData(10,20);
    d1.display();
    return 0;
}