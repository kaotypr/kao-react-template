import localStorage from 'helper/localStorage';

import * as serviceWorker from './serviceWorker';

const initiate = () => {
  if (process.env.NODE_ENV === 'production') serviceWorker.register();
  const initiated = localStorage.getInitiated().isSet();

  if (!initiated) {
    window.localStorage.clear();
    localStorage.getInitiated().initItem();
  } else {
    localStorage.getInitiated().updateItem('last_visit', new Date().getTime());
  }
};

export default initiate;
