/* eslint-disable no-console */
export const cError = (data, marker) => (marker ? console.error(`${marker}`, data) : console.error(data));

export const cLog = (data, marker) => (marker ? console.log(`${marker}`, data) : console.log(data));

export const cTable = (data, marker) => (marker ? console.table(`${marker}`, data) : console.table(data));
