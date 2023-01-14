#include<iostream>
using namespace std;

class Area{
    protected:
    int r,l,w;
    public:
    void setR(int r){
        this->r=r;
    }
    void setLW(int l,int w){
        this->l=l;
        this->w=w;
    }
};

class Circle : public Area{
    public:
    void areaCircle(){
        cout<<"Area of circle is "<<3.14*r*r<<endl;
    }
};
class Rectangle : public Area{
    public:
    void areaRectangle(){
        cout<<"Area of rectangle is "<<l*w<<endl;
    }
};

int main()
{
    Circle c1;
    c1.setR(5);
    c1.areaCircle();
    Rectangle r1;
    r1.setLW(6,7);
    r1.areaRectangle();
return 0;
}