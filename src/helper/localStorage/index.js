import { DEFAULT_INITIATED } from 'constants/localstorage';

import LocalStorageEntry from './entry';

const STORAGE_KEYS = {
  initiated: 'kao-project.kao-fe.initiated',
  user: 'kao-project.kao-fe.user',
  token: 'kao-project.kao-fe.token',
  notification: 'kao-project.kao-fe.notification',
};

class LocalStorage {
  constructor() {
    this.initiated = new LocalStorageEntry(STORAGE_KEYS.initiated, DEFAULT_INITIATED);
    this.user = new LocalStorageEntry(STORAGE_KEYS.user);
    this.token = new LocalStorageEntry(STORAGE_KEYS.token);
    this.notification = new LocalStorageEntry(STORAGE_KEYS.notification);
  }

  getInitiated = () => this.initiated;

  getUser = () => this.user;

  getToken = () => this.token;

  getNotification = () => this.notification;
}

export default new LocalStorage();
