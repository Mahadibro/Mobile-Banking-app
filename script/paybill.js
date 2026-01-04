(function () {
  const btn = document.getElementById("pay-bill-btn");
  if (!btn) return;

  btn.addEventListener("click", function (event) {
    event.preventDefault();

    const billerEl = document.getElementById("biller-select");
    const customerEl = document.getElementById("customer-number");
    const amount = getInputValueByID("bill-amount");
    const pinInput = document.getElementById("bill-pin");
    const mainBalance = getInnerTextByID("main-balance");

    const biller = billerEl ? billerEl.value : "";
    const customerNumber = customerEl ? String(customerEl.value).trim() : "";
    const pin = pinInput ? parseInt(pinInput.value, 10) : NaN;

    if (!biller) { alert("Please select a biller."); return; }
    if (!customerNumber) { alert("Please enter the customer/account number."); return; }
    if (isNaN(amount) || amount <= 0) { alert("Enter a valid positive amount."); return; }
    if (amount > mainBalance) { alert("Insufficient balance."); return; }
    if (pin !== 1234) { alert("Invalid PIN."); return; }

    const newBalance = mainBalance - amount;
    setInnerTextByIDandValue("main-balance", newBalance);

    const container = document.getElementById("transection-container");
    if (container) {
      const entry = document.createElement("div");
      entry.className = "p-3 my-2 bg-slate-100 rounded border";
      const time = new Date().toLocaleString();
      entry.innerHTML = `
        <strong>Bill Payment</strong>
        <div>${time}</div>
        <div>Biller: ${biller}</div>
        <div>Customer: ${customerNumber}</div>
        <div>Amount: ${amount}</div>
      `;
      container.prepend(entry);
    }

    if (billerEl) billerEl.selectedIndex = 0;
    if (customerEl) customerEl.value = "";
    if (document.getElementById("bill-amount")) document.getElementById("bill-amount").value = "";
    if (pinInput) pinInput.value = "";
  });
})();