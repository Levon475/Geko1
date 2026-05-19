import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Ֆունկցիա լեզուն փոխելու համար
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginBottom: '20px', textAlign: 'right' }}>
      <button 
        onClick={() => changeLanguage('hy')} 
        style={{ marginRight: '10px', fontWeight: i18n.language === 'hy' ? 'bold' : 'normal' }}
      >
        HY
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        style={{ fontWeight: i18n.language === 'en' ? 'bold' : 'normal' }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;