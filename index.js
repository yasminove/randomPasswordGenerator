const generateBtn = document.getElementById('generate-passwords');
const leftResult = document.getElementById('generated-password-1');
const rightResult = document.getElementById('generated-password-2');
const passwordRange = document.getElementById('password-range')
const copyBtn1 = document.getElementById('copy-btn-1')
const copyBtn2 = document.getElementById('copy-btn-2')
const generatedPassword1 = document.getElementById('generated-password-1');
const generatedPassword2 = document.getElementById('generated-password-2');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

let lengthValue = passwordRange.value;

passwordRange.addEventListener('input', function () {
    lengthValue = passwordRange.value;

    console.log(lengthValue, 'lengthValue');
})

let characters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

function generatePassword(arr, length) {
    let password = '';
    
    for (let i = 0; i < length; i++) {
        password +=  arr[Math.floor(Math.random() * characters.length)]
    }

    return password;
}

generateBtn.addEventListener('click', function () {
    let uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let symbolsChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
        "/"]
    
    if (uppercase.checked) {
        characters = uppercaseChars
    }
    
    if (numbers.checked) {
        characters = nums
    }

    if (symbols.checked) {
        characters = symbolsChars
    }

    if (uppercase.checked && numbers.checked) {
        characters = uppercaseChars.concat(nums)
    }

    if (uppercase.checked && symbols.checked) {
        characters = uppercaseChars.concat(symbolsChars)
    }

    if (symbols.checked && numbers.checked) {
        characters = symbolsChars.concat(nums)
    }

    if (symbols.checked && numbers.checked && uppercase.checked) {
        characters = symbolsChars.concat(nums).concat(uppercaseChars)
    }


    leftResult.innerHTML = generatePassword(characters, lengthValue)
    rightResult.innerHTML = generatePassword(characters, lengthValue)
})

copyBtn1.addEventListener('click', function () {
    if (generatedPassword1.value.length > 0) {
        const password = generatedPassword1.value;
        navigator.clipboard.writeText(password)
        .then(() => {
            generatedPassword1.innerHTML = 'Password copied!'
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
    }
})

copyBtn2.addEventListener('click', function () {
    if (generatedPassword2.value.length > 0) {
        const password = generatedPassword2.value;
        navigator.clipboard.writeText(password)
            .then(() => {
                generatedPassword2.innerHTML = 'Password copied!'
            })
            .catch(err => {
                console.error('Error copying text: ', err);
            });
    }
})