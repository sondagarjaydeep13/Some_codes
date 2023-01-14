#include<iostream>
using namespace std;
class Car{
    public :
    string name="Volvo";
    void display(){
        cout<<name;
    }
};
class vehicle:public Car{
   public:
   string model="s3";
};
int main()
{
    vehicle v1;
    v1.display();
    
    return 0;
}