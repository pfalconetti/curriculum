import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import CardsStack from './components/CardsStack/CardsStack';

export default function App() {
  const { t, i18n } = useTranslation();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = (e.clientX - centerX) / centerX;
      const y = (e.clientY - centerY) / centerY;
      setRotation({ x: y * -10, y: x * 10 }); // Adjust sensitivity
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const switchLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div
      className="app-shell"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
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
