const account1 = ['000256784', 790];
const account2 = ['000986056', 5600];
const account3 = ['001546238', 78065];
const account4 = ['030987456', 120910];

const number = prompt('Account number?');

const action = prompt('Action?');

if (number === account1[0] || number === account2[0] || number === account3[0] || number === account4[0]) 

    if (action === 'balance') {
        if (number === account1[0]) {
            document.write(account1[1]);
        }

        else if (number === account2[0]) {
            document.write(account2[1]);
        }

        else if (number === account3[0]) {
            document.write(account3[1]);
        }

        else if (number === account4[0]) {
            document.write(account4[1]);
        }

        else { document.write('Invalid action') };

    }

    else { document.write('Invalid number') };



if (action === 'withdraw') {
    const amount = parseInt(prompt('Amount?'));

    {
        if (number === account1[0] && amount < account1[1]) {
            document.write(account1[1] - amount);
        }
            
            else if (number === account2[0] && amount < account2[1]) {
            document.write(account2[1] - amount);
        }
            
            else if (number === account3[0] && amount < account3[1]) {
            document.write(account3[1] - amount);
        }
            
            else if (number === account4[0] && amount < account4[1]) {
                document.write(account4[1] - amount);
            }

            else {
                document.write('not enough money');
            }
        }

    }
else {
        document.write(' ');
    };


/* if (amount number === account1[0]) {
        document.write(account1[1]);
    }

    else if (number === account2[0]) {
        document.write(account2[1]);
    }

    else if (number === account3[0]) {
        document.write(account3[1]);
    }

    else if (number === account4[0]) {
        document.write(account4[1]);
    }

    else
    {document.write('Invalid action')};

} */




/* Change your application so that after asking for the account number it asks the user for an action. If the action is "balance", output the balance on the account as before. If the action is something else, output "Unknown action."
Add another action to our application called "withdraw". If the user chooses this action, they will be asked to input an amount of money to withdraw from their account. When you have the information subtract the withdrawn money from the correct account. If the account does not have enough money output an error like "Not enough money on your account."*/

/* Create a simple HTML+JS application. The page will be empty, only include your JS file.
There are four accounts in our bank with numbers and balances as follows:

number: 000256784, balance: 790 euro,
number: 000986056, balance: 5 600 euro,
number: 001546238, balance: 78 065 euro,
number: 030987456, balance: 120 910 euro.
Save this information in appropriate variables in your program.

When the application starts, it asks the user for their account number and it outputs the balance on it. */