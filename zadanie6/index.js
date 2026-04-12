const movieList = [
  { title: "Arrival", category: "sci-fi", rating: 8.1, watched: true },
  { title: "Whiplash", category: "drama", rating: 8.5, watched: false },
  { title: "Dune", category: "sci-fi", rating: 8.0, watched: false },
  { title: "Inside Out", category: "animation", rating: 8.1, watched: true }
];

const notWatched = movieList.filter((movie) => movie.watched === false);

const topRated = movieList.filter((movie) => movie.rating > 8.0);

const topRatedTitles = topRated.map((movie) => movie.title);

console.log("RAPORT FILMÓW");
console.log("");

console.log("Filmy nieobejrzane:");
notWatched.forEach((movie, index) => {
  console.log(`${index + 1}. ${movie.title} | ${movie.category} | ocena: ${movie.rating}`);
});

console.log("");

console.log("Filmy z oceną większą niż 8.0:");
topRated.forEach((movie, index) => {
  console.log(`${index + 1}. ${movie.title} | ${movie.category} | ocena: ${movie.rating}`);
});

console.log("");

console.log("Tytuły wybranego zbioru:");
topRatedTitles.forEach((title, index) => {
  console.log(`${index + 1}. ${title}`);
});

const showCount = (list) => {
  console.log("");
  console.log(`Liczba filmów w katalogu: ${list.length}`);
};

showCount(movieList);
