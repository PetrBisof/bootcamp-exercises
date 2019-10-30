const username = prompt('username?');
const password = prompt('password?');

const usernameList = ['John','Viki', 'Eda'];

const passwordList = ['John','Viki', 'Eda'];


if (usernameList.includes(username) && passwordList.includes(password) && usernameList.indexOf(username) === passwordList.indexOf(password)  ){
    document.write('welcome');
}
else
{document.write('access denied')};