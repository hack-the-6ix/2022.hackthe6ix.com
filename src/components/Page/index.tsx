import { StyleProvider, Typography } from '@ht6/react-ui';
import { Toaster, ToastBar } from 'react-hot-toast';
import { graphql, useStaticQuery } from 'gatsby';
import { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { toast } from './Page.module.scss';

export interface PageProps {
  children: ReactNode;
  title: string;
}

const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

function Page({ children, title }: PageProps) {
  const { site } = useStaticQuery<GatsbyTypes.PageQueryQuery>(query);

  return (
    <StyleProvider>
      {children}
      <Helmet
        titleTemplate={'%s | Hack The 6ix'}
        htmlAttributes={{ lang: 'en' }}
        meta={[
          {
            name: 'description',
            content: site?.siteMetadata?.description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: site?.siteMetadata?.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
        ]}
        title={title}
        defer={false}
      />
      <Toaster position='bottom-center'>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <div className={toast}>
                <span>{icon}</span>
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
