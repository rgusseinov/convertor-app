import { baseCurrencyList } from './mock/currency'

export function addToStorage(item) {
  localStorage.setItem('baseitem', JSON.stringify(item))
}

export function getFromStorage() {
  if (!localStorage.getItem('baseitem')) {
    addToStorage(baseCurrencyList[0])
  }
  return JSON.parse(localStorage.getItem('baseitem'))
}

export function getCurrentDate() {
  const dateObject = new Date();
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const date = dateObject.getDate();

  return `${year}-${month < 10 ? `0${month}` : month}-${date}`;
}
