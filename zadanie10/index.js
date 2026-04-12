const activityList = [
  { type: "bieg", minutes: 35, calories: 320 },
  { type: "rower", minutes: 50, calories: 410 },
  { type: "spacer", minutes: 20, calories: 90 },
  { type: "siłownia", minutes: 60, calories: 450 }
];

const totalTime = activityList.reduce((sum, act) => sum + act.minutes, 0);
const totalCalories = activityList.reduce((sum, act) => sum + act.calories, 0);

const longActivities = activityList.filter((act) => act.minutes > 30);

const mostCalories = activityList.reduce((max, act) => {
  return act.calories > max.calories ? act : max;
});

console.log("RAPORT TRENINGÓW");
console.log("");
console.log(`Łączny czas: ${totalTime} min`);
console.log(`Spalone kalorie: ${totalCalories}`);
console.log(`Liczba długich treningów: ${longActivities.length}`);

console.log("");
console.log(`Najbardziej intensywny trening: ${mostCalories.type} (${mostCalories.calories} kcal)`);

const showTypes = (list) => {
  const types = list.map((act) => act.type);
  console.log("Rodzaje aktywności:");
  console.log(types.join(", "));
};

showTypes(activityList);
