import {
  AboutMe,
  Experience,
  FeaturedProjects,
  Hero,
  Resume,
} from 'ui/containers/Home';
import { PageLayout } from 'ui/layouts/pageLayout';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <FeaturedProjects />
      <Experience />
      <AboutMe />
    </PageLayout>
  );
}
// Insert compent if you want to use it later.
//<Resume />

// Technologies is used as resume.
