import {
  AboutMe,
  FeaturedProjects,
  Hero,
  Resume,
  Technologies,
} from 'ui/containers/Home';
import { PageLayout } from 'ui/layouts/pageLayout';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <FeaturedProjects />
      <Technologies />
      <Resume />
      <AboutMe />
    </PageLayout>
  );
}
