import { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number] & { route: string };

export const AvailableTimeSlot = [
  {
    label: '6.00 - 7.00',
    value: '6am',
  },
  {
    label: '7.00 - 8.00',
    value: '7am',
  },
  {
    label: '8.00 - 9.00',
    value: '8am',
  },
  {
    label: '9.00 - 10.00',
    value: '9am',
  },
  {
    label: '10.00 - 11.00',
    value: '10am',
  },
  {
    label: '11.00 - 12.00',
    value: '11am',
  },
  {
    label: '12.00 - 13.00',
    value: '12pm',
  },
  {
    label: '13.00 - 14.00',
    value: '13pm',
  },
  {
    label: '14.00 - 15.00',
    value: '14pm',
  },
  {
    label: '15.00 - 16.00',
    value: '15pm',
  },
  {
    label: '16.00 - 17.00',
    value: '16pm',
  },
  {
    label: '17.00 - 18.00',
    value: '17pm',
  },
];

export const subjects = [
  // Class 7
  { label: 'Bangla', value: 'bangla-Class 7', grade: 'Class 7', key: 1 },
  { label: 'English', value: 'english-Class 7', grade: 'Class 7', key: 2 },
  {
    label: 'Mathematics',
    value: 'mathematics-Class 7',
    grade: 'Class 7',
    key: 3,
  },
  { label: 'Science', value: 'science-Class 7', grade: 'Class 7', key: 4 },
  {
    label: 'Social Science',
    value: 'social_science-Class 7',
    grade: 'Class 7',
    key: 5,
  },
  {
    label: 'Islamic Studies',
    value: 'islamic_studies-Class 7',
    grade: 'Class 7',
    key: 6,
  },
  { label: 'ICT', value: 'ict-Class 7', grade: 'Class 7', key: 7 },

  // Class 8
  { label: 'Bangla', value: 'bangla-Class 8', grade: 'Class 8', key: 8 },
  { label: 'English', value: 'english-Class 8', grade: 'Class 8', key: 9 },
  {
    label: 'Mathematics',
    value: 'mathematics-Class 8',
    grade: 'Class 8',
    key: 10,
  },
  { label: 'Science', value: 'science-Class 8', grade: 'Class 8', key: 11 },
  {
    label: 'Social Science',
    value: 'social_science-Class 8',
    grade: 'Class 8',
    key: 12,
  },
  {
    label: 'Islamic Studies',
    value: 'islamic_studies-Class 8',
    grade: 'Class 8',
    key: 13,
  },
  { label: 'ICT', value: 'ict-Class 8', grade: 'Class 8', key: 14 },

  // Class 9 (Science, Commerce & Humanities)
  { label: 'Bangla', value: 'bangla-Class 9', grade: 'Class 9', key: 15 },
  { label: 'English', value: 'english-Class 9', grade: 'Class 9', key: 16 },
  {
    label: 'Mathematics',
    value: 'mathematics-Class 9',
    grade: 'Class 9',
    key: 17,
  },
  { label: 'Physics', value: 'physics-Class 9', grade: 'Class 9', key: 18 },
  { label: 'Chemistry', value: 'chemistry-Class 9', grade: 'Class 9', key: 19 },
  { label: 'Biology', value: 'biology-Class 9', grade: 'Class 9', key: 20 },
  {
    label: 'Higher Mathematics',
    value: 'higher_mathematics-Class 9',
    grade: 'Class 9',
    key: 21,
  },
  {
    label: 'Accounting',
    value: 'accounting-Class 9',
    grade: 'Class 9',
    key: 22,
  },
  {
    label: 'Business Studies',
    value: 'business_studies-Class 9',
    grade: 'Class 9',
    key: 23,
  },
  { label: 'Economics', value: 'economics-Class 9', grade: 'Class 9', key: 24 },
  {
    label: 'Islamic Studies',
    value: 'islamic_studies-Class 9',
    grade: 'Class 9',
    key: 25,
  },
  { label: 'ICT', value: 'ict-Class 9', grade: 'Class 9', key: 26 },

  // Class 10 (Science, Commerce & Humanities)
  { label: 'Bangla', value: 'bangla-Class 10', grade: 'Class 10', key: 27 },
  { label: 'English', value: 'english-Class 10', grade: 'Class 10', key: 28 },
  {
    label: 'Mathematics',
    value: 'mathematics-Class 10',
    grade: 'Class 10',
    key: 29,
  },
  { label: 'Physics', value: 'physics-Class 10', grade: 'Class 10', key: 30 },
  {
    label: 'Chemistry',
    value: 'chemistry-Class 10',
    grade: 'Class 10',
    key: 31,
  },
  { label: 'Biology', value: 'biology-Class 10', grade: 'Class 10', key: 32 },
  {
    label: 'Higher Mathematics',
    value: 'higher_mathematics-Class 10',
    grade: 'Class 10',
    key: 33,
  },
  {
    label: 'Accounting',
    value: 'accounting-Class 10',
    grade: 'Class 10',
    key: 34,
  },
  {
    label: 'Business Studies',
    value: 'business_studies-Class 10',
    grade: 'Class 10',
    key: 35,
  },
  {
    label: 'Economics',
    value: 'economics-Class 10',
    grade: 'Class 10',
    key: 36,
  },
  {
    label: 'Islamic Studies',
    value: 'islamic_studies-Class 10',
    grade: 'Class 10',
    key: 37,
  },
  { label: 'ICT', value: 'ict-Class 10', grade: 'Class 10', key: 38 },
];

