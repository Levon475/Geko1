import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import NotFound from './pages/NotFound';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <LanguageSwitcher />
        <h1>{t('title')}</h1>
        <hr />

        <Routes>
          <Route path="/" element={<Navigate to="/courses" />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 