import { DEFAULT_INITIATED } from 'constant/localstorage';

import * as vtype from 'constant/type';

import LocalStorageEntry from './entry';

const STORAGE_KEYS = {
  initiated: 'kao-project.kao-fe.initiated',
  user: 'kao-project.kao-fe.user',
  token: 'kao-project.kao-fe.token',
  notification: 'kao-project.kao-fe.notification',
};

class LocalStorage {
    // INITIATED
    initiatedStorage = new LocalStorageEntry({ key: STORAGE_KEYS.initiated, initvalue: DEFAULT_INITIATED });

    get initiated() {
      return this.initiatedStorage;
    }

    set initiated(val) {
      this.initiatedStorage.setItem(val);
    }

    // USER
    userStorage = new LocalStorageEntry({ key: STORAGE_KEYS.user });

    get user() {
      return this.userStorage;
    }

    set user(val) {
      this.userStorage.setItem(val);
    }

    // TOKEN
    tokenStorage = new LocalStorageEntry({ key: STORAGE_KEYS.token, type: vtype.STRING });

    get token() {
      return this.tokenStorage;
    }

    set token(val) {
      this.tokenStorage.setItem(val);
    }

    // NOTIFICATION
    notificationStorage = new LocalStorageEntry({ key: STORAGE_KEYS.notification });

    get notification() {
      return this.notificationStorage;
    }

    set notification(val) {
      this.notification.setItem(val);
    }
}

export default new LocalStorage();
