#include<iostream>
using namespace std;
void Area(int r){
    cout<<"The Area Of the circle is :"<<3.14*r*r<<endl;
}
void Area(int l,int w){
    cout<<"The Area of the Rectangle is :"<<l*w<<endl;
}
void Area(int L,int W,int H){
    cout<<"The Area of the Cube is :"<<(L+H)*(H+W)*(L+W)<<endl;
}
int main()
{
    Area(10);
    Area(10,10);
   Area(10,10,10) ;
    return 0;
}