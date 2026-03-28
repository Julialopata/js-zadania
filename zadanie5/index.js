const tasksList = ["zajęcia", "zakupy", "trening"];

function createDayPlan(name, tasks = ["odpoczynek"]) {
  const numberedTasks = tasks.map((task, index) => `${index + 1}. ${task}`);

  const plan = `Plan dnia dla ${name}:
${numberedTasks.join(", ")}
Liczba zadań: ${tasks.length}`;

  return plan;
}

const plan1 = createDayPlan("Julia", tasksList);
const plan2 = createDayPlan("Ania");

console.log(plan1);
console.log(plan2);
