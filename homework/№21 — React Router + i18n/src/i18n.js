import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Multi Language Course Platform",
      allCourses: "All Courses",
      lecturer: "Lecturer",
      seeMore: "See more",
      courseDetails: "Course Details",
      goBack: "← Go back to list",
      courseNotFound: "Course not found",
      backToCourses: "Go to courses page"
    }
  },
  hy: {
    translation: {
      title: "Բազմալեզու Դասընթացների Հարթակ",
      allCourses: "Բոլոր դասընթացները",
      lecturer: "Դասախոս",
      seeMore: "Տեսնել ավելին",
      courseDetails: "Դասընթացի մանրամասներ",
      goBack: "← Ետ գնալ դեպի ցուցակ",
      courseNotFound: "Դասընթացը չի գտնվել",
      backToCourses: "Գնալ դասընթացների էջ"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'hy', // Սկզբնական լեզուն դնում ենք հայերեն
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;