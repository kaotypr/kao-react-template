import { cError } from 'helper/console';

import * as vtype from 'constant/type';

class LocalStorageEntry {
  constructor({ key = 'dump', initvalue = null, type = 'object' }) {
    this.key = key;
    this.defaultValue = initvalue;
    this.type = type;
  }

  isValidValue(value) {
    const nvalue = value || this.defaultValue;
    return ((typeof nvalue === this.type) && (nvalue !== null));
  }

  isSet() {
    return window.localStorage.getItem(this.key) !== vtype.UNDEFINED;
  }

  initItem(data) {
    try {
      let ndata = data || this.defaultValue;
      if (window.localStorage.getItem(this.key)) {
        throw new Error(`localStorage.${this.key} already exist`);
      }
      if (!this.isValidValue(ndata)) {
        throw new Error(`localstorage.${this.key} type must be ${this.type}`);
      }
      if (this.type === vtype.OBJECT) {
        const timemarkData = { ...ndata, init_at: new Date().getTime() };
        ndata = JSON.stringify(timemarkData);
      }
      window.localStorage.setItem(this.key, ndata);
    } catch (error) {
      cError(error);
    }
  }

  setItem(data) {
    try {
      let ndata = data;
      if (!this.isSet()) {
        throw new Error(`localstorage.${this.key} is not initialized`);
      }
      if (!this.isValidValue(ndata)) {
        throw new Error(`localstorage.${this.key} type must be ${this.type}`);
      }
      if (this.type === vtype.OBJECT) {
        ndata = JSON.stringify(data);
      }
      window.localStorage.setItem(this.key, ndata);
    } catch (error) {
      cError(error);
    }
  }

  setObjectProperty(key, value) {
    try {
      if (this.type !== vtype.OBJECT) {
        throw new Error(`Storage.${this.key} is not an object, you shouldn't use this method with this key`);
      }
      if (!this.isSet()) {
        throw new Error(`localStorage.${this.key} is not initialized`);
      }
      const currentItem = JSON.parse(this.getItem());
      currentItem[key] = value;
      window.localStorage.setItem(this.key, JSON.stringify(currentItem));
    } catch (error) {
      cError(error);
    }
  }

  getItem() {
    return window.localStorage.getItem(this.key);
  }

  removeItem() {
    window.localStorage.removeItem(this.key);
  }
}

export default LocalStorageEntry;
