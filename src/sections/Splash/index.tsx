import { Typography } from '@ht6/react-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { FaArrowDown } from '@react-icons/all-files/fa/FaArrowDown';
import cx from 'classnames';
import PageSection from '../../components/PageSection';
import InputButton from '../../components/InputButton';
import Highlight from '../../components/Highlight';
import Socials from '../../components/Socials';
import IconButton from '../../components/IconButton';
import VCarousel from './VCarousel/VCarousel';
import {
  container,
  content,
  backdrop,
  carousel,
  text,
  title,
  banner,
  aside,
  socials,
} from './Splash.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { ApiService, ApiServiceError } from '../../utils';

const query = graphql`
  query SplashQuery {
    allSite {
      nodes {
        siteMetadata {
          event {
            start
            end
          }
          socials {
            link
            type
          }
        }
      }
    }
  }
`;

const words = ['collaborate.', 'network.', 'win.', 'create a project.'];

function Splash() {
  const data = useStaticQuery<GatsbyTypes.SplashQueryQuery>(query);
  const startDate = new Date(data.allSite.nodes[0].siteMetadata!.event!.start!);
  const endDate = new Date(data.allSite.nodes[0].siteMetadata!.event!.end!);
  const isSameMonth = startDate.getMonth() === endDate.getMonth();
  const [email, setEmail] = useState('');

  const startFormat = new Intl.DateTimeFormat('en-CA', {
    month: 'long',
    day: 'numeric',
  });
  const endFormat = new Intl.DateTimeFormat('en-CA', {
    month: isSameMonth ? undefined : 'long',
    day: 'numeric',
  });

  return (
    <PageSection
      containerClassName={container}
      className={content}
      append={
        <StaticImage
          alt='Ficitional toronto landscape with CN tower'
          src='../../images/landing.png'
          className={backdrop}
          objectFit='cover'
          quality={100}
        />
      }
    >
      <Typography
        className={text}
        textColor='copy-dark'
        textType='heading3'
        as='p'
      >
        <Highlight highlightColor='primary-4'>
          {startFormat.format(startDate)} - {endFormat.format(endDate)} |
          In-person Event
        </Highlight>
      </Typography>
      <Typography
        className={cx(text, title)}
        textColor='primary-3'
        textType='heading1'
        as='h1'
      >
        Hack the 6ix
      </Typography>
      <Typography
        className={banner}
        textColor='copy-dark'
        textType='heading2'
        as='div'
      >
        <p className={text}>We hack to</p>
        <VCarousel className={carousel} items={words} />
      </Typography>
      <Typography className={aside} textType='heading4' as='p'>
        Recieve the latest updates about applications in your inbox!
      </Typography>
      <InputButton
        onSubmit={async (e) => {
          try {
            const { response } = ApiService.subscribe(
              { email },
              'splash-section--notify',
              'reset'
            );
            toast.success(await response);
          } catch (err) {
            switch ((err as any).name) {
              case 'AbortError':
                // Dont worry about it
                break;
              case 'ApiServiceError':
                toast.error((err as ApiServiceError).getHumanError());
                console.error(err);
                break;
              default:
                toast.error('Unexpected error. Please try again later');
                console.error(err);
                break;
            }
          }
        }}
        inputProps={{
          type: 'email',
          required: true,
          value: email,
          onChange: (e) => setEmail(e.currentTarget.value),
        }}
        buttonText={<span className={title}>Notify Me</span>}
        label='Enter Your Email'
        name='email'
      />
      <Socials
        className={socials}
        baseColor='primary-3'
        activeColor='primary-4'
        gap='1rem'
      />
      <IconButton
        icon={FaArrowDown}
        label='Learn More'
        href='#about'
        as='a'
      />
    </PageSection>
  );
}

export default Splash;
