import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import { Colors } from '@ht6/react-ui/dist/styles';
import cx from 'classnames';
import * as styles from './Link.module.scss';
import { CSSProperties } from 'react';

const transformColor = (color: string) => color.replaceAll(/-.{1}/g, str => str.charAt(1).toUpperCase());

export interface LinkProps<T = {}> extends Omit<GatsbyLinkProps<T>, 'ref'> {
  linkType: 'anchor' | 'gatsby',
  linkStyle?: 'pure' | 'styled',
  linkColor?: Colors,
}

function Link<T>({ linkType, linkStyle, linkColor = 'primary-1', className, ...props }: LinkProps<T>) {
  const sharedProps = {
    className: cx(
      linkStyle === 'styled' && styles[transformColor(linkColor)],
      styles[linkStyle!],
      className,
    ),
    style: {
      '--link-color': `var(${linkColor})`,
    } as CSSProperties,
  };

  // More annoying as we remap some props
  if (linkType === 'anchor') {
    const { to, ..._props } = props; 
    return (
      <a
        {..._props}
        {...sharedProps}
        href={to}
      />
    );
  } else if (linkType === 'gatsby') {
    return (
      <GatsbyLink
        {...props}
        {...sharedProps}
      />
    );
  } else {
    return null;
  }
}

export default Link;