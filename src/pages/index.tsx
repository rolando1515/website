import Head from 'next/head';
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
    <>
      <Head>
        <title>Roland's Portfolio</title>
        <meta name="Welcome to Roland Labrador's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Hero />
        <FeaturedProjects />
        <Experience />

        <AboutMe />
      </PageLayout>
    </>
  );
}
// Insert compent if you want to use it later.
//<Resume />

// Technologies is used as resume.
