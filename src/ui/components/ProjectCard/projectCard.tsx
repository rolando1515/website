import { Github, Link as LinkIcon } from '../Icons';
import { Style } from './styles';

export function ProjectCard({
  title,
  detail,
  image,
}: {
  title: string;
  detail: string;
  image: string;
}) {
  return (
    <Style.Container image={image}>
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
