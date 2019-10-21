import { getI18n } from 'react-i18next';

const validateResult = (status = true, message = '') => ({
  status,
  message,
});

export const equal = (base, param, basename = 'base', name = 'param') => {
  if (base !== param) {
    const message = getI18n().t('invalid.equal', {
      name,
      basename,
    });
    return validateResult(false, message);
  }
  return validateResult();
};

export const notEmpty = (value, name = 'data') => {
  validateResult.message = `${name} is empty`;
  if (value === '' || value === {} || value === [] || value === 0) {
    const message = getI18n().t('invalid.empty', {
      name,
    });
    return validateResult(false, message);
  }
  return validateResult();
};

export const email = value => {
  const pattern = /\S+@\S+\.\S+$/;
  if (!pattern.test(String(value).toLowerCase())) {
    const message = getI18n().t('invalid.default', {
      name: 'email',
    });
    return validateResult(false, message);
  }
  return validateResult();
};

export const emails = value => {
  const nospace = String(value).replace(' ', '');
  const ok = (/^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}(?:[,;][A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4})*$/i.test(nospace));
  if (!ok) {
    const message = getI18n().t('invalid.default', {
      name: 'emails',
    });
    return validateResult(false, message);
  }
  return validateResult();
};
