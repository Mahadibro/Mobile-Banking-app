//console.log("Login button script loaded.");


document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const accountNumber = document.getElementById("Account-number").value;
    
    const pin = document.getElementById("pin").value;
    console.log(accountNumber, pin);
    const convertedPin = parseInt(pin);
    if(accountNumber.length===11){
        if(convertedPin===1234){
            window.location.href = "./main.html"; // Redirect to dashboard
        }
        else{
            alert("Incorrect PIN");
        }
    }
        else{
            alert("Account number must be 11 digits");
        }
    });