import {
  AppBar, Toolbar, Typography, TextField, Grid,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom'
import classes from './header.module.css'

function Header({ baseCurrency, baseCurrencyList, onBaseCurrencyChange }) {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <AppBar position="static" color="default" elevation={1} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Grid container alignItems="center">
        <Grid item xs={8}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}> {t('Brand')}  </Typography>
        </Grid>
        <Grid item xs={2}>
          <NavLink to="/" className={(location.pathname === '/') ? classes.activeLink : classes.link }> {t('Convertor')} </NavLink>
        </Grid>
        <Grid item xs={2}>
          <NavLink to="/list" className={(location.pathname === '/list') ? classes.activeLink : classes.link }> {t('Exchange Rate')} </NavLink>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Autocomplete
            value={baseCurrency}
            defaultValue={baseCurrency}
            onChange={(evt, newValue) => onBaseCurrencyChange(newValue)}
            options={baseCurrencyList}
            renderInput={(params) => (
              <TextField {...params} label={`${t('Base currency')}`} margin="normal" variant="outlined" />
            )}
          />
      </Grid>
    </Toolbar>
    </AppBar>

  );
}

export default Header;
