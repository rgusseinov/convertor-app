import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCurrentRateList } from '../../api/api';
import Loader from '../Loader/loader';
import classes from './currency-list.module.css'

interface CurrencyListProps {
  baseCurrency: string
}

const CurrencyList: React.FC<CurrencyListProps> = ({ baseCurrency }) => {
  
  const [currencyList, setCurrencyList] = useState<any>(null)
  const { t } = useTranslation();

  useEffect(() => {
    const updateCurrencyList = async () => {
      try {
        const data = await getCurrentRateList(baseCurrency);
        const ratesListToArray = Object.entries(data.rates)
        setCurrencyList(ratesListToArray)
      } catch (err){
        console.error(err)
      }
    }
    updateCurrencyList();
  }, [baseCurrency])

  return (
    <div className={classes.mt30}>
      <Typography variant="h4"> {t('Exchange Rate')} </Typography> <br/>
      {
        currencyList ? (
          <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>{t('Currency')}</TableCell>
                <TableCell>{t('Base currency')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                currencyList.map((row: Array<number>, index: number) => {
                  const currentRate: string = `${Math.ceil(row[1])} ${row[0]}`
                  return (
                    <TableRow key={index}>
                      <TableCell> { currentRate } </TableCell>
                      <TableCell> 1 {baseCurrency} </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
        ) : <Loader />
      }
    </div>
  );
}

export default CurrencyList;
