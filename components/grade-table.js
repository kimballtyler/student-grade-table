class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    this.tableElement.innerHTML = "";
    for (var i = 0; i < grades.length; i++) {
      var row = this.renderGradeRow(grades[i], this.deleteGrade);
      this.tableElement.appendChild(row);
    }
    if (grades.length === 0) {
      document.querySelector("p").classList.remove("d-none");
    }
  }
  renderGradeRow(data, deleteGrade) {
    var row = document.createElement("tr");
    var name = document.createElement("td");
    name.textContent = data.name;
    row.appendChild(name);
    var course = document.createElement("td");
    course.textContent = data.course;
    row.appendChild(course);
    var grade = document.createElement("td");
    grade.textContent = data.grade;
    grade.classList.add("text-center");
    row.appendChild(grade);
    var buttonTd = document.createElement("td");
    var button = document.createElement("button");
    buttonTd.appendChild(button);
    buttonTd.classList.add("text-center");
    button.textContent = "DELETE";
    button.classList.add("btn-danger");
    row.appendChild(buttonTd);
    button.addEventListener("click", function() {
      deleteGrade(data.id);
    });
    return row;
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
}
