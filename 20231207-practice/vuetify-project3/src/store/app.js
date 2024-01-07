// Utilities
// pinia 獨立於元件以外的地方
import { defineStore } from "pinia";

// defineStore (資料名稱)
export const useAppStore = defineStore("app", {
  // state 保存哪些資料
  state: () => ({
    number: 0,
  }),
  // action:{}  =>有哪些修改資料的function
  actions: {
    plus() {
      this.number++;
    },
    minus() {
      this.number--;
    },
  },
  // getters:{} => 有哪些取資料的function，將資料透過運算之後再傳出去，像computer
  getters: {
    square() {
      // Math.pow(this.number,2) 次方(誰,次方數)
      return Math.pow(this.number, 2);
    },
  },
});
