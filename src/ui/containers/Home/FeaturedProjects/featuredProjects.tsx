import { ProjectCard } from 'ui/components';
import { Style } from './styles';

export function FeaturedProjects() {
  return (
    <Style.Container>
      <h2>FEATURED PROJECTS</h2>
      <div className="projects">
        <ProjectCard />
        <ProjectCard />
      </div>
    </Style.Container>
  );
}
