import { FaArrowUp } from '@react-icons/all-files/fa/FaArrowUp';
import type { IconType } from '@react-icons/all-files';
// import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from 'gatsby';
import { Typography } from '@ht6/react-ui';
import Link, { LinkProps } from '../Link';
import PageSection from '../PageSection';
import IconButton from '../IconButton';
import {
  root,
  row,
  text,
  iconItem,
  linkItem,
  link,
  icon,
  icons,
  items,
  floatingBtn,
} from './Footer.module.scss';

const links: Omit<LinkProps, 'linkType'>[] = [
  {
    children: '2021 Website',
    to: 'https://2021.hackthe6ix.com',
  },
  {
    children: '2020 Website',
    to: 'https://2020.hackthe6ix.com',
  },
  {
    children: 'Privacy Policy',
    to: 'http://cdn.hackthe6ix.com/privacy-policy.pdf',
  },
  {
    children: 'MLH Code of Conduct',
    to: 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
  },
];

const query = graphql`
  query FooterQuery {
    allSite {
      nodes {
        siteMetadata {
          socials {
            link
            type
          }
        }
      }
    }
  }
`;

const mediaIcons: { [type: string]: IconType } = {
  facebook: require('@react-icons/all-files/fa/FaFacebook').FaFacebook,
  instagram: require('@react-icons/all-files/fa/FaInstagram').FaInstagram,
  twitter: require('@react-icons/all-files/fa/FaTwitter').FaTwitter,
  linkedin: require('@react-icons/all-files/fa/FaLinkedin').FaLinkedin,
};

function Footer() {
  const { allSite } = useStaticQuery<GatsbyTypes.FooterQueryQuery>(query);
  return (
    <>
      {/* <StaticImage src='../../images/footer.png' alt='fictional artwork of toronto skyline'/> */}
      <IconButton
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={floatingBtn}
        label='Back to Top'
        icon={FaArrowUp}
      />
      <PageSection containerClassName={root} as='footer'>
        <div className={row}>
          <Typography
            className={text}
            textColor='primary-1'
            textType='heading2'
            as='p'
          >
            Hack the 6ix
          </Typography>
          <ul className={icons}>
            {allSite.nodes[0].siteMetadata!.socials!.map((social, key) => {
              const Icon = mediaIcons[social!.type!];
              return (
                <li className={iconItem} key={key}>
                  <Link
                    rel='noopener noreferrer'
                    className={link}
                    linkColor='primary-4'
                    linkStyle='styled'
                    to={social!.link!}
                    linkType='anchor'
                    target='_blank'
                  >
                    <Icon className={icon} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={row}>
          <Typography
            className={text}
            textColor='copy-light'
            textType='paragraph1'
          >
            © Copyright 2022 <strong>Hack the 6ix</strong> | Made with ♡ in
            Toronto
          </Typography>
          <Typography className={items} textType='subheading' as='ul'>
            {links.map((linkProps, key) => (
              <li className={linkItem} key={key}>
                <Link
                  {...linkProps}
                  rel='noopener noreferrer'
                  className={link}
                  linkColor='primary-4'
                  linkStyle='styled'
                  linkType='anchor'
                  target='_blank'
                />
              </li>
            ))}
          </Typography>
        </div>
      </PageSection>
    </>
  );
}

export default Footer;
