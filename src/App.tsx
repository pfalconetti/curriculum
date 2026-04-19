import { useTranslation } from 'react-i18next';
import CardsStack from './components/CardsStack/CardsStack';

export default function App() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
      </header>

      <section className="app-actions">
        <div className="language-buttons">
          <button type="button" onClick={() => switchLanguage('en')}>
            English
          </button>
          <button type="button" onClick={() => switchLanguage('fr')}>
            Français
          </button>
        </div>
        <p>
          {t('current_language')}: <strong>{i18n.language}</strong>
        </p>
      </section>

      <section className="app-cards">
        <CardsStack />
      </section>
    </div>
  );
}
