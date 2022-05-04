import { Input, Button } from '@ht6/react-ui';
import { ReactNode } from 'react';
import cx from 'classnames';
import { container, field, button } from './InputButton.module.scss';

export interface InputButtonProps {
  className?: string;
  label: string;
  name: string;
  status?: {
    state: "success" | "error";
    text?: ReactNode;
  };
  onSubmit: (event: any) => any;
  onChange: (event: any) => any;
}

function InputButton({
  className,
  label,
  name,
  status,
  onSubmit,
  onChange
}: InputButtonProps) {
  return (
    <form onSubmit={onSubmit}>
      <div className={container}>
        <Input outlineColor="primary-1" className={cx(field, className)} hideLabel status={status} label={label} name={name} onChange={onChange}/>
        <Button className={cx(button, className)} type="submit">{name}</Button>
      </div>
    </form>
  );
}

export default InputButton;