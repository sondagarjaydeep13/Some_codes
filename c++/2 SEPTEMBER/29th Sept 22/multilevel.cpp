#include <iostream>
using namespace std;

class A
{
protected:
    int id;
    string name;

public:
    void setDetails(int id, string name)
    {
        this->id = id;
        this->name = name;
    }
};
class B : public A
{
protected:
    int m1, m2;

public:
    void setMarks(int m1, int m2)
    {
        this->m1 = m1;
        this->m2 = m2;
    }
};

class C : public B
{
public:
    void Marksheet()
    {
        cout << "Roll Number of the student is " << id << endl;
        cout << "Name of the student is " << name << endl;
        cout << "Marks of physics is " << m1 << endl;
        cout << "Marks of Maths is " << m2 << endl;
        cout << "Percentage is " << (m1+m2)/2<< endl;
    }
};

int main()
{
    C c1;
    c1.setDetails(101,"vivek");
    c1.setMarks(78,89);
    c1.Marksheet();
    return 0;
}