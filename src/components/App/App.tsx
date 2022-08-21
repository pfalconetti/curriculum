import React from 'react';
import SimpleDonut from '../SimpleDonut/SimpleDonut';
import PrettyDonut from '../PrettyDonut/PrettyDonut';
import Sunburst from '../Sunburst/Sunburst';
import './App.scss';
import { useTranslation } from "react-i18next";

function App() {
  // Calling t and i18n method from useTranslation hook
  const { t, i18n } = useTranslation();

  // Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (e: any) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
        <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
          <option value="en" >English</option>
          <option value="fr" >Français</option>
        </select>
      </header>
      <div className="App-content">
        <div className="chart-wrapper">
          <SimpleDonut />
        </div>
        <div className="chart-wrapper">
          <h2>{t('professional experience')}</h2>
          <PrettyDonut />
        </div>
        <div className="chart-wrapper">
          <h2>{t('assignments')}</h2>
          <Sunburst />
        </div>
      </div>
      <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
