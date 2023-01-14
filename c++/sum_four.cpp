#include<iostream>
using namespace std;
void sum_four(){
   int a,b,c,d;
      cout<<"Enter The Four Value :";
       scanf("%d%d%d%d",&a,&b,&c,&d);
    int sum=a+b+c+d;
    cout<<"Sum of Four Value is ="<<sum<<endl;
}
int main()
{
  sum_four();
  return 0;
}
