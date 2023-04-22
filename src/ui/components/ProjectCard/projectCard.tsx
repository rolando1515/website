import { Github, Link as LinkIcon } from '../Icons';
import { Style } from './styles';

export function ProjectCard() {
  return (
    <Style.Container>
      <figure></figure>
      <hgroup>
        <h3>Project Name</h3>
        <div>
          <Github />
          <LinkIcon />
        </div>
      </hgroup>
      <p>Project Name</p>
      <span>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat
      </span>
    </Style.Container>
  );
}
