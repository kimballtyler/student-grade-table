class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit() {
    event.preventDefault(event);
    var formData = new FormData(event.target);
    var formName = formData.get("name");
    var formCourse = formData.get("course");
    var formGrade = formData.get("grade");
    this.createGrade(formName, formCourse, formGrade);
    event.target.reset();
  }
}
