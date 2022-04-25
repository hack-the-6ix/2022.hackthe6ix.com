import Page from "../components/Page";
import About from "../sections/About";
import Faq from "../sections/Faq";
import Notify from "../sections/Notify";
import PastSpeakers from "../sections/PastSpeakers";
import PastSponsors from "../sections/PastSponsors";
import Question from "../sections/Question";
import Splash from "../sections/Splash";
import Why from "../sections/Why";

function IndexPage() {
  return (
    <Page>
      <Splash/>
      <About/>
      <Why/>
      <PastSponsors/>
      <PastSpeakers/>
      <Notify/>
      <Faq/>
      <Question/>
    </Page>
  );
}

export default IndexPage
