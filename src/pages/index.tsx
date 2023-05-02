import {
  AboutMe,
  Experience,
  FeaturedProjects,
  Hero,
  Resume,
} from 'ui/containers/Home';
import { Experience1 } from 'ui/containers/Home/Experience/experience';
import { PageLayout } from 'ui/layouts/pageLayout';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <FeaturedProjects />
      <Experience />
      <Experience1 />
      <AboutMe />
    </PageLayout>
  );
}
// Insert compent if you want to use it later.
//<Resume />

// Technologies is used as resume.
