import { makeAutoObservable } from "mobx";

// store for notifications
const createNotifyStore = () => ({
  messages: [], // success messages
  createMessage(message) {
    const newMessagesArray = [...this.messages];

    newMessagesArray.push(message);
    this.messages = Array.from(new Set(newMessagesArray)); // to avoid duplicates
  },
  clearAllMessages() {
    this.messages && this.messages.length > 0 && (this.messages = []);
  },
});

export default makeAutoObservable(createNotifyStore());
