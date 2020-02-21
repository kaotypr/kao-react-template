import localStorage from 'helper/localStorage';

import * as serviceWorker from './serviceWorker';

const initiate = () => {
  if (process.env.NODE_ENV === 'production') serviceWorker.register();
  const {
    initiated,
    notification,
  } = localStorage;

  const initAll = () => {
    // clear localStorage if no initiated key in localStorage
    window.localStorage.clear();
    // mark as initiated
    initiated.initItem();
    // init default notification key
    notification.initItem();
  };

  if (!initiated.getItem()) {
    initAll();
  } else {
    const resetLSDate = new Date(process.env.REACT_APP_RESET_LS);
    if (new Date().getTime() < resetLSDate) {
      initAll();
    } else {
      initiated.setObjectProperty('last_visit', new Date().getTime());
    }
  }
};

export default initiate;
