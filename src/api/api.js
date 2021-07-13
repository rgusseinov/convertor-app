const URL = 'https://v1.nocodeapi.com/ruslan/cx/RgorThEpEQxhOckt/rates';

// https://v1.nocodeapi.com/ruslan/cx/RgorThEpEQxhOckt/rates?source=EUR
// https://v1.nocodeapi.com/ruslan/cx/RgorThEpEQxhOckt/rates/convert?amount=100&from=KZT&to=RUB

export async function getCurrentRateList(baseCurrency){
  const result = await fetch(`${URL}?source=${baseCurrency}`);
  if (!result.ok) return Promise.reject(`Что то пошло не так: ${result}`)
  return result.json();
}

export async function getConvertedCurrencyList(amount, baseCurrency, toCurrency) {
  const result = await fetch(`${URL}/convert?amount=${amount}&from=${baseCurrency}&to=${toCurrency}`);
  if (!result.ok) return Promise.reject(`Что то пошло не так: ${result}`);
  return result.json();  
}
