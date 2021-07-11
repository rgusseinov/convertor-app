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

const App: React.FC = () => {
  const [baseCurrency, setBaseCurrecny] = useState<string>(getFromStorage())

  const handleBaseCurrencyChange = (currency: string) => {
    if (currency) {
      setBaseCurrecny(currency)
      addToStorage(currency)
    }
  }

  return (
    <Container>
      <Header
        baseCurrency={baseCurrency}
        baseCurrencyList={baseCurrencyList}
        onBaseCurrencyChange={handleBaseCurrencyChange}
      />

      <Switch>
        <Route path="/" exact>
          <Convertor />
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
