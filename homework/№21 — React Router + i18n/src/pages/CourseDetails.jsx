import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const coursesData = [
  { id: '1', title: 'React JS-ի հիմունքներ', teacher: 'Արմեն Ալեքսանյան' },
  { id: '2', title: 'Advanced JavaScript', teacher: 'Անի Hakobyan' },
  { id: '3', title: 'Node.js և Backend', teacher: 'Կարեն Գրիգորյան' },
];

const CourseDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const course = coursesData.find((item) => item.id === id);

  if (!course) {
    return (
      <div>
        <h2>{t('courseNotFound')}</h2>
        <Link to="/courses">{t('backToCourses')}</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #333', borderRadius: '8px', marginTop: '20px' }}>
      <h2>{t('courseDetails')}</h2>
      <hr />
      <h3>{course.title}</h3>
      <p><strong>{t('lecturer')}՝</strong> {course.teacher}</p>
      <p>ID: {course.id}</p>
      
      <br />
      <Link to="/courses">{t('goBack')}</Link>
    </div>
  );
};

export default CourseDetails;