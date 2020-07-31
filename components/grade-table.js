class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    console.log(grades);
    var tbody = this.tableElement.querySelector("tbody");
    tbody.innerHTML = "";
    for (var i = 0; i < grades.length; i++) {
      var tr = document.createElement("tr");
      tbody.appendChild(tr);
      var name = document.createElement("td");
      name.textContent = grades[i].name;
      tr.appendChild(name);
      var course = document.createElement("td");
      course.textContent = grades[i].course;
      tr.appendChild(course);
      var grade = document.createElement("td");
      grade.textContent = grades[i].grade;
      tr.appendChild(grade);
    }
  }
}
