const square = (number) => {
    /* Math.sqrt(number) */ number * number;
};

square(5);

const hypotenuse = (number1, number2) => {
   return Math.sqrt((number1 * number1) + (number2 * number2)
};

square(5);

const salary = (pay, hours, days) => {
    return pay*hours*days
};

const taxed_salary = (salary, tax) => {
    tax_num = (100 - tax) / 100;
    return salary * tax_num
};






/*Turn your salary computing formula to a function called salary. The function will have three parameters: pay, hours and days and will return the resulting salary. Call that function with some real arguments to test that it works.
Create another function called taxed_salary(), which will take two parameters - the basic salary and the tax. Let it return a salary after applying the tax.*/