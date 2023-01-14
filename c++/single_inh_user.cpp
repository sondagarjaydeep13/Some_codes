#include<iostream>
using namespace std;
class Base{
    protected :
    int a,b;
    public:
    int setdata(int a,int b){
        this->a=a;
        this->b=b;
    }
    void input(){
        cout<<"Enter the value of a and b :";
        cin>>a>>b;
    }
};
class Derived:public Base{
    public :
    int  Display(){
        cout<<"The Value of a is :"<<a<<endl;
        cout<<"The value of b is :"<<b;
    }
};
int main()
{
    Derived d1;
    d1.input();
    d1.Display();
    return 0;
}