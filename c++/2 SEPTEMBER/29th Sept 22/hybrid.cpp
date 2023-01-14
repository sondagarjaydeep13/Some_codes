#include<iostream>
using namespace std;

class A{
    protected:
    int id;
    public:
    void setID(int id){
        this->id=id;
    }
};

class B : public A{
    protected:
    string name;
    public:
    void setName(string n){
        name = n;
    }
};

class C{
    protected:
    int m1,m2;
    public:
    void setMarks(int m1,int m2){
        this->m1=m1;
        this->m2=m2;
    }
};

class D:public B,public C{
    public:
    void Marksheet(){
        cout<<id<<endl;
        cout<<name<<endl;
        cout<<m1<<endl;
        cout<<m2<<endl;
        cout<<(m1+m2)/2<<endl;
    }
};

int main()
{
    D d1;
    d1.setID(1);
    d1.setName("Jaydeep");
    d1.setMarks(67,87);
    d1.Marksheet();


    
return 0;
}