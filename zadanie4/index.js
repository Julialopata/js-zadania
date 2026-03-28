const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const dayType = "laboratorium";

if (hasLaptop && hasNotebook) {
  console.log("Jesteś przygotowany na zajęcia.");
} else {
  console.log("Nie jesteś przygotowany na zajęcia.");
}

const status = hasLaptop && hasNotebook ? "Gotowy" : "Niegotowy";
console.log(`Status: ${status}`);

!hasCharger && console.log("Uwaga: brak ładowarki!");

if (dayType === "laboratorium") {
  console.log("Dzisiaj masz laboratorium.");
} else {
  console.log("Dzisiaj masz wykład.");
}

const checkEquipment = (laptop, charger, notebook) => {
  if (laptop && charger && notebook) {
    console.log("Masz cały potrzebny sprzęt.");
  } else {
    console.log("Nie masz wszystkiego.");
  }
};

checkEquipment(hasLaptop, hasCharger, hasNotebook);
