import { makeAutoObservable } from "mobx";

// store for managing server and client errors
const errorStore = () => ({
  errors: [], // array of unique error messages
  errorToShow: "", // error to show on form
  createError(error) {
    const newErrorsArray = [...this.errors];
    newErrorsArray.push(error);
    this.errors = Array.from(new Set(newErrorsArray)); // to avoid duplicates
    this.errorToShow = error;
  },
  clearAllErrors() {
    this.errors && this.errors.length > 0 && (this.errors = []);
    this.errorToShow = "";
  },
  showError() {
    console.error(this.errors);
  },
});

export default makeAutoObservable(errorStore());
