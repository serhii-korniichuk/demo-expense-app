import { makeAutoObservable } from "mobx";

const createNotifyStore = () => ({
  messages: [],
  createMessage(message) {
    const newMessagesArray = [...this.messages];

    newMessagesArray.push(message);
    this.messages = Array.from(new Set(newMessagesArray));
  },
  clearAllMessages() {
    this.messages && this.messages.length > 0 && (this.messages = []);
  },
});

export default makeAutoObservable(createNotifyStore());
