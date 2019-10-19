export const API_URL = process.env.REACT_APP_API_URL;
export const FULL_URL = process.env.REACT_APP_FULL_URL;
export const APP_NAME = 'kao project - frontend skeleton';

export default {
  API: {
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    GOOGLE_SIGNIN: {
      TOKEN: `/auth/google/token?redirect_uri=${FULL_URL}`,
      URL: `/auth/google/url?redirect_uri=${FULL_URL}`,
    },
  },
};
