// Transfer money handler — uses utilities: getInputValueByID, getInnerTextByID, setInnerTextByIDandValue
(function () {
  const btn = document.getElementById("transfer-btn");
  if (!btn) return;

  btn.addEventListener("click", function (event) {
    event.preventDefault();

    const accountEl = document.getElementById("transfer-account");
    const amount = getInputValueByID("transfer-amount");
    const pinInput = document.getElementById("transfer-pin");
    const mainBalance = getInnerTextByID("main-balance");

    const accountNumber = accountEl ? String(accountEl.value).trim() : "";
    const pin = pinInput ? parseInt(pinInput.value, 10) : NaN;

    if (!accountNumber) { alert("Enter recipient account number."); return; }
    if (accountNumber.length !== 11) { alert("Account number must be 11 digits."); return; }
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
        <strong>Transfer</strong>
        <div>${time}</div>
        <div>To: ${accountNumber}</div>
        <div>Amount: ${amount}</div>
      `;
      container.prepend(entry);
    }

    if (accountEl) accountEl.value = "";
    if (document.getElementById("transfer-amount")) document.getElementById("transfer-amount").value = "";
    if (pinInput) pinInput.value = "";
  });
})();