class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var averageGrade = 0;
    for (var i = 0; i < grades.length; i++) {
      averageGrade += grades[i].grade;
    }
    averageGrade /= grades.length;
    this.pageHeader.updateAverage(averageGrade);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  getGrades() {
    $.ajax({
      headers: {"X-Access-Token": "NU4SdBUb"},
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'GET',
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
  createGrade(name, course, grade) {
    $.ajax({
      headers: { "X-Access-Token": "NU4SdBUb" },
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'POST',
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
}
