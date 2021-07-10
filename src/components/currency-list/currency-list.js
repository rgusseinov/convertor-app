import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCurrentRateList } from '../../api/api';
import Loader from '../loader';
import classes from './currency-list.module.css'

function CurrencyList({ baseCurrency }) {
  const [currencyList, setCurrencyList] = useState(null)
  const { t } = useTranslation();

  useEffect(() => {
    getCurrentRateList(baseCurrency).then((data) => {
      const ratesListToArray = Object.entries(data.rates)
      setCurrencyList(ratesListToArray)
    })
  }, [baseCurrency])

  return (
    <div style={ { marginTop: '30px' }}>
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
                currencyList.map((row, index) => {
                  const currentRate = `${Math.ceil(row[1])} ${row[0]}`
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
