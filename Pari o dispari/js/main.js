const choice = prompt('Inserisci pari o dispari');
console.log('Hai scelto', choice);

const userNumber = parseInt(prompt('Inserisci un numero tra 1 e 5'));

const randomNumber = computerNumber();

const sum = userNumber + randomNumber;

console.log('numero utente', userNumber);
console.log('numero computer', randomNumber);
console.log('somma', sum);
console.log('il numero è pari', evenOddCheck(sum));

if (choice == 'pari' && evenOddCheck(sum) == true) {
    alert('La somma dei numeri è pari, HAI VINTO!')
} else if (choice == 'dispari' && evenOddCheck(sum) == false) {
    alert('La somma dei numeri è dispari, HAI VINTO!')
} else {
    alert('Ha vinto il computer')
}



function computerNumber () {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    return randomNumber;
}

function evenOddCheck (number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

