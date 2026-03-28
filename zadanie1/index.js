const user = {
  firstName: "Julia",
  lastName: "Łopata",
  city: "Sosnowiec",
  age: 23,
  fieldOfStudy: "informatyka"
};

console.log(`${user.firstName} ${user.lastName}`);

console.log(`Mieszkam w ${user.city} i studiuję ${user.fieldOfStudy}.`);

if (user.age >= 18) {
  console.log("Jestem pełnoletnia.");
} else {
  console.log("Jestem niepełnoletnia.");
}

user.hobby = "taniec";

console.log(`Moje hobby to ${user.hobby}.`);

const showInfo = (person) => {
  console.log(`Mam ${person.age} lata i interesuję się ${person.hobby}.`);
};

showInfo(user);
