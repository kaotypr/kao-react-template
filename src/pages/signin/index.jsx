import React, { useEffect } from 'react';
import PublicLayout from 'layouts/public';

const Signin = ({ auth, history }) => {
  useEffect(() => {
    if (auth.authenticated) {
      history.push('/dashboard');
    }
  }, [auth.authenticated, history]);

  return (
    <PublicLayout>
      <h2>Signin Page</h2>
    </PublicLayout>
  );
};

export default Signin;
