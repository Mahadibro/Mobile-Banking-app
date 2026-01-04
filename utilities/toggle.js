document.getElementById("cashout").style.display = "none";
document.getElementById("paybill").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
    handleToggle("addmoney", "block")
    handleToggle("cashout", "none")
    handleToggle("transection-history","none")
    handleToggle("paybill", "none")
})

document.getElementById("cashout-box").addEventListener("click", function () {
    handleToggle("addmoney", "none")
    handleToggle("cashout", "block")
    handleToggle("transection-history","none")
    handleToggle("paybill", "none")
})

document.getElementById("paybill-box").addEventListener("click", function () {
    handleToggle("addmoney", "none")
    handleToggle("cashout", "none")
    handleToggle("transection-history","none")
    handleToggle("paybill", "block")
})

document.getElementById("Transaction-box").addEventListener("click", function () {
    handleToggle("addmoney", "none")
    handleToggle("cashout", "none")
    handleToggle("transection-history", "block")
    handleToggle("paybill", "none")
})