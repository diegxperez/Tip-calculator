// Principal Card
const labelTotalPerPerson = document.querySelector("#totalPerPerson");
const labelTotalBill = document.querySelector("#labelTotalBill");
const labelTotalTip = document.querySelector("#labelTotalTip");
// Input Bill Total
const inputBillTotal = document.querySelector("#inputBillTotal");
// Range Tip
const rangeTip = document.querySelector("#tip-range");
const labelRangeTip = document.querySelector("#labelRangeTip");
// Range Split
const rangeSplit = document.querySelector("#split-range");
const labelRangeSplit = document.querySelector("#labelRangeSplit");
// Label Split Total
const labelSplitTotal = document.querySelector("#labelSplitTotal");
// Buttons
const btnRoundUp = document.querySelector("#btnRoundUp");
const btnRoundDown = document.querySelector("#btnRoundDown");

// Test
console.log(labelTotalPerPerson.textContent.trim());
console.log(labelTotalBill.textContent);
console.log(labelTotalTip.textContent);
console.log(inputBillTotal.value);
console.log(rangeTip.value);
console.log(rangeSplit.value);
console.log(labelSplitTotal.textContent.trim());
console.log(btnRoundUp.textContent.trim());
console.log(btnRoundDown.textContent.trim());

// Calcuate split total

rangeTip.addEventListener("input", function () {
  labelRangeTip.textContent = `${rangeTip.value}%`;
});

rangeSplit.addEventListener("input", function () {
  labelRangeSplit.innerHTML = `${rangeSplit.value} persons`;
});
