import { Button, Typography } from "@ht6/react-ui";
import PageSection from "../../components/PageSection";
import LaptopIcon from '../../images/why-section/laptop.svg';
import StarIcon from '../../images/why-section/star.svg';
import MoneyIcon from '../../images/why-section/money.svg';
import LightBlubIcon from '../../images/why-section/light-bulb.svg';
import { root, title, content, points, heading, text, icon, action } from './Why.module.scss';
import Slides from "./Slides";

const textItems = [
  {
    title: 'Want to land your next internship?',
    icon: LaptopIcon,
    content: 'Hackathons are an amazing place to meet mentors and industry professionals in the tech community. A pandemic won\'t stop us from fostering important conversations.',
  },
  {
    title: 'Looking to learn from experts?',
    icon: StarIcon,
    content: 'We value sharing knowledge and applying the things we learned. We\'ll host live workshops all weekend to give you the inspiration you need to get your project off the ground.',
  },
  {
    title: 'Want to be rewarded for your work?',
    icon: MoneyIcon,
    content: 'With $17K+ worth of prizes, there\'s something for everyone.',
    action: {
      disabled: true,
      children: 'Prizes TBA',
    }
  },
  {
    title: 'Need projects for your portfolio?',
    icon: LightBlubIcon,
    content: 'Complete a project worth showcasing within 48 hours from scratch and land your next job. Check out what our hackers created last year!',
    action: {
      children: '2021 Project Gallery',
      as: 'a' as any,
      href: 'https://hackthe6ix2021.devpost.com',
      rel: 'noreferrer noopener',
      target: '_blank',
    },
  },
];

const slides = [
  {
    image: 'https://c.tenor.com/BZ5A_dOU6q8AAAAC/cat-disco-vibing-dance-lady-heart.gif',
    title: 'Inspiring, challenging, and exciting.',
    content: 'Just a few words I would use to describe the past weekend I had at Hack the 6ix, all from the comfort of my own home! Working on our hackathon project remotely was definitely a unique experience and had its own set of challenges, but it was super rewarding and was an incredible learning opportunity.',
    name: 'Willson Wang',
    role: 'Hacker',
  },
  {
    image: 'https://c.tenor.com/BZ5A_dOU6q8AAAAC/cat-disco-vibing-dance-lady-heart.gif',
    title: 'So honored to chat about diversity & inclusion at @HackThe6ix today.',
    content: 'It\'s the most organized hackathon I\'ve ever been to (from what feels like millions), and it\'s all virtual! Well-moderated, great questions, diverse backgrounds+views of the panelists. Kudos to the HT6 team 👏🏻',
    name: 'Aaiman Aamir',
    role: 'Speaker',
  },
  {
    image: 'https://c.tenor.com/BZ5A_dOU6q8AAAAC/cat-disco-vibing-dance-lady-heart.gif',
    title: 'Thank you so much for this amazing opportunity.',
    content: 'I had such an amazing time this weekend. I really enjoyed my first hackathon and stepping out of my comfort zone and I am definitely looking to participate in more in the future.',
    name: 'Samson Hua',
    role: 'Hacker',
  },
  {
    image: 'https://c.tenor.com/BZ5A_dOU6q8AAAAC/cat-disco-vibing-dance-lady-heart.gif',
    title: 'It was so nice to guide students through their projects.',
    content: 'Whether it was simply providing feedback on project ideas, or helping hackers deploy apps, connect their React apps to backends, and build API\'s for their projects, I had a great time.',
    name: 'Sam Eskandar',
    role: 'Mentor',
  },
];

function Why() {
  return (
    <PageSection containerClassName={root}>
      <Typography className={title} textColor='primary-3' textType="heading2" as='h2'>
        Why Get Involved?
      </Typography>
      <div className={content}>
        <ul className={points}>
          {textItems.map((item, key) => (
            <li key={key}>
              <Typography className={heading} textColor='primary-3' textType="heading3" as='h3'>
                <span>{item.title}</span>
                <item.icon className={icon} />
              </Typography>
              <Typography className={text} textColor='copy-dark' textType="paragraph1" as='p'>
                {item.content}
              </Typography>
              {item.action && (
                <Button className={action} {...item.action}/>
              )}
            </li>
          ))}
        </ul>
        <Slides
          headingLevel='h3'
          slides={slides}
        />
      </div>
    </PageSection>
  );
}

export default Why;