#include<iostream>
using namespace std;
int main(){
struct {
    int year;
    string brand;
    string model;
} Mycar1,Mycar2;
Mycar1.brand="BMW";
Mycar1.model="BMW";
Mycar1.year=1999;
cout<<Mycar1.brand<<" "<<Mycar1.model<<" "<<Mycar1.year<<endl;
return 0;
}