import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },

  {
    title: 'Feedback',
    path: '/feedback',
    icon: icon('ic_feedback'),
  }, 
  {
    title: 'Notification',
    path: '/notifications',
    icon: icon('ic_notification'),
  }, 
  {
    title: 'View Feedbacks',
    path: '/viewfeedback',
    icon: icon('ic_notification_chat'),
  }, 
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  }, 
];

export default navConfig;
