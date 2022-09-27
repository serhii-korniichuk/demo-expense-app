import { makeAutoObservable } from "mobx";

const errorStore = () => ({
  errors: [],
  createError(error) {
    const newErrorsArray = [...this.errors];

    newErrorsArray.push(error);
    this.errors = Array.from(new Set(newErrorsArray));
  },
  clearAllErrors() {
    this.errors && this.errors.length > 0 && (this.errors = []);
  },
  showError() {
    console.error(this.errors);
  },
});

export default makeAutoObservable(errorStore());
