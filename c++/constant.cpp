#include<iostream>
using namespace std;
int main(){
const int m=10;
m=15; //Here Found the error assignment of read only variable m=15..
cout<<m;
return 0;
}
