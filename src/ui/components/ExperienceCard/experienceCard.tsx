import { Style } from './styles';

export function ExperienceCard({ exp }: any) {
  const { title, employer_name, responsibilities, duration } = exp;
  return (
    <Style.Container>
      <hgroup>
        <h3>{title}</h3>
        <p>{duration}</p>
      </hgroup>
      <h4>Company Name: {employer_name}</h4>
      <ul>
        {responsibilities.map((responsibility: any) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
    </Style.Container>
  );
}
