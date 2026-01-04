document.getElementById("cashout").style.display = "none";
document.getElementById("paybill").style.display = "none";
document.getElementById("transfer").style.display = "none";
document.getElementById("bonus").style.display = "none";

// ... existing handlers, then add:

document.getElementById("bonus-box").addEventListener("click", function () {
    handleToggle("addmoney", "none")
    handleToggle("cashout", "none")
    handleToggle("transection-history","none")
    handleToggle("paybill", "none")
    handleToggle("transfer", "none")
    handleToggle("bonus", "block")
})