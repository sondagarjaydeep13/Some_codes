#include<iostream>
using namespace std;
class Car{
    public :
    string name;
    string model;
    int year;
    Car(string a,string b,int c);
};
Car::Car(string a,string b,int c){
    name=a;
    model=b;
    year=c;
}
int main()
{
    Car c1("Car","Volvo",1999);
    cout<<c1.model<<" "<<c1.name<<" "<<c1.year;
    return 0;

}