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
import { useTranslation } from 'react-i18next';
import languages from './mock/languages';

const App: React.FC = () => {
  const [baseCurrency, setBaseCurrency] = useState<string>(getFromStorage())
  const [baseLanguage, setBaseLanguage] = useState<string>(languages[0])
  const { i18n } = useTranslation()

  useEffect(() => {
    const saveCurrency = () => {
      if (!baseCurrency) return
      addToStorage(baseCurrency);
    };
    saveCurrency();
    const languageToLower = baseLanguage.toLocaleLowerCase()
    i18n.changeLanguage(languageToLower);
  }, [baseCurrency, baseLanguage]);

  return (
    <Container>
      <Header
        baseCurrency={baseCurrency}
        baseCurrencyList={baseCurrencyList}
        baseLanguage={baseLanguage}
        languages={languages}
        onBaseCurrencyChange={setBaseCurrency}
        onLanguageChange={setBaseLanguage}
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
