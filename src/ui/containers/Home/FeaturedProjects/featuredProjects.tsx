import { ProjectCard } from 'ui/components';
import { Style } from './styles';
import { ProjectCard1 } from 'ui/components/ProjectCard/projectCard';

export function FeaturedProjects() {
  return (
    <Style.Container>
      <h2>FEATURED PROJECTS</h2>
      <div className="projects">
        <ProjectCard />
        <ProjectCard1 />
      </div>
    </Style.Container>
  );
}
