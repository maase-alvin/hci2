import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useRouter } from 'src/routes/hooks';
import { UserView } from 'src/sections/user/view';
import { useAuth } from 'src/contexts/AuthProvider';
// ----------------------------------------------------------------------

export default function UserPage() {
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
        <title> User | Minimal UI </title>
      </Helmet>

      <UserView />
    </>
  );
}
