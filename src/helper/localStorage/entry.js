import { isObject, isUndefinedNull } from 'helper/variable';
import { cError } from 'helper/console';

class LocalStorageEntry {
  constructor(key, defaultValue) {
    this.key = key;
    this.defaultValue = defaultValue || null;
  }

  isSet() {
    return window.localStorage.getItem(this.key);
  }

  initItem(data) {
    try {
      if (window.localStorage.getItem(this.key)) {
        throw new Error(`localStorage.${this.key} already exist`);
      }
      if (!isUndefinedNull(data)) {
        if (!isObject(data)) {
          throw new Error('a localstorage item must be an object');
        }
        const timemarkData = { ...data, init_at: new Date().getTime() };
        const dataStringify = JSON.stringify(timemarkData);
        window.localStorage.setItem(this.key, dataStringify);
      } else {
        if (!isObject(this.defaultValue)) {
          throw new Error('a localstorage item must be an object');
        }
        const timemarkData = { ...this.defaultValue, init_at: new Date().getTime() };
        const dataStringify = JSON.stringify(timemarkData);
        window.localStorage.setItem(this.key, dataStringify);
      }
    } catch (error) {
      cError(error);
    }
  }

  setItem(data) {
    try {
      if (!isObject(data)) {
        throw new Error('a localstorage item must be an object');
      }
      const dataStringify = JSON.stringify(data);
      window.localStorage.setItem(this.key, dataStringify);
    } catch (error) {
      cError(error);
    }
  }

  updateItem(key, value) {
    try {
      const currentItem = JSON.parse(window.localStorage.getItem(this.key));
      if (currentItem) {
        if (currentItem[key]) {
          currentItem[key] = value;
        } else {
          throw new Error(`Storage ${this.key}[${key}] is not exist`);
        }
      } else {
        throw new Error(`Storage Item ${this.key} was not yet set`);
      }
      window.localStorage.setItem(this.key, JSON.stringify(currentItem));
    } catch (error) {
      cError(error);
    }
  }

  getItem() {
    const data = window.localStorage.getItem(this.key);
    return data ? JSON.parse(data) : this.defaultValue;
  }

  removeItem() {
    window.localStorage.removeItem(this.key);
  }
}

export default LocalStorageEntry;
