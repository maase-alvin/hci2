import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useRouter } from 'src/routes/hooks';
import { FeedBackView } from 'src/sections/feedback';
import { useAuth } from 'src/contexts/AuthProvider';
// ----------------------------------------------------------------------

export default function FeedBackPage() {
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
        <title> FeedBack | Minimal UI </title>
      </Helmet>

      <FeedBackView />
    </>
  );
}