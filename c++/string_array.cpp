#include<iostream>
using namespace std;
int main()
{
    int a[2][2]={{1,2},{3,4}},b[2][2]={{1,2},{3,4}},c[2][2];
    int i,j,k;
    for(i=0;i<2;i++){
         for(k=0;k<2;k++){
        for(j=0;j<2;j++){
           
            c[i][j]=a[i][k]*b[k][j];
            }
        }
    }
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            cout<<c[i][j]<<"\t";
        }
        cout<<endl;
    }
    return 0;
}