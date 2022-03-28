let myInput = document.getElementById("myInput"),
  mySubmit = document.getElementById("mySubmit"),
  containerBody = document.getElementById("containerBody");

let students = [
  { id: 1, studentName: "Khaled Mohamed", studentClass: "1/2" },
  { id: 2, studentName: "Ahmed Hamed", studentClass: "1/5" },
  { id: 3, studentName: "Wael Sayed", studentClass: "1/4" },
];

// When load the window, print in the screen all data name of the students[].
window.onload = () => {
  for (let i = 0, j = 1; i < students.length; i++, j++) {
    containerBody.innerHTML += `${j}- ${students[i].studentName} <br>`;
  }
};
