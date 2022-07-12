//const choice = prompt('Scegli pari o dispari');

const userNumber = parseInt(prompt('Inserisci un numero tra 1 e 5'));

const sum = userNumber + computerNumber();

console.log('numero utente', userNumber);
console.log('numero computer', computerNumber());
console.log('somma', sum); 



function computerNumber () {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    return randomNumber;
}

