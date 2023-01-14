#include<iostream>
using namespace std;
void Name(string name="Jaydeep"){
    cout<<name;
}
int main(){
    Name("Nimesh\n");
    Name();      // Here work as default function ...
    return 0;
}