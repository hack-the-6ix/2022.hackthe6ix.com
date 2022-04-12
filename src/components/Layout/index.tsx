import { StyleProvider } from '@ht6/react-ui';
import { ReactNode } from 'react';
import './Layout.module.scss';

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <StyleProvider>
      {children}
    </StyleProvider>
  );
}

export default Layout;