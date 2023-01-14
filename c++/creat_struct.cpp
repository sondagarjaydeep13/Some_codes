#include<iostream>
using namespace std;
int main()
{
    struct{
        int number;
        string name;
    }Mystruct;
    Mystruct.name="School";
    Mystruct.number=101;
    cout<<Mystruct.name<<endl;
    cout<<Mystruct.number<<endl;
    return 0;
}