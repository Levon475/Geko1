import React from 'react';
import { useTranslation } from 'react-i18next';
import CourseCard from '../components/CourseCard';

const coursesData = [
  { id: '1', title: 'React JS-ի հիմունքներ', teacher: 'Արմեն Ալեքսանյան' },
  { id: '2', title: 'Advanced JavaScript', teacher: 'Անի Hakobyan' },
  { id: '3', title: 'Node.js և Backend', teacher: 'Կարեն Գրիգորյան' },
];

const Courses = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('allCourses')}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {coursesData.map((course) => (
          <CourseCard 
            key={course.id}
            id={course.id}
            title={course.title}
            teacher={course.teacher}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;