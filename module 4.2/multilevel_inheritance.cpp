// Multilevel...!!
#include<iostream>
using namespace std;
class Person{
    protected :
    int age;
    string name;
    public :
    void setData(string name,int age){
        this->age=age;
        this->name=name;
    }
};
class Student:public Person{
    protected :
    float percentage;
    public :
    void setPer(float percentage){
        this->percentage=percentage;
    }
};
class Teacher:public Student{
   protected :
   float salary;
   public :
   void setSal(float salary){
    this->salary=salary;
   }
   void display(){
    cout<<"Name of the student :"<<name<<endl;
    cout<<"Age of the student :"<<age<<endl;
    cout<<"Percentage of the student :"<<percentage<<endl;
    cout<<".................................."<<endl;
    cout<<"Salary of the Teacher :"<<salary<<endl;
   }
};
int main()
{
    Teacher t1;
    t1.setData("Jaydeep",25);
    t1.setPer(75.80);
    t1.setSal(55213.12);
    t1.display();
    return 0;
}
