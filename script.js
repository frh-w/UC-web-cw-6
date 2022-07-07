let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0];

let all_grades_div = document.getElementById("all-grades");
let search_grades_div = document.getElementById("search-grades");
let A_grades_div = document.getElementById("A-grades");
let bonus_grades_div = document.getElementById("bonus-grades");
let random_grade_div = document.getElementById("random-grade");

function search() {
  let inputValue = document.getElementById("input").value;
}
grades.pop();
console.log(grades);
grades.push(99);
console.log(grades);

grades.forEach((grade) => {
  all_grades_div.innerHTML += `<span>${grade}</span>`;
});

let curve = grades.map((grade) => grade + 3);
let a_students = grades.filter((grades) => grades > 90);

grades.forEach((grade) => {
  A_grades_div.innerHTML += `<span>${grade}</span>`;
});
grades.forEach((grade) => {
  bonus_grades_div.innerHTML += `<span>${index}: ${grade}</span>`;
});
let randomIndex = Math.random(Math.random() * grades.length);

grades.forEach((grade) => {
  random_grade_div.innerHTML += `<span>${randomIndex}: ${grade[randomIndex]}</span>`;
});
