import { Input, Button, InputLayoutProps } from '@ht6/react-ui';
import { FormHTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import { container, field, button } from './InputButton.module.scss';

export interface InputButtonProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: InputLayoutProps['className'];
  label: InputLayoutProps['label'];
  name: InputLayoutProps['name'];
  status?: InputLayoutProps['status'];
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  buttonText: ReactNode;
}

function InputButton({
  className,
  label,
  name,
  status,
  inputProps,
  buttonProps,
  buttonText,
  ...props
}: InputButtonProps) {
  return (
    <form className={cx(container, className)} {...props} >
      <Input
        outlineColor="primary-1"
        className={field}
        hideLabel
        status={status}
        label={label}
        name={name}
        {...inputProps}
      />
      <Button className={button} type="submit" {...buttonProps}>
        {buttonText}
      </Button>
    </form>
  );
}

export default InputButton;