export const isObject = variable => (!!variable) && (variable.constructor === Object);

export const isArray = variable => (!!variable) && (variable.constructor === Array);

export const isNumber = variable => (!!variable) && (variable.constructor === Number);

export const isString = variable => typeof variable === 'string' || variable instanceof String;

export const isUndefinedNull = variable => variable === null || variable === undefined;

export default {
  isArray,
  isObject,
  isString,
  isUndefinedNull,
};
