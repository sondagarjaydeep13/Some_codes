#include<iostream>
using namespace std;
inline int squre(int a){
    return a*a;
}
inline int cube(int b){
    return b*b*b;
}
int main()
{
   int a,b;
   cout<<"Enter the Value of a :"<<endl;
   cin>>a;
   cout<<"Enter the value of b :"<<endl;
   cin>>b;
   cout<<".........................\n"<<endl;
   int s=squre(a);
   cout<<"Squre of a is:"<<s<<endl;
   int c=cube(b);
   cout<<"Cube of b is :"<<c<<endl;
   return 0;

}