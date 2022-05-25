import { Colors } from '@ht6/react-ui/dist/styles';
import { PropsWithChildren } from 'react';
import * as styles from './Highlight.module.scss';
import { colorClassName } from '../../utils';
export interface HighlightProps {
  highlightColor: Colors;
}

export default function Highlight({
  highlightColor,
  children,
}: PropsWithChildren<HighlightProps>) {
  console.log(styles, colorClassName(highlightColor, 'highlight'));
  return (
    <span className={styles[colorClassName(highlightColor, 'highlight')]}>
      {children}
    </span>
  );
}
