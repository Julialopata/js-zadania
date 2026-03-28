const products = [
  { name: "chleb", quantity: 2, urgent: true },
  { name: "mleko", quantity: 1, urgent: false },
  { name: "jajka", quantity: 10, urgent: true },
  { name: "makaron", quantity: 3, urgent: false }
];

products.forEach((item) => {
  console.log(`${item.name} - ilość: ${item.quantity}`);
});

const urgentProducts = products.filter((item) => item.urgent);

const upperCaseProducts = products.map((item) => item.name.toUpperCase());

const urgentNames = urgentProducts.map((item) => item.name);

console.log(`Liczba pozycji pilnych: ${urgentProducts.length}`);
console.log(`Produkty pilne: ${urgentNames.join(", ")}`);
console.log("Lista:");
console.log(upperCaseProducts);

const showAllProductsCount = (list) => {
  console.log(`Łączna liczba produktów na liście: ${list.length}`);
  console.log(`Produkty: ${upperCaseProducts.join(", ")}`);
};

showAllProductsCount(products);

