const contactsList = [
  { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true },
  { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false },
  { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true }
];

function getByCity(list, cityName) {
  return list.filter((contact) => contact.city === cityName);
}

function getFavorites(list) {
  return list.filter((contact) => contact.favorite);
}

function formatContacts(list) {
  return list.map((contact) => `${contact.name} - ${contact.phone}`);
}

function searchByNamePart(list, text) {
  return list.filter((contact) =>
    contact.name.toLowerCase().includes(text.toLowerCase())
  );
}

const katowiceContacts = formatContacts(getByCity(contactsList, "Katowice"));
const sosnowiecContacts = formatContacts(getByCity(contactsList, "Sosnowiec"));
const favoriteContacts = formatContacts(getFavorites(contactsList));
const foundByName = formatContacts(searchByNamePart(contactsList, "ola"));

console.log("KONTAKTY Z KATOWIC");
katowiceContacts.forEach((item) => console.log(item));

console.log("");
console.log("KONTAKTY Z SOSNOWCA");
sosnowiecContacts.forEach((item) => console.log(item));

console.log("");
console.log("KONTAKTY ULUBIONE");
favoriteContacts.forEach((item) => console.log(item));

console.log("");
console.log("WYSZUKIWANIE PO FRAGMENCIE NAZWY");
foundByName.forEach((item) => console.log(item));

