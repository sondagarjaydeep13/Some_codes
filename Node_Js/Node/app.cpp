#include <iostream>
#include <cmath>
using namespace std;

int result (int a, int b, char op);

int main()
{

char optr, choice;
int nr1, nr2;

while (true)
{
cout << "Enter first number: ";
cin >> nr1;
cout << "Enter an operator (+ - / * %) : ";
cin >> optr;
cout << "Enter second number: ";
cin >> nr2;

result (nr1, nr2, optr);
cout<<"Would you like to perform other calculation?(Y/N): ";
cin >> choice;

if (choice =='N'||choice =='n'){
    break;
    }
}}

int result (int a, int b, char op)
{
int result;

if (op == '+'){
result = a + b;
cout << "Result to " << a << " + " << b << " = " << result << endl;
} else if (op == '-'){
result = a - b;
cout << "Result to " << a << " + " << b << " = " << result << endl;
} else if (op == '*'){
result = a * b;
cout << "Result to " << a << " * " << b << " = " << result << endl;
} else if (op == '/'){
result = a / b;
a / b;
cout << "Result to " << a << " / " << b << " = " << result << endl;
} else if (op == '%'){
result = a % b;
cout << "Remainder to " << a << " % " << b << " = " << result << endl;
} else {
cout <<"Error 404: " << a << op << b <<" Wrong input format. Program terminated."          << endl;


// i still dont know how to properly use error handling

}}
