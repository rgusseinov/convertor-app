import {
  Typography, Grid, Button, TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Autocomplete } from '@material-ui/lab';
import { ChangeEvent, useState } from 'react';
import ConvertResult from '../convert-result/convert-result'
import { getConvertedCurrencyList } from '../../api/api';
import { baseCurrencyList } from '../../mock/currency';
import { useEffect } from 'react';
import classes from './convertor.module.css';
import Loader from '../Loader/loader';

interface ConvertorProps {
  baseCurrency: string
}

function Convertor(props:ConvertorProps) {
  const { baseCurrency } = props
  const { t } = useTranslation();
  
  // i18n.changeLanguage('ru')
  const [amount, setAmount] = useState<number>(0) // Convertable amount
  const [currencyType, setCurrencyType] = useState<string | null>('') // Currency type on which we will convert
  const [convertValue, setConvertValue] = useState<number | null>(null) // Final amount  
  const [loading, setLoading] = useState<boolean>(false);

  const convertResult: string = `${amount} ${baseCurrency} = ${convertValue} ${currencyType}`

  const onAmountChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(evt.target.value))
  }

  useEffect(() => {
    setConvertValue(null)    
  }, [amount, currencyType])

  const onConvertAmount = async () => {
    if (amount && currencyType) {
      try {
        setLoading(true);
        const data = await getConvertedCurrencyList(amount, baseCurrency, currencyType);
        setConvertValue(Math.ceil(data.result));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }
  }

  return (
    <div className={classes.mt30}>
      <Grid container justify="center" spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5"> {t('Convertor')} </Typography>
        </Grid>        
        <Grid item xs={2} spacing={5}>
          <TextField
            placeholder={t('Please add amount')}
            label={`${t('Amount in', {name: baseCurrency})}`}
            variant="outlined"
            onChange={onAmountChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Autocomplete
            options={baseCurrencyList}
            renderInput={(params) => (
              <TextField
                {...params}
                label={`${t('Currency type')}`}
                variant="outlined" />
            )}
            onChange={(evt, value) => setCurrencyType(value)}
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
        loading ? ( <Loader /> ) : null 
      }

      { convertValue && <ConvertResult result={convertResult} /> }
    </div>
  );
}

export default Convertor;
