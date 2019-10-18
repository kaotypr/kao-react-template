import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => (
  <>
    <h2>Signup</h2>
    <Link to="/signin">Signin</Link>
  </>
);

export default memo(Signup);
