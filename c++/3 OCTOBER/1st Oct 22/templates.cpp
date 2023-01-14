#include <iostream>
using namespace std;

template <class t1, class t2>
class A
{
    t1 a+++
    ;
    t2 b;

public:
    A(t1 a, t2 b)
    {
        this->a = a;
        this->b = b;
    }
    void Addition()
    {
        cout << a + b << endl;
    }
};

int main()
{
    A<string, string> a1("Hello ", "world");
    a1.Addition();
    return 0;
}