import { Typography } from '@ht6/react-ui';
import Highlight from '../../components/Highlight';
import InputButton from '../../components/InputButton';
import PageSection from '../../components/PageSection';
import { container } from './Notify.module.scss';

function Notify() {
  return (
    <PageSection containerClassName={container}>
        <Typography
            textColor="primary-3"
            textType="heading2"
            as="h3"
        >
            Applications will&nbsp;
            <Highlight highlightColor="primary-4">open soon.</Highlight>
        </Typography>
        <Typography
            textColor="primary-3"
            textType="heading4"
            as="h4"
        >
            Keep me posted about the latest application updates!
        </Typography>
        <InputButton
            label="Enter your email"
            name="input"
            buttonText="NOTIFY ME"
        />
        <Typography
            textColor="primary-3"
            textType="paragraph1"
            as="p"
        >Got questions? Check out our FAQ section!</Typography>
    </PageSection>
  );
}

export default Notify;
