import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useRouter } from 'src/routes/hooks';
import { NotificationView } from 'src/sections/notifications';
import { useAuth } from 'src/contexts/AuthProvider';
// ----------------------------------------------------------------------

export default function NotificationPage() {
  const { user } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user,router]);
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      <NotificationView />
    </>
  );
}
