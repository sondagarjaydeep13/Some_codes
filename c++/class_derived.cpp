#include<iostream>
using namespace std;
class School{
    public :
    int Rollnumber;
    string Name;
};
int main()
{
    School s1;
    s1.Rollnumber=120;
    s1.Name="Jaydeep";
    School s2;
    s2.Rollnumber=111;
    s2.Name="Nimesh";
    cout<<s1.Rollnumber<<endl;
    cout<<s1.Name<<endl;
    cout<<s2.Rollnumber<<endl;
    cout<<s2.Name;
    return 0;
}