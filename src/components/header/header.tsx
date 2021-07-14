import React from 'react';
import {
  AppBar, Toolbar, Typography, TextField, Grid,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './header.module.css';

interface HeaderProps {
  baseCurrency: string
  baseLanguage: string
  baseCurrencyList: Array<string>
  languages: Array<string>
  onBaseCurrencyChange(currency: any): void
  onLanguageChange(currency: any): void
}

const Header: React.FC<HeaderProps> = props => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <AppBar position="static" color="default" elevation={1} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Grid container alignItems="center" spacing={0}>
        <Grid item xs={7}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}> {t('Brand')}  </Typography>
        </Grid>
        <Grid item xs={2}>
          <NavLink to="/" className={(location.pathname === '/') ? classes.activeLink : classes.link }> {t('Convertor')} </NavLink>
        </Grid>
        <Grid item xs={2}>
          <NavLink to="/list" className={(location.pathname === '/list') ? classes.activeLink : classes.link }> {t('Exchange Rate')} </NavLink>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Autocomplete
            value={props.baseCurrency}
            defaultValue={props.baseCurrency}
            onChange={(evt, newValue) => props.onBaseCurrencyChange(newValue)}
            options={props.baseCurrencyList}
            renderInput={(params) => (
              <TextField {...params} label={`${t('Base currency')}`} margin="normal" variant="outlined" />
            )}
          />
      </Grid>
      &nbsp;&nbsp;
      <Grid item xs={2}>
        <Autocomplete
            value={props.baseLanguage}
            defaultValue={props.baseLanguage}
            onChange={(evt, newValue) => props.onLanguageChange(newValue)}
            options={props.languages}
            renderInput={(params) => (
              <TextField {...params} label={`${t('Base language')}`} margin="normal" variant="outlined" />
            )}
          />
      </Grid>
    </Toolbar>
    </AppBar>

  );
};

export default Header;
