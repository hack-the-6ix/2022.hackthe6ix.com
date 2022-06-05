type PastSponsorGroup = {
  size: number;
  gap: number;
  items: {
    name: string;
    fileName: string;
    url: string;
    offset?: number;
  }[];
};
const pastSponsors: PastSponsorGroup[] = [
  {
    size: 18.75,
    gap: 6.25,
    items: [
      {
        name: 'Intact',
        fileName: 'intact.png',
        url: 'https://careers.intactfc.com/ca/en/students',
      },
      {
        name: 'Accenture',
        fileName: 'accenture.png',
        url: 'https://www.accenture.com/ca-en/careers/life-at-accenture/entry-level',
        offset: -4,
      },
      {
        name: 'BMO',
        fileName: 'bmo.png',
        url: 'https://jobs.bmo.com/ca/en/students',
      },
    ],
  },
  {
    size: 16,
    gap: 3,
    items: [
      {
        name: 'RBC',
        fileName: 'rbc.png',
        url: 'https://jobs.rbc.com/ca/en/students-graduates',
      },
      {
        name: 'Scotiabank',
        fileName: 'scotiabank.png',
        url: 'https://www.scotiabank.com/careers/en/careers/careers-students-and-new-grads.html',
      },
      {
        name: 'Geotab',
        fileName: 'geotab.png',
        url: 'https://www.geotab.com',
      },
      {
        name: 'Cockroach Labs',
        fileName: 'cockroach-lab.png',
        url: 'https://www.cockroachlabs.com',
        offset: 6,
      },
      {
        name: 'Ontario Teachers Pension Plan',
        fileName: 'otpp.png',
        url: 'https://www.otpp.com/en-ca/careers',
        offset: -3,
      },
    ],
  },
  {
    size: 13.25,
    gap: 3,
    items: [
      {
        name: 'Rotman School of Management',
        fileName: 'rotman.png',
        url: 'https://rotman.utoronto.ca',
      },
      {
        name: 'Sketch',
        fileName: 'sketch.png',
        url: 'https://www.sketch.com/about-us/#press',
        offset: -2,
      },
      {
        name: 'Stickermule',
        fileName: 'stickermule.png',
        url: 'https://www.stickermule.com',
        offset: 2,
      },
      {
        name: 'EchoAR',
        fileName: 'echo-ar.png',
        url: 'https://www.echo3d.co',
      },
      {
        name: 'FDM',
        fileName: 'fdm.png',
        url: 'https://apply.fdmgroup.com/?chkCategory=1&chkCategory=3&lstRegion=10',
        offset: -5,
      },
    ],
  },
];

export default pastSponsors;
