#include<iostream>
using namespace std;

class Area{
    int r;
    public:
    void setData(int r);
    void areaCircle();
};


void Area::setData(int r){
    this->r = r;
}

void Area::areaCircle(){
    cout<<"The area of circle is "<<3.14*r*r<<endl;
}


int main()
{
    Area a1;
    a1.setData(6);
    a1.areaCircle();
return 0;
}