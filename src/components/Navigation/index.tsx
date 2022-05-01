import { StaticImage } from "gatsby-plugin-image";
import { useLocation } from '@reach/router';
import { Typography } from "@ht6/react-ui";
import cx from 'classnames';
import Link, { LinkProps } from '../Link';
import PageSection from "../PageSection";
import Logo from '../../images/logo.svg';
import { root, content, logo, logoSvg, linkItems, linkItem, linkItemActive, banner } from './Navigation.module.scss';

export interface NavigationProps {
  isActive?: (item: LinkProps, idx: number, items: LinkProps[]) => boolean;
  showMlhBanner?: boolean;
  links: LinkProps[];
  base?: string;
}

function Navigation({
  showMlhBanner,
  base = '/',
  isActive,
  links,
}: NavigationProps) {
  const location = useLocation();
  isActive = isActive ?? (item => location.pathname === item.to);

  return (
    <PageSection containerClassName={root} className={content} as='nav'>
      <Link className={logo} to={base} linkType='gatsby' linkStyle='pure'>
        <Logo className={logoSvg} />
        <Typography textType='heading3' textColor='primary-1'>
          Hack the 6ix
        </Typography>
      </Link>
      {links && (
        <ul className={linkItems}>
          {links.map((link, key) => {
            return (
              <Typography key={key} textType='paragraph2' textWeight={650} textColor='grey' as='li'>
                <Link {...link} linkStyle='pure' className={cx(
                  isActive!(link, key, links) && linkItemActive,
                  linkItem,
                )}/>
              </Typography>
            );
          })}
        </ul>
      )}
      {showMlhBanner && (
        <Link
          to="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=yellow"
          rel='noreferrer noopener'
          className={banner}
          linkType='anchor'
          linkStyle="pure"
          target="_blank"
        >
          <StaticImage
            alt="MLH 2022 Season Banner"
            src='../../images/mlh.png'
            placeholder='none'
            width={200}
          />
        </Link>
      )}
    </PageSection>
  );
}

export default Navigation;