'use client';

import CustomAlertProvider from '@/components/common/CustomAlertProvider';
import LoginFirst from '@/components/common/LoginFirst';
import useFetchUser from '@/hooks/useGetUser';
import { Provider } from 'react-redux';
import { store } from './store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ChildProvider>
        <CustomAlertProvider>
          <LoginFirst /> {/* Moved inside AlertProvider */}
          {children}
        </CustomAlertProvider>
      </ChildProvider>
    </Provider>
  );
}

function ChildProvider({ children }: { children: React.ReactNode }) {
  // This hook now safely has access to the Redux Store
  useFetchUser(); 
  return <>{children}</>;
}
