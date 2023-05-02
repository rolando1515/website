import { Github, Link as LinkIcon } from '../Icons';
import { Style } from './styles';

export function ProjectCard({
  title,
  detail,
}: {
  title: string;
  detail: string;
}) {
  return (
    <Style.Container>
      <figure></figure>
      <hgroup>
        <h3>{title}</h3>
        <div>
          <Github />
          <LinkIcon />
        </div>
      </hgroup>

      <p>{detail}</p>
    </Style.Container>
  );
}
