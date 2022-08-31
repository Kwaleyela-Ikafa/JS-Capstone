export default class Storage {
  static setItem(key, value) {
    localStorage.setItem(key, value);
  }

  static getItem(key) {
    return localStorage.getItem(key);
  }

  static setJson(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static getJson(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}