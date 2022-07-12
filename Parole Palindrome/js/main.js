const userPrompt = prompt('Inserisci una parola');
console.log(palindromeCheck(userPrompt));

function palindromeCheck(string) {
    const array = string.split(''); 
    
    const reverseArray = array.reverse(); 

    const reverseString = reverseArray.join('');

    if (string == reverseString) { 
        return 'palindroma';
    } else {
        return 'non palindroma';
    }
}

