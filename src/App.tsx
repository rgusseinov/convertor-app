import {
  Container,
} from '@material-ui/core';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Convertor from './components/convertor/convertor';
import CurrencyList from './components/currency-list/currency-list';
import { addToStorage, getFromStorage } from './utils';
import { baseCurrencyList } from './mock/currency';
import { useEffect } from 'react';

const App: React.FC = () => {
  const [baseCurrency, setBaseCurrecny] = useState<string>(getFromStorage())

  useEffect(() => {
    const saveCurrency = () => {
      if (!baseCurrency) return
      addToStorage(baseCurrency);
    };
    saveCurrency();
  }, [baseCurrency]);

  return (
    <Container>
      <Header
        baseCurrency={baseCurrency}
        baseCurrencyList={baseCurrencyList}
        onBaseCurrencyChange={setBaseCurrecny}
      />

      <Switch>
        <Route path="/" exact>
          <Convertor baseCurrency={baseCurrency} />
        </Route>
        <Route path="/list">
          <CurrencyList baseCurrency={baseCurrency} />
        </Route>
      </Switch>

      <Footer />
    </Container>
  );
}

export default App;
