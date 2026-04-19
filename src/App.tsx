import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import CardsStack from './components/CardsStack/CardsStack';

export default function App() {
  const { t, i18n } = useTranslation();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const animate = () => {
      timeRef.current += 0.002; // Speed of animation
      const x = Math.sin(timeRef.current) * 10 + Math.sin(timeRef.current * 0.5) * 5; // Combine waves for spline-like motion
      const y = Math.cos(timeRef.current * 1.2) * 8 + Math.cos(timeRef.current * 0.3) * 3;
      setRotation({ x, y });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
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
