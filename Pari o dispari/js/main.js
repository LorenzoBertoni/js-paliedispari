let choice = prompt('Inserisci pari o dispari');
    /*while (choice != 'pari' || choice != 'dispari') {
        console.log(choice);
        alert('inserisci una scelta tra pari e dispari');
        choice = prompt('Inserisci pari o dispari');
    }*/ //! ciclo while non funzionante----> rivedere gli argomenti perchè, anche se verificati, non permettono di uscire dal ciclo 
console.log('Hai scelto', choice);

let userNumber = parseInt(prompt('Inserisci un numero tra 1 e 5'));
    while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
        alert('Inserisci un numero compreso tra 1 e 5');
        userNumber = parseInt(prompt('Inserisci un numero tra 1 e 5'));
    }
console.log('numero utente', userNumber);

const randomNumber = computerNumber();
console.log('numero computer', randomNumber);

const sum = userNumber + randomNumber;
console.log('somma', sum);

console.log('il numero è pari', evenOddCheck(sum));

//condizione per determinare il vincitore
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

