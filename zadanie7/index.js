const repairsList = [
  { id: 1, client: "Anna", device: "laptop", status: "nowe" },
  { id: 2, client: "Piotr", device: "telefon", status: "w trakcie" },
  { id: 3, client: "Ola", device: "tablet", status: "zakończone" }
];

const found = repairsList.find((item) => item.id === 2);

const updatedList = repairsList.map((item) => {
  if (item.id === 2) {
    return { ...item, status: "zakończone" };
  }
  return item;
});

const inProgress = updatedList.filter((item) => item.status === "w trakcie");

console.log("REJESTR NAPRAW");
console.log("");

console.log("Znalezione zgłoszenie:");
console.log(`${found.client} - ${found.device} - ${found.status}`);

console.log("");
console.log("Oryginalna lista:");
repairsList.forEach((item) => {
  console.log(`${item.id}. ${item.client} - ${item.device} - ${item.status}`);
});

console.log("");
console.log("Zaktualizowana lista:");
updatedList.forEach((item) => {
  console.log(`${item.id}. ${item.client} - ${item.device} - ${item.status}`);
});

console.log("");
console.log(`Liczba zgłoszeń w trakcie: ${inProgress.length}`);

const showDevices = (list) => {
  const devices = list.map((item) => item.device);
  console.log("Urządzenia w systemie:");
  console.log(devices.join(", "));
};

showDevices(repairsList);
