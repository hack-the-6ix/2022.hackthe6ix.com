import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Typography } from '@ht6/react-ui';
import PageSection from '../../components/PageSection';
import { graphql, useStaticQuery } from 'gatsby';
import {
  heading,
  logo,
  logoContainer,
  sponsorsContainer,
} from './PastSponsors.module.scss';
import { CSSProperties } from 'react';

interface ISponsor {
  logoFilename: string;
  name: string;
  url: string;
  vOffset?: number; // Measured in rem
}

const pastSponsors: ISponsor[] = [
  {
    logoFilename: 'intact.png',
    name: 'Intact Financial Corporation',
    url: 'https://careers.intactfc.com/ca/en/students',
  },
  {
    logoFilename: 'accenture.png',
    name: 'Accenture',
    url: 'https://www.accenture.com/ca-en/careers/life-at-accenture/entry-level?src=PSEARCH&c=car_glb_entrylevelorstrgoogle_12156703&n=psgs_0421&gclid=CjwKCAjw8cCGBhB6EiwAgOReywCEcBvObA03o_U8xFKKBCYP-WAXlGXxtciro2HEqzgwWux-zG6TchoCNe8QAvD_BwE&gclsrc=aw.ds',
    vOffset: -1.5,
  },
  {
    logoFilename: 'bmo.png',
    name: 'Bank of Montreal',
    url: 'https://jobs.bmo.com/ca/en/students',
  },
  {
    logoFilename: 'rbc.png',
    name: 'Royal Bank of Canada',
    url: 'https://jobs.rbc.com/ca/en/students-graduates',
  },
  {
    logoFilename: 'scotiabank.png',
    name: 'Scotiabank',
    url: 'https://www.scotiabank.com/careers/en/careers/careers-students-and-new-grads.html',
  },
  {
    logoFilename: 'geotab.png',
    name: 'Geotab',
    url: 'https://www.geotab.com/',
  },
  {
    logoFilename: 'cockroach.png',
    name: 'Cockroach Labs',
    url: 'https://www.cockroachlabs.com/',
  },
  {
    logoFilename: 'otpp.png',
    name: "Ontario Teachers' Pension Plan",
    url: 'https://www.otpp.com/en-ca/careers/',
  },
  {
    logoFilename: 'rotman.png',
    name: 'Rotman School of Management - University of Toronto',
    url: 'https://rotman.utoronto.ca/',
  },
  {
    logoFilename: 'sketch.png',
    name: 'Sketch',
    url: 'https://www.sketch.com/about-us/#press',
  },
  {
    logoFilename: 'stickermule.png',
    name: 'Sticker Mule',
    url: 'https://www.stickermule.com/',
  },
  {
    logoFilename: 'echoar.png',
    name: 'EchoAR',
    url: 'https://www.echo3d.co/',
  },
  {
    logoFilename: 'fdm.png',
    name: 'FDM',
    url: 'https://apply.fdmgroup.com/?chkCategory=1&chkCategory=3&lstRegion=10',
    vOffset: -1.25,
  },
];

const query = graphql`
  query PastSponsorsSectionQuery {
    allFile(filter: { relativeDirectory: { eq: "past-sponsors" } }) {
      nodes {
        base
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

function Sponsor({
  sponsor,
  img,
}: {
  sponsor: ISponsor;
  img: IGatsbyImageData;
}) {
  return (
    <div className={logoContainer}>
      <a href={sponsor.url} target='_blank'>
        <GatsbyImage
          className={logo}
          image={img}
          alt={`${sponsor.name} Logo`}
          style={
            {
              '--offset': sponsor.vOffset,
            } as CSSProperties
          }
        />
      </a>
    </div>
  );
}

function PastSponsors() {
  const data = useStaticQuery<GatsbyTypes.PastSponsorsSectionQueryQuery>(query);
  return (
    <PageSection id='sponsors'>
      <Typography
        className={heading}
        textType='heading2'
        textColor='primary-3'
        as='h2'
      >
        Past Sponsors
      </Typography>
      <ul className={sponsorsContainer}>
        {pastSponsors.map((sponsor) => {
          const fileNode = data.allFile.nodes.find(
            (node) => node.base === sponsor.logoFilename
          );
          return (
            <Sponsor
              sponsor={sponsor}
              img={fileNode?.childImageSharp?.gatsbyImageData!}
              key={sponsor.name}
            />
          );
        })}
      </ul>
    </PageSection>
  );
}

export default PastSponsors;
