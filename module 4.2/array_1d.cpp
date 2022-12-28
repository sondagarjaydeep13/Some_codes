//  1D array
#include<iostream>
using namespace std;
// here using class to input 5 values from user and print out
class array{
    public:
    int array[5],i;
    
    void input_array(){
        cout<<"Enter array value:"<<endl;
        for( i=0;i<5;i++){
                 cin>>array[i];
        }
    }
    void output_array(){
        cout<<"Array is :"<<endl;
        for(i=0;i<5;i++){
            cout<<array[i]<<"\t";
        }
    }
};
int main()
{
    array a1;
    a1.input_array();
    a1.output_array();
    return 0;
}