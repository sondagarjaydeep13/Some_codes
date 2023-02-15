#include<iostream>
using namespace std;

class student{
    int number,per;
    string name;
    public:
    void studentData(int a,string b,int c){
        this->number=a;
        this->name=b;
        this->per=c;

        cout<<"Student number is ="<<a<<endl;
        cout<<"Student name is ="<<b<<endl;
        cout<<"Student per is ="<<c<<endl;
    }
};
int main(){
    student s1;
    s1.studentData(1,"Raj Kumar",75);
    return 0;
}