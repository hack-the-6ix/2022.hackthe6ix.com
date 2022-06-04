import { useState } from 'react';
import PageSection from '../../components/PageSection';
import { Input, Button, Typography, InputProps } from '@ht6/react-ui';
import {
  content,
  title,
  text,
  form,
  long,
  btn,
} from './Question.module.scss';
import toast from 'react-hot-toast';
import cx from 'classnames';
import { ApiService, ApiServiceError } from '../../utils';

function Question() {
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onSubmit = async () => {
    try {
      const { response } = ApiService.ask(
        inputs,
        'question--ask',
        'reset'
      );
      toast.success(await response);
      setInputs({ name: '', email: '', message: '' });
    } catch (err) {
      switch ((err as any).name) {
        case 'AbortError':
          // Dont worry about it
          break;
        case 'ApiServiceError':
          toast.error((err as ApiServiceError).getHumanError());
          console.error(err);
          break;
        default:
          toast.error('Unexpected error. Please try again later');
          console.error(err);
          break;
      }
    }
    setIsSubmitting(false);
  };

  const inputProps = (label: string, name: keyof typeof inputs): InputProps => ({
    outlineColor: 'grey',
    placeholder: label,
    hideLabel: false,
    label,
    name,
    value: inputs[name],
    onChange: e => setInputs({ ...inputs, [name]: e.currentTarget.value }),
    required: true,
    status: undefined,
  });

  return (
    <PageSection className={content} id='question'>
      <div>
        <Typography className={title} textColor='primary-3' textType='heading2' as='h2'>
          Still have a question?
        </Typography>
        <Typography className={text} textColor='copy-dark' textType='paragraph1' as='p'>
          Send your question our way and we'll get back to you within 48 hrs!
        </Typography>
      </div>
      <form
        className={form}
        onSubmit={e => {
          e.preventDefault();
          setIsSubmitting(true);
          onSubmit();
          return false;
        }}
      >
        <Input {...inputProps('Name', 'name')} />
        <Input
          {...inputProps('Email', 'email')}
          type='email'
        />
        <Input
          {...inputProps('Enter your question here', 'message')}
          placeholder='Send us your questions here!'
          className={long}
          /* @ts-ignore */
          as='textarea'
        />
        <div className={cx(long, btn)}>
          <Button disabled={isSubmitting} type='submit'>
            SEND
          </Button>
        </div>
      </form>
    </PageSection>
  );
}

export default Question;
