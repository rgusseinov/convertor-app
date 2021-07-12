const URL = 'https://v1.nocodeapi.com/ruslan/cx/RgorThEpEQxhOckt/rates';

// https://v1.nocodeapi.com/ruslan/cx/RgorThEpEQxhOckt/rates?source=EUR
// https://v1.nocodeapi.com/ruslan/cx/RgorThEpEQxhOckt/rates/convert?amount=100&from=KZT&to=RUB


export async function getCurrentRateList(baseCurrency){

  const result = await fetch(`${URL}?source=${baseCurrency}`);
  if (!result.ok) return Promise.reject(`Что то пошло не так: ${result}`)
  return result.json();

}

/* export function getCurrentRateList(baseCurrency) {
  try {
    const data = fetch(`${URL}?source=${baseCurrency}`);
    return data.then((result) => result.json());
  } catch (err) {
    throw new Error(`Что то пошло не так: ${err}`)
  }
}
 */
export function getConvertedCurrencyList(amount, baseCurrency, toCurrency) {
  try {
    const data = fetch(`${URL}/convert?amount=${amount}&from=${baseCurrency}&to=${toCurrency}`);
    return data.then((result) => result.json());
  } catch (err) {
    throw new Error(`Что то пошло не так: ${err}`)
  }
}

