import { Button, ComponentWithAs, Typography, useClickOutside } from '@ht6/react-ui';
import { RiCloseLine } from '@react-icons/all-files/ri/RiCloseLine';
import { Speeds } from '@ht6/react-ui/dist/styles';
import { createPortal } from 'react-dom';
import { useRef } from 'react';
import cx from 'classnames';
import { useMountedTransitions } from '../../utils/useMountedTransitions';
import { animated, backdrop, box, heading, text, close, closeIcon } from './Popup.module.scss';

export type PopupProps = ComponentWithAs<{
  containerClassName?: string;
  description?: string;
  onClose?: () => void;
  target?: HTMLElement;
  className?: string;
  show?: boolean;
  label: string;
}>;

function Popup({
  target = document.body,
  as: Component = 'div',
  containerClassName,
  onClose = () => {},
  show = false,
  description,
  className,
  label,
  ...props
}: PopupProps) {
  const { mounted, shown } = useMountedTransitions(show, Speeds.SLOW);
  const boxRef = useRef<HTMLDivElement>(null);
  useClickOutside(boxRef as any, onClose, !shown);

  return createPortal(
    mounted && (
      <div
        className={cx(
          shown && animated,
          backdrop,
        )}
      >
        <div ref={boxRef} className={box}>
          <div className={heading}>
            <div>
              <Typography className={text} textType='heading3' textColor='primary-3' as='h2'>
                {label}
              </Typography>
              <Typography className={text} textType='paragraph3' textColor='grey' as='p'>
                {description}
              </Typography>
            </div>
            <button onClick={onClose} className={close}>
              <RiCloseLine className={closeIcon}/>
            </button>
          </div>
          <Component {...props}/>
        </div>
      </div>
    ),
    target,
  )
}

export default Popup;