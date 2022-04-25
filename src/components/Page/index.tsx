import { StyleProvider } from '@ht6/react-ui';
import { ReactNode } from 'react';
import './Page.module.scss';

export interface PageProps {
  children: ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <StyleProvider>
      {children}
    </StyleProvider>
  );
}

export default Page;