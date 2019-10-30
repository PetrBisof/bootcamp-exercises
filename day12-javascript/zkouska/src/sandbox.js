/* const wage = 350;
const salary = wage * 7 * 20;
console.log(salary);
alert(salary);
document.write(salary); */
// prompt('Enter your age'); vraci string
/* const age = prompt('Enter your age')
document.write(parseInt(age) + 5); */

/* 1

const birthYear = parseInt(prompt('Enter your age'));
const year = 2019;
const yourAge = year - birthYear;
alert("you are " + yourAge + " years old"); */

/* 2

const salary = parseInt(prompt('What is your salary?'));
const day = parseInt(prompt('How manz days you work?'));
const hours = parseInt(prompt('How many hours daily you work?'));

const finalSalary = day * hours * salary * 0.75;

document.write('Your salary is ' + finalSalary + ' euro.' ); */

/* 3

const euro = parseInt(prompt('How many euro want you to change?'));

const changed = Math.round(euro * 25.695);

document.write('You will receive' + changed + ' czk.' ); */


/* 4

const hours = [4,2,5,2,4,2,2];

console.log(hours[hours.length-1]);

const days = ['monday','tuesday','wednesday','thursday','friday'];

days.push('saturday','sunday');

console.log(days); */

/* 5

const board = [
  [6, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 3],
  [0, 0, 0, 0, 0, 0, 1, 2],
  [0, 0, 0, 0, 3, 0, 2, 6],
  [0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 5, 0],
];

console.log(board);

board[5].splice(5, 1, 6);
board[5].splice(7, 1, 0);

console.log(board[5]);

alert(board);
 */


/* 6

const ranks = ['ace', 'king', 'queen', 'jack', 10, 9, 8, 7, 6, 5, 4, 3, 2];

const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

const rank = ranks[Math.floor(Math.random() * 12)];

const suit = suits[Math.floor(Math.random() * 3)];

document.write(`${rank} of ${suit}`);

*/






/* 7
const limit = parseInt(prompt('Limit?'));
const min = parseInt(prompt('Minimum?'));


const result = Math.floor(Math.random() * (limit - min)) + min;

document.write(result); */

/* 8

const password1 = prompt('Password?');
const password2 = prompt('Password?');

if (password1.length < 8 || password2.length < 8) { document.write('not long enough'); } else if (password1 === password2) { document.write('saved'); } else {
  document.write('try again');
}

*/

const age = parseInt(prompt('age?'));

const price = 12;

if (age < 6) {
  document.write(0);
}

else if (age >= 6 && age <= 15) {
  document.write(price * 0.35);
}

else if (age >= 16 && age <= 26) {
  document.write(price * 0.65);
}

else if (age >= 27 && age <= 64) {
  document.write(price);
}

else {
  document.write(price * 0.5);
}


/* Create a page that will ask the user for their login and password. Check, that the password is equal to sore-thumb-218 and if so, output "access granted." Otherwise output "Nice try."
Create a page where the user needs to create their password for the first time. Ask for the password twice and check that they are the same. If not, output something like "Your passwords to no match."
Improve the above page so that it does not allow passwords less then 8 characters long. If the password is less then 8 characters output "Your password is no secure." In such a case do not ask the user to type the password again. Only do that if it passes the security check.
Let's say that the basic price for a bus ticket is 12 euro. Create a page which will ask the user for their age and compute a discounted price according to these rules:
age under 6 years (preschool kids): 0 euro,
age between 6 and 15 (pupils): 35% of the basic price,
age between 16 and 26 (students): 65% of the basic price,
age between 27 and 64 (adults): 100% of the basic price,
otherwise (seniors): 50% of the basic price. */
