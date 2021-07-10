import {
  Typography, Grid, Button, TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Autocomplete } from '@material-ui/lab';
import { useState } from 'react';
import ConvertResult from '../convert-result/convert-result'
import { getFromStorage } from '../../utils';
import { getConvertedCurrencyList } from '../../api/api';
import { baseCurrencyList } from '../../mock/currency';

function Convertor() {
  const baseCurrency = getFromStorage()
  const { t } = useTranslation();

  const [amount, setAmount] = useState(0) // Convertable amount
  const [currencyType, setCurrencyType] = useState('') // Currency type on which we will convert
  const [convertValue, setConvertValue] = useState(null) // Final amount

  const onAmountChange = (evt) => {
    setAmount(evt.target.value)
    setConvertValue(null)
  }

  const onCurrencyTypeChange = (currType) => {
    if (currType) {
      setConvertValue(null)
      setCurrencyType(currType) // Type of currency RUB
    }
  }

  const onConvertAmount = (evt) => {
    evt.preventDefault()
    if (amount && currencyType) {
      getConvertedCurrencyList(amount, baseCurrency, currencyType).then((data) => {
        setConvertValue(Math.ceil(data.result))
      })
    }
  }

  const convertResult = `${amount} ${baseCurrency} = ${convertValue} ${currencyType}`
  return (
    <div style={{ paddingTop: '30px' }}>
        <Grid container justify="center" spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h5"> {t('Convertor')} </Typography>
            </Grid>
            <Grid item xs={2} spacing={5}>
                <TextField
                  placeholder={t('Please add amount')}
                  label={`${t('Amount in')}`}
                  variant="outlined"
                  onChange={onAmountChange}
                />
            </Grid>

            <Grid item xs={2}>
              <Autocomplete
                options={ baseCurrencyList }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={`${t('Currency type')}`}
                    variant="outlined" />
                )}
                onChange={(evt, value) => onCurrencyTypeChange(value)}
              />
            </Grid>

            <Grid item xs={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={onConvertAmount}>{`${t('Convert')}`}
              </Button>
            </Grid>
        </Grid>
      {
        convertValue && <ConvertResult result={convertResult} />
      }
    </div>
  );
}

export default Convertor;
