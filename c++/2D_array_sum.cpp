// two matrix addition using function
#include<iostream>
using namespace std;
void myfunction(){
    int i,j,a[2][2],b[2][2],c[2][2];
     
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
             cout<<"Enter Elements value :";
             cin>>a[i][j];
        }
    }
    cout<<"......first matrix is ......."<<endl;
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            cout<<a[i][j]<<"\t";
        }
        cout<<endl;
    }
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            cout<<"Enter Elements Value:";
            cin>>b[i][j];
        }
    }
    cout<<".......Secound matrix is........"<<endl;
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            cout<<b[i][j]<<"\t";
        }
        cout<<endl;
    }
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
             c[i][j]=a[i][j]+b[i][j];
        }
    }
  cout<<"...sum of two matrix is....."<<endl;
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            cout<<c[i][j]<<"\t";
        }
        cout<<endl;
    }

  
}
int main()
{
    myfunction();
    return 0;
}