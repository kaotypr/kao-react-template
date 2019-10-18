import {
  isString,
  isArray,
  isNumber,
  isObject,
} from 'helper/variable';

const vr = {
  status: false,
  message: 'Invalid data',
};

const equal = (base, param, baseName = 'base', paramName = 'param') => {
  if (base !== param) {
    vr.message = `${paramName} is not equal with ${baseName}`;
    return vr;
  }
  vr.status = true;
  vr.message = `${paramName} is equal with ${baseName}`;
  return vr;
};

const notEmpty = (value, name = 'data') => {
  vr.message = `${name} is empty`;
  if (isString(value)) {
    if (value !== '') {
      vr.status = true;
      vr.message = `${name} is not empty`;
      return vr;
    }
  }
  if (isObject(value)) {
    if (value !== {}) {
      vr.status = true;
      vr.message = `${name} is not empty`;
      return vr;
    }
  }
  if (isArray(value)) {
    if (value !== []) {
      vr.status = true;
      vr.message = `${name} is not empty`;
      return vr;
    }
  }
  if (isNumber(value)) {
    if (value !== 0) {
      vr.status = true;
      vr.message = `${name} is not empty`;
      return vr;
    }
  }
  return vr;
};

const email = value => {
  const pattern = /\S+@\S+\.\S+$/;
  if (pattern.test(String(value).toLowerCase()) || !value || value === '') {
    vr.status = true;
    vr.message = 'valid email';
    return vr;
  }
  vr.message = 'invalid email';
  return vr;
};

const emailsInString = value => {
  const nospace = String(value).replace(' ', '');
  const ok = (/^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}(?:[,;][A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4})*$/i.test(nospace));
  if (ok) {
    vr.status = true;
    vr.message = 'emails in string is valid';
    return vr;
  }
  vr.message = 'emails in string is not valid';
  return vr;
};

export default {
  email,
  emailsInString,
  equal,
  notEmpty,
};
