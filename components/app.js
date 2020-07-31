class App {
  constructor(gradeTable) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.gradeTable = gradeTable;
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
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
