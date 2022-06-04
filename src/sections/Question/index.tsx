import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import isEmail from 'validator/lib/isEmail';
import PageSection from '../../components/PageSection';
import { Input, Button, Typography, InputLayoutProps } from '@ht6/react-ui';
import {
  content,
  inputContainer,
  sectionText,
  input,
  message,
  questionForm,
  leftButton,
  error,
} from './Question.module.scss';
import { contactMessage } from '../../utils/emailController';
import { AxiosError, AxiosResponse } from 'axios';
import cx from 'classnames';

function Question() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [nameStatus, setNameStatus] =
    useState<InputLayoutProps['status']>(undefined);
  const [emailStatus, setEmailStatus] =
    useState<InputLayoutProps['status']>(undefined);
  const [messageStatus, setMessageStatus] =
    useState<InputLayoutProps['status']>(undefined);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = inputs;
    if (validateForm()) {
      contactMessage(
        name.trim(),
        email.trim(),
        message.trim(),
        (err: AxiosError, message: AxiosResponse) => {
          if (err) {
            // Error
            setMessageStatus({
              state: 'error',
              text: 'An error occurred - please try again later',
            });
            setIsButtonDisabled(false);
          } else {
            // Success
            setNameStatus({
              state: 'success',
            });
            setEmailStatus({
              state: 'success',
            });
            setMessageStatus({
              state: 'success',
              text: 'Your message has been sent!',
            });
            setIsButtonDisabled(true);
          }
        }
      );
    } else {
      setIsButtonDisabled(true);
    }
  };

  const validateForm = (updateStatus: boolean = true) => {
    const { name, email, message } = inputs;
    return (
      validateName(name, updateStatus) &&
      validateEmail(email, updateStatus) &&
      validateMessage(message, updateStatus)
    );
  };

  const validateName = (name: string, updateStatus: boolean = true) => {
    if (name.trim().length == 0) {
      if (updateStatus) {
        setNameStatus({
          state: 'error',
          text: 'Please enter your name',
        });
      }
      return false;
    }
    setNameStatus(undefined);
    return true;
  };

  const validateEmail = (email: string, updateStatus: boolean = true) => {
    if (!isEmail(email)) {
      if (updateStatus) {
        setEmailStatus({
          state: 'error',
          text: 'Please enter a valid email',
        });
      }
      return false;
    }
    setEmailStatus(undefined);
    return true;
  };

  const validateMessage = (message: string, updateStatus: boolean = true) => {
    if (message.trim().length == 0) {
      if (updateStatus) {
        setMessageStatus({
          state: 'error',
          text: 'Please enter your message',
        });
      }
      return false;
    }
    setMessageStatus(undefined);
    return true;
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;
    if (id == 'name') {
      validateName(value);
    } else if (id == 'email') {
      validateEmail(value);
    } else if (id == 'message') {
      validateMessage(value);
    }
    setInputs((values) => ({ ...values, [id]: value }));
  };

  useEffect(() => {
    setIsButtonDisabled(!validateForm(false));
  }, [inputs]);

  return (
    <PageSection className={content} id='question'>
      <div className={sectionText}>
        <Typography textColor='primary-3' textType='heading2' as='h2'>
          Still have a question?
        </Typography>
        <Typography textColor='copy-dark' textType='paragraph1' as='p'>
          Send your question our way and we'll get back to you within 48 hrs!
        </Typography>
      </div>
      <form className={questionForm} onSubmit={onSubmit}>
        <div className={inputContainer}>
          <Input
            id='name'
            className={cx(input, nameStatus && error)}
            outlineColor='grey'
            hideLabel={false}
            status={nameStatus}
            label='Name'
            name='name'
            placeholder='Name'
            value={inputs.name}
            required
            onChange={onChange}
          />
          <Input
            id='email'
            type='email'
            className={cx(input, emailStatus && error)}
            outlineColor='grey'
            hideLabel={false}
            status={emailStatus}
            label='Email'
            name='email'
            placeholder='Email address'
            value={inputs.email}
            required
            onChange={onChange}
          />
          <Input
            id='message'
            className={cx(input, message, messageStatus && error)}
            as='textarea'
            outlineColor='grey'
            hideLabel={false}
            status={messageStatus}
            label='Enter your question here'
            name='question'
            placeholder='Send us your questions here!'
            value={inputs.message}
            required
            onChange={onChange}
          />
        </div>
        <Button
          className={leftButton}
          type='submit'
          disabled={isButtonDisabled}
        >
          SEND
        </Button>
      </form>
    </PageSection>
  );
}

export default Question;
