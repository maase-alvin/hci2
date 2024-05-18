import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const NotificationPage = lazy(() => import('src/pages/notifications'));
export const CreateNewNotificationPage = lazy(() => import('src/pages/create-new-notification'));
export const CreateNewUserPage = lazy(() => import('src/pages/create-new-user'));
export const FeedbackPage = lazy(() => import('src/pages/notification-feedback'));
export const Feedback = lazy(() => import('src/pages/feedbacks'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'notifications', element: <NotificationPage /> },
        { path: 'createNotification', element: <CreateNewNotificationPage /> },
        { path: 'createUser', element: <CreateNewUserPage /> },
        {path: 'feedback', element: <FeedbackPage/> },
        {path: 'viewfeedback', element: <Feedback/> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
