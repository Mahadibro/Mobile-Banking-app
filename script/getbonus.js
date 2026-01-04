// Get bonus handler — uses utilities: getInputValueByID, getInnerTextByID, setInnerTextByIDandValue
(function () {
  const btn = document.getElementById("bonus-btn");
  if (!btn) return;

  btn.addEventListener("click", function (event) {
    event.preventDefault();

    const mainBalance = getInnerTextByID("main-balance");
    const bonusAmount = 500; // Fixed bonus amount

    const newBalance = mainBalance + bonusAmount;
    setInnerTextByIDandValue("main-balance", newBalance);

    const container = document.getElementById("transection-container");
    if (container) {
      const entry = document.createElement("div");
      entry.className = "p-3 my-2 bg-slate-100 rounded border";
      const time = new Date().toLocaleString();
      entry.innerHTML = `
        <strong>Bonus Claimed</strong>
        <div>${time}</div>
        <div>Amount: ${bonusAmount}</div>
      `;
      container.prepend(entry);
    }

    alert(`Bonus of ${bonusAmount} added to your account!`);
  });
})();