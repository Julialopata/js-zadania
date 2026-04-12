const todos = [
  { id: 1, title: "Oddać projekt", done: false },
  { id: 2, title: "Przeczytać rozdział", done: true },
  { id: 3, title: "Przygotować prezentację", done: false }
];

function addTodo(list, newTitle) {
  const newTask = {
    id: list.length + 1,
    title: newTitle,
    done: false
  };

  return [...list, newTask];
}

function markAsDone(list, taskId) {
  return list.map((task) => {
    if (task.id === taskId) {
      return { ...task, done: true };
    }
    return task;
  });
}

function getUndone(list) {
  return list.filter((task) => !task.done);
}

function formatTodos(list) {
  return list.map((task) => `${task.id}. ${task.title} - ${task.done ? "zrobione" : "do zrobienia"}`);
}

const afterAdd = addTodo(todos, "Napisać notatki");
const afterUpdate = markAsDone(afterAdd, 1);
const undoneTasks = getUndone(afterUpdate);

console.log("LISTA");
formatTodos(todos).forEach((item) => console.log(item));

console.log("");
console.log("PO DODANIU");
formatTodos(afterAdd).forEach((item) => console.log(item));

console.log("");
console.log("PO ZMIANIE STATUSU");
formatTodos(afterUpdate).forEach((item) => console.log(item));

console.log("");
console.log("NIEWYKONANE ZADANIA");
formatTodos(undoneTasks).forEach((item) => console.log(item));
