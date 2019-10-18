import React from 'react';

const nav = ({ publicRoutes }) => {
  const navRoutes = publicRoutes || [];
  return (
    <div>
      { navRoutes.map(route => (route.id ? (<i>{route.id}</i>) : null)) }
      public_nav_item
    </div>
  );
};

export default nav;
