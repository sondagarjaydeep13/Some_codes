#include<iostream>
using namespace std;
class Emp{
    private :
    int salary;
    public :
    void setData(int s){
        salary=s;
    }
    int getData(){
        cout<<salary;
    }
};
int main()
{
    Emp e1;
    e1.setData(58469);
    e1.getData();
    return 0;
}