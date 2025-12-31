//console.log("Login button script loaded.");


document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const accountNumber = document.getElementById("Account-number").value;
    
    const pin = document.getElementById("pin").value;
    console.log(accountNumber, pin);
    // Here you can add your login logic, e.g., validate credentials, redirect, etc.
    if(accountNumber.length ===11 && pin.length >=4) {
        console.log("Login successful");
    } else {
        console.log("Invalid account number or pin number");
    }
})