const cartItems = [
  { name: "Chleb", price: 4.5, quantity: 2 },
  { name: "Ser", price: 9.9, quantity: 1 },
  { name: "Sok", price: 6.2, quantity: 3 }
];

const discountThreshold = 30;
const discountPercent = 10;

const itemValues = cartItems.map((item) => ({
  ...item,
  total: item.price * item.quantity
}));

const totalPrice = itemValues.reduce((sum, item) => sum + item.total, 0);

const descriptions = cartItems.map((item) => `${item.quantity} x ${item.name}`);

let finalPrice = totalPrice;

if (totalPrice > discountThreshold) {
  finalPrice = totalPrice * (1 - discountPercent / 100);
}

console.log("KOSZYK");
console.log("");
console.log("Produkty:");
descriptions.forEach((desc, i) => console.log(`${i + 1}. ${desc}`));

console.log("");
console.log(`Suma przed rabatem: ${totalPrice.toFixed(2)} zł`);
console.log(`Suma po rabacie: ${finalPrice.toFixed(2)} zł`);

const showItemsCount = (list) => {
  console.log(`Liczba produktów: ${list.length}`);
};

showItemsCount(cartItems);
