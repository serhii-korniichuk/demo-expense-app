import { makeAutoObservable } from "mobx";

const createNotifyStore = () => ({
  messages: [],
  createMessage(error) {
    const newMessagesArray = [...this.errors];

    newMessagesArray.push(error);
    this.messages = Array.from(new Set(newMessagesArray));
  },
  clearAllMessages() {
    this.messages && this.messages.length > 0 && (this.messages = []);
  },
});

export default makeAutoObservable(createNotifyStore());
