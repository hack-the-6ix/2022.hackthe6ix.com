import { Input, Button, InputLayoutProps } from '@ht6/react-ui';
import { FormHTMLAttributes, FormEvent, ChangeEvent, InputHTMLAttributes, ButtonHTMLAttributes } from 'react';
import cx from 'classnames';
import { container, field, button } from './InputButton.module.scss';

export interface InputButtonProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: InputLayoutProps['className'];
  label: InputLayoutProps['label'];
  name: InputLayoutProps['name'];
  status?: InputLayoutProps['status'];
  onSubmit: (event: FormEvent<HTMLFormElement>) => any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => any;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>;
}

function InputButton({
  className,
  label,
  name,
  status,
  onSubmit,
  onChange,
  inputProps,
  buttonProps,
  ...props
}: InputButtonProps) {
  return (
    <form className={cx(container, className)} onSubmit={onSubmit} {...props} >
      <Input
        outlineColor="primary-1"
        className={field}
        hideLabel
        status={status}
        label={label}
        name={name}
        onChange={onChange}
        {...inputProps}
      />
      <Button className={button} type="submit" {...buttonProps}>{name}</Button>
    </form>
  );
}

export default InputButton;