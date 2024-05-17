// Given a word and a shift position, write a function that encrypts this word by shifting each letter’s alphabet 
// position by the given number and return the encrypted word.


function encryptWord(word, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const wordArray = word.toLowerCase().split('');

    const encryptedArray = wordArray.map(letter => {
        if (alphabet.includes(letter)) {
            const currentIndex = alphabet.indexOf(letter);
            const newIndex = (currentIndex + shift) % 26; // Ensures the index stays within the range of the alphabet
            return alphabet[newIndex];
        } else {
            return letter; // If the character is not in the alphabet (e.g., space), leave it unchanged
        }
    });

    return encryptedArray.join('');
}