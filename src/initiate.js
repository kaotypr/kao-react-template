import localStorage from 'helper/localStorage';

import * as serviceWorker from './serviceWorker';

const initiate = () => {
  if (process.env.NODE_ENV === 'production') serviceWorker.register();
  const initiated = localStorage.initiated.isSet();

  if (!initiated) {
    window.localStorage.clear();
    localStorage.initiated.initItem();
  } else {
    localStorage.initiated.setObjectProperty('last_visit', new Date().getTime());
  }
};

export default initiate;
