// Multilevel inheritance to derive ..!!
#include<iostream>
using namespace std;
class Student{
    protected :
    int a;
    public :
    void number(int a){
        this->a=a;
    }
};
class Test:public Student{
    protected :
    int b,c;
    public :
    void mark(int b,int c){
        this->b=b;
        this->c=c;
    }
};
class Result:public Test{
    public :
    void display(){
        cout<<"\nNumber of the Student :"<<a<<endl;
        cout<<"Mark of Mathes :"<<b<<endl;
        cout<<"Mark of Physics :"<<c<<endl;
        cout<<"...................."<<endl;
        cout<<"Total Mark is :"<<b+c<<endl;
    }
};
int main()
{
    int a,b,c;
    cout<<"Enter the roll Number :"<<endl;
    cin>>a;
    cout<<"Enter the Mark of mathes and Physics :"<<endl;
    cin>>b>>c;
    Result r1;
    r1.number(a);
    r1.mark(b,c);
    r1.display();
    return 0;
}