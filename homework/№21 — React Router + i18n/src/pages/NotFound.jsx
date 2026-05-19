import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <h2>{t('notFound')}</h2>
      <p>{t('notFoundDesc')}</p>
      <Link to="/courses">{t('backToCourses')}</Link>
    </div>
  );
};

export default NotFound;