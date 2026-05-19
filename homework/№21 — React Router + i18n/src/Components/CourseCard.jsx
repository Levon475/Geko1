import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CourseCard = ({ title, teacher, id }) => {
  const { t } = useTranslation();

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '10px', 
      borderRadius: '8px', 
      width: '250px',
      display: 'flex', 
      flexDirection: 'column', 
      gap: '12px',
      wordBreak: 'break-word',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ margin: 0, fontSize: '1.2rem', lineHeight: '1.4', color: '#333' }}>
        {title}
      </h3>
      <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.4', color: '#666' }}>
        <strong>{t('lecturer')}:</strong> {teacher}
      </p>
      <div style={{ marginTop: 'auto', paddingTop: '5px' }}>
        <Link to={`/courses/${id}`} style={{ fontWeight: 'bold', color: '#007bff', textDecoration: 'none' }}>
          {t('seeMore')}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;