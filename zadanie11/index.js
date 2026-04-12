const trip = [
  { label: "nocleg", amount: 420, paidBy: "Anna" },
  { label: "paliwo", amount: 260, paidBy: "Piotr" },
  { label: "jedzenie", amount: 180, paidBy: "Anna" },
  { label: "bilety", amount: 140, paidBy: "Ola" }
];

const totalCost = trip.reduce((sum, item) => sum + item.amount, 0);

const perPerson = trip.reduce((acc, item) => {
  acc[item.paidBy] = (acc[item.paidBy] || 0) + item.amount;
  return acc;
}, {});

let topPayer = "";
let maxValue = 0;

for (let person in perPerson) {
  if (perPerson[person] > maxValue) {
    maxValue = perPerson[person];
    topPayer = person;
  }
}

const peopleCount = Object.keys(perPerson).length;
const share = totalCost / peopleCount;

console.log("WYJAZD");
console.log("");
console.log(`Całkowity koszt: ${totalCost} zł`);

console.log("");
console.log("Wydatki:");
for (let person in perPerson) {
  console.log(`${person}: ${perPerson[person]} zł`);
}

console.log("");
console.log(`Najwięcej zapłaciła: ${topPayer}`);

console.log("");
console.log("Rozliczenie:");
for (let person in perPerson) {
  const diff = perPerson[person] - share;
  if (diff > 0) {
    console.log(`${person} powinna otrzymać ${diff.toFixed(2)} zł`);
  } else {
    console.log(`${person} powinna oddać ${Math.abs(diff).toFixed(2)} zł`);
  }
}
