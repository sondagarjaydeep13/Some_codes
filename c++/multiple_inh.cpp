#include<iostream>
using namespace std;
class addA{
    protected :
    int a;
    public :
    void A(int a){
      this->a=a;
    }
};
class addB{
    protected :
    int b;
    public :
    void B(int b){
        this->b=b;
    }
};
class Addition:public addA,public addB{
     public :
     void input(){
        cout<<"Enter the value of a and b :";
        cin>>a>>b;
     }
     void Display(){
        cout<<"Addition of a and b is :"<<a+b;
     }
};
int main()
{
    Addition a1; 
    a1.input();
    a1.Display();
    return 0;
}