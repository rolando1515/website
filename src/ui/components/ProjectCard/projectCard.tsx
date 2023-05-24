import { Github, Link as LinkIcon } from '../Icons';
import { Style } from './styles';

export function ProjectCard({
  title,
  detail,
  image,
  link,
  github,
}: {
  title: string;
  detail: string;
  image: string;
  link: string;
  github: string;
}) {
  return (
    <Style.Container image={image}>
      <figure></figure>
      <hgroup>
        <h3>{title}</h3>
        <div>
          <a href={github} target="_blank">
            <Github />
          </a>
          <a href={link} target="_blank">
            <LinkIcon />
          </a>
        </div>
      </hgroup>

      <p>{detail}</p>
    </Style.Container>
  );
}
