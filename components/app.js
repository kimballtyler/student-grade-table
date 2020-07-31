class App {
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
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
  }
}
