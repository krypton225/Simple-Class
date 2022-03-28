let myInput = document.getElementById("myInput"),
  mySubmit = document.getElementById("mySubmit"),
  containerBody = document.getElementById("containerBody");

let students = [
  { id: 1, studentName: "Khaled Mohamed", studentClass: "1/2" },
  { id: 2, studentName: "Ahmed Hamed", studentClass: "1/5" },
  { id: 3, studentName: "Wael Sayed", studentClass: "1/4" },
];

// When load the window, print in the screen all data name of the students[].
function designUI(stdsNames) {
  students.forEach(function (items) {
    containerBody.innerHTML += `${items.studentName}. <br><br>`;
  });
}

window.onload = () => {
  designUI(students);
};

console.log(students);

// When input is recived a student name.
mySubmit.addEventListener("click", () => {
  if (myInput.value == "") {
    alert("Please, Enter the student name!");
  } else {
    let lastID = students.length ? students[students.length - 1].id : 1;

    students.push({
      id: ++lastID,
      studentName: myInput.value,
      studentClass: "1/2",
    });

    containerBody.innerHTML += `${
      students[students.length - 1].studentName
    } <br><br>`;

    myInput.value = "";
  }
});
