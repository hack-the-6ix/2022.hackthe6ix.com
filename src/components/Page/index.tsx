import { StyleProvider, Typography } from '@ht6/react-ui';
import { ReactNode } from 'react';
import { Toaster, ToastBar } from 'react-hot-toast';
import { toast } from './Page.module.scss';

export interface PageProps {
  children: ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <StyleProvider>
      {children}
      <Toaster
        position='bottom-center'
        
      >
        {t => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <div className={toast}>
                <span>
                  {icon}
                </span>
                <Typography textType='paragraph2' textWeight={600}>
                  {message}
                </Typography>
              </div>
            )}
          </ToastBar>
        )}
      </Toaster>
    </StyleProvider>
  );
}

export default Page;
