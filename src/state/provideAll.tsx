import React from 'react';

import UserProvider from './user/userState';

type ProviderType = {
  children: React.ReactElement | React.ReactElement[],
}

const Provider: React.FC<ProviderType> = ({ children }) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}

export default Provider;