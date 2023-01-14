#include <iostream>
// #include<conio.h>
using namespace std;

class A
{
    int x, y;

public:
    A()
    {
        cout << "Default constructor called!";
    }
    A(int a, int b)
    {
        x = a;
        y = b;
    }
    ~A(){
        cout<<"Destructor is calling..!!"<<endl;
    }
    // A(const A &old)
    // {
    //     // old is the old object being passed
    //     x = old.x; //This object's x to old object's x
    //     y = old.y;

 
    // }

    void print()
    {
        cout << x << " " << y << "\n";
    }
};

int main()
{
    // Sample Code to show default constructor
    A obj(10, 20); // making a object of class A   -- >Implicit
    A obj2(obj);   // Copy Constructor called old object 'obj' is passed
    obj2.print();

    return 0;
}