import { scrollIntoView } from "seamless-scroll-polyfill";
import { Typography } from "@ht6/react-ui";
import { ElementType, useEffect, useRef, useState } from "react";
import cx from 'classnames';
import LeftArrow from '../../../images/left-arrow.svg';
import RightArrow from '../../../images/right-arrow.svg';
import { root, controls, control, items, item, image, title, content, label, activeItem } from './Slides.module.scss';

export interface SlidesProps {
  slides: {
    image: string;
    title: string;
    content: string;
    name: string;
    role: string;
  }[];
  headingLevel: ElementType<any>;
}

const scrollBehaviour: ScrollIntoViewOptions = {
  behavior: 'auto',
  block: 'nearest',
  inline: 'center',
};

function Slides({ slides, headingLevel }: SlidesProps) {
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [ active, setActive ] = useState(0);
  const onLoad = useRef(true);

  useEffect(() => {
    const handler = () => {
      if (!slideRefs.current[active]) return;
      scrollIntoView(slideRefs.current[active]!, scrollBehaviour);
    };

    window.addEventListener('resize', handler, true);

    return () => {
      window.removeEventListener('resize', handler, true);
    }
  }, [ active ]);

  useEffect(() => {
    if (!slideRefs.current[active]) return;

    scrollIntoView(
      slideRefs.current[active]!,
      {
        behavior: onLoad.current ? 'auto' : 'smooth',
        block: 'nearest',
        inline: 'center',
      },
    );
    onLoad.current = false;
  }, [ active ]);

  return (
    <div className={root}>
      <div className={controls}>
        <button
          className={control}
          onClick={() => setActive(active - 1)}
          disabled={active === 0}
        >
          <LeftArrow width='22'/>
        </button>
        <button
          className={control}
          onClick={() => setActive(active + 1)}
          disabled={active === slides.length - 1}
        >
          <RightArrow width='22'/>
        </button>
      </div>
      <ul className={items}>
        <li className={item}/>
        {slides.map((slide, key) => (
          <li
            ref={el => slideRefs.current[key] = el}
            className={cx(item, key === active && activeItem)}
            key={key}
          >
            <img width='100' height='100' className={image} src={slide.image}/>
            <Typography className={title} textType='heading3' textColor='primary-1' as={headingLevel}>
              “{slide.title}”
            </Typography>
            <Typography className={content} textType='paragraph2' textColor='copy-dark' as='p'>
              {slide.content}
            </Typography>
            <p className={label}>
              —{' '}
              <Typography textType='heading4' textColor='primary-3' as='span'>
                {slide.name},{' '}
              </Typography>
              <Typography textType='subheading' textColor='primary-3' as='span'>
                {slide.role}
              </Typography>
            </p>
          </li>
        ))}
        <li className={item}/>
      </ul>
    </div>
  );
}

export default Slides;