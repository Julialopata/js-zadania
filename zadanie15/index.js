const weeklySchedule = [
  { day: "poniedziałek", subject: "Programowanie", room: "A12", online: false },
  { day: "wtorek", subject: "Bazy danych", room: "online", online: true },
  { day: "czwartek", subject: "Grafika", room: "B03", online: false },
  { day: "piątek", subject: "UX", room: "online", online: true }
];

function getClassesByDay(list, selectedDay) {
  return list.filter((lesson) => lesson.day === selectedDay);
}

function formatClasses(list) {
  return list.map((lesson) => {
    const mode = lesson.online ? "online" : "stacjonarne";
    return `${lesson.subject} - ${lesson.room} - ${mode}`;
  });
}

function getOnlyOnline(list) {
  return list.filter((lesson) => lesson.online);
}

const thursdayClasses = getClassesByDay(weeklySchedule, "czwartek");
const formattedThursday = formatClasses(thursdayClasses);
const onlineClasses = formatClasses(getOnlyOnline(weeklySchedule));

console.log("PLAN DLA WYBRANEGO DNIA:");
formattedThursday.forEach((item) => console.log(item));

console.log("");
console.log(`Liczba wszystkich zajęć w tygodniu: ${weeklySchedule.length}`);

console.log("");
console.log("ZAJĘCIA ONLINE:");
onlineClasses.forEach((item) => console.log(item));
