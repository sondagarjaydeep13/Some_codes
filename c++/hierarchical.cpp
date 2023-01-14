#include<iostream>
using namespace std;
class Area{
    protected :
    int r,l,w;
    public :
    void AreaCircle(int r){
        this->r=r;
    }
    void AreaRectangle(int l,int w){
        this->l=l;
        this->w=w;
    }
    void inputCircle(){
        cout<<"Enter the value of radius :";
        cin>>r;
    }
    void inputRectangle(){
        cout<<"Enter the value of length and width :";
        cin>>l>>w;
    }
};
class AreaCircle:public Area{
    public :
    void CircleArea(){
        cout<<"The Are of the circle is :"<<3.14*r*r;
    }
};
class AreaRectangle:public Area{
    public :
    void RectangleArea(){
        cout<<"The Area of the Rectangle is :"<<l*w<<endl;
    }
};
int main()
{
    AreaCircle a1;
    a1.inputCircle();
    a1.CircleArea();
    return 0;
}