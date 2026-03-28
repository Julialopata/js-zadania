const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];

const total = expenses.reduce((acc, value) => acc + value, 0);

const average = total / expenses.length;

const maxExpense = Math.max(...expenses);

console.log("Raport wydatków:");
console.log(`Suma: ${total}`);
console.log(`Średnia: ${average.toFixed(2)}`);
console.log(`Największy wydatek: ${maxExpense}`);

const budgetLimit = 200;

if (total > budgetLimit) {
  console.log("Przekroczono budżet tygodniowy!");
} else {
  console.log("Budżet jest w normie.");
}
