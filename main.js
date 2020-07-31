var headerElement = document.querySelector("header");
var pageHeader = new PageHeader(headerElement);
var tableElement = document.getElementById("table");
var gradeTable = new GradeTable(tableElement);
var app = new App(gradeTable, pageHeader);
app.start();
