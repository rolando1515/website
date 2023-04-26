import {
  AboutMe,
  FeaturedProjects,
  Hero,
  Resume,
  Technologies,
} from 'ui/containers/Home';
import { Technologies1 } from 'ui/containers/Home/Technologies/technologies';
import { PageLayout } from 'ui/layouts/pageLayout';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <FeaturedProjects />
      <Technologies/>
      <Technologies1/>
      
      <AboutMe />
    </PageLayout>
  );
}
// Insert compent if you want to use it later. 
 //<Resume />

 // Technologies is used as resume. 