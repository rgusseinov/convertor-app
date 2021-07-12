import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    convertor: {
      Convertor: 'Convertor',
      Brand: 'Free Convertor',
      'Exchange Rates': 'Exchange Rates',
      'Exchange Rate': 'Exchange Rate',
    },
  },
  ru: {
    translation: {
      Convertor: 'Конвертор',
      'Currency list': 'Курс обмена',
      'Currency lists': 'Курсы обмена',
      Currency: 'Валюта',
      'Please add amount': 'Пожалуйста, укажите сумму',
      'Amount in': 'Сумма в {{name}}',
      'Currency type': 'Тип валюты',
      'Base currency': 'Базовая валюта',
      Convert: 'Конвертировать',
      Result: 'Результат',
      Copyright: 'Все права защищены',
      Brand: 'Онлайн конвертор',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ru', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
