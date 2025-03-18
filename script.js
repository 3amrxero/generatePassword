const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
     "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
     "}","]",",","|",":",";","<",">",".","?",
"/"];

var btn = document.getElementById("btn");
var password0 = document.getElementById("password");
var password2 = document.getElementById("password2");
const passwordLength = 16;

btn.addEventListener("click", () => {
    let generatedPassword1 = ""; // Temporary variable for the password
    let generatedPassword2 = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber1 = Math.floor(Math.random() * characters.length);
        const randomNumber2 = Math.floor(Math.random() * characters.length);
        
        generatedPassword1 += characters[randomNumber1];
        generatedPassword2 += characters[randomNumber2];
    }

    password0.textContent = generatedPassword1; // Assign generated password
    password2.textContent = generatedPassword2;
});
