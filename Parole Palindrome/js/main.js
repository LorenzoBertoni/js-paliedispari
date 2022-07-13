let userPrompt = prompt('Inserisci una parola');
    while (userPrompt.length < 3 || !isNaN(userPrompt)) {
        alert('Parola inserita non valida');
        userPrompt = prompt('Inserisci una parola');
    } 

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

