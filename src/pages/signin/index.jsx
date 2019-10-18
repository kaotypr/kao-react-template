import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => (
  <>
    <h2>Signin Page</h2>
    <Link to="signup">Signup</Link>
  </>
);

export default memo(Signin);
