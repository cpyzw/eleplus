import { defineStore } from "pinia";

interface User {
  token: string;
  name?: string;
}
export const userStateStore = defineStore("user", {
  state: (): User => ({
    token: "",
  }),
  getters: {
    getToken(state) {
      return state.token;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
  },
});
