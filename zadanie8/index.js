const grades = [3.0, 4.0, 5.0, 3.5, 4.5];

const minPass = 3.0;

function getResult(list) {
  const sum = list.reduce((acc, grade) => acc + grade, 0);
  const avg = sum / list.length;

  const status = avg >= minPass ? "zaliczone" : "niezaliczone";

  let level = "";
  if (avg >= 4.5) {
    level = "bardzo dobry";
  } else if (avg >= 4.0) {
    level = "dobry";
  } else if (avg >= 3.0) {
    level = "dostateczny";
  } else {
    level = "niedostateczny";
  }

  return {
    average: avg.toFixed(2),
    status,
    level
  };
}

const result = getResult(grades);

console.log("WYNIK STUDENTA");
console.log("");
console.log(`Średnia: ${result.average}`);
console.log(`Status: ${result.status}`);
console.log(`Ocena opisowa: ${result.level}`);

const showGrades = (list) => {
  console.log("");
  console.log("Oceny:");
  console.log(list.join(", "));
};

showGrades(grades);
