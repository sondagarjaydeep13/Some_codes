#include<iostream>
using namespace std;

void Area(int r){
    cout<<"Area of circle is "<<3.14*r*r<<endl;
}
void Area(int l,int w){
    cout<<"Area of Reectangle is "<<l*w<<endl;
}

int main()
{
    Area(6);
    Area(6,7);
return 0;
}