export const ExpertiseSubject = [
  { label: 'Bangla', value: 'bangla' },
  { label: 'English', value: 'english' },
  { label: 'Mathematics', value: 'mathematics' },
  { label: 'Science', value: 'science' },
  { label: 'Social Science', value: 'social_science' },
  { label: 'Islamic Studies', value: 'islamic_studies' },
  { label: 'ICT', value: 'ict' },
  { label: 'Physics', value: 'physics' },
  { label: 'Chemistry', value: 'chemistry' },
  { label: 'Biology', value: 'biology' },
  { label: 'Higher Mathematics', value: 'higher_mathematics' },
  { label: 'Accounting', value: 'accounting' },
  { label: 'Business Studies', value: 'business_studies' },
  { label: 'Economics', value: 'economics' },
];

export const ClassList = [
  {
    label: 'Class 7',
    value: 'Class 7',
    key: 1,
  },
  {
    label: 'Class 8',
    value: 'Class 8',
    key: 2,
  },
  {
    label: 'Class 9',
    value: 'Class 9',
    key: 3,
  },
  {
    label: 'Class 10',
    value: 'Class 10',
    key: 4,
  },
];

export const AuthenticatedNavRoutes: MenuItem[] = [
  {
    label: 'Home',
    key: '/',
    route: '/',
  },
  {
    label: 'About Us',
    key: 'about',
    route: '/about',
  },
  {
    label: 'Tutors',
    key: 'tutors',
    route: '/tutors',
  },
  {
    label: 'FAQ',
    key: 'faq',
    route: '/faq',
  },
  {
    label: 'Blog',
    key: 'blog',
    route: '/blog',
  },
  {
    label: 'Dashboard',
    key: 'dashboard',
    route: '/dashboard',
  },
  {
    label: 'Logout',
    key: 'logout',
    route: '/',
  },
];

export const basicNavRoutes: MenuItem[] = [
  {
    label: 'Home',
    key: '/',
    route: '/',
  },
  {
    label: 'About Us',
    key: 'about',
    route: '/about',
  },
  {
    label: 'Tutors',
    key: 'tutors',
    route: '/tutors',
  },
  {
    label: 'FAQ',
    key: 'faq',
    route: '/faq',
  },
  {
    label: 'Blog',
    key: 'blog',
    route: '/blog',
  },
  {
    label: 'Login',
    key: 'login',
    route: '/login',
  },
  {
    label: 'Register',
    key: 'register',
    route: '/register',
  },
];

export const locations = [
  { value: 'dhanmondi', label: 'Dhanmondi' },
  { value: 'gulshan', label: 'Gulshan' },
  { value: 'banani', label: 'Banani' },
  { value: 'bashundhara', label: 'Bashundhara' },
  { value: 'baridhara', label: 'Baridhara' },
  { value: 'uttara', label: 'Uttara' },
  { value: 'mirpur', label: 'Mirpur' },
  { value: 'pallabi', label: 'Pallabi' },
  { value: 'mohammadpur', label: 'Mohammadpur' },
  { value: 'tejgaon', label: 'Tejgaon' },
  { value: 'khilgaon', label: 'Khilgaon' },
  { value: 'badda', label: 'Badda' },
  { value: 'rampura', label: 'Rampura' },
  { value: 'shyamoli', label: 'Shyamoli' },
  { value: 'motijheel', label: 'Motijheel' },
  { value: 'paltan', label: 'Paltan' },
  { value: 'jatrabari', label: 'Jatrabari' },
  { value: 'sutrapur', label: 'Sutrapur' },
  { value: 'wary', label: 'Wari' },
  { value: 'lalbagh', label: 'Lalbagh' },
];
