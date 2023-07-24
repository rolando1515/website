import { ExperienceCard } from 'ui/components/ExperienceCard/experienceCard';
import { Style } from './styles';

const experience_data = [
  {
    title: 'Test Engineer',
    employer_name: '',
    responsibilities: [
      'Execute test cases manual cases and analyze results.',
      'Create logs to document testing phases and defects.',
      'Work with cross-functional teams to ensure quality throughout the software development lifecycle.',
      'Carry out functional and regression testing.',
    ],
    duration: 'Jan 2023 - Present',
  },
  {
    title: 'Backend Engineer Intern',
    employer_name: '',
    responsibilities: [
      'Execute test cases manual cases and analyze results.',
      'Create logs to document testing phases and defects.',
      'Work with cross-functional teams to ensure quality throughout the software development lifecycle.',
      'Carry out functional and regression testing.',
    ],
    duration: 'Jan 2023 - Present',
  },
  {
    title: 'Backend Engineer Intern',
    employer_name: '',
    responsibilities: [
      'Execute test cases manual cases and analyze results.',
      'Create logs to document testing phases and defects.',
      'Work with cross-functional teams to ensure quality throughout the software development lifecycle.',
      'Carry out functional and regression testing.',
    ],
    duration: 'Jan 2023 - Present',
  },
];

export function Experience() {
  return (
    <Style.Container id="experience">
      <h2>Experience</h2>
      <div className="experience-cards">
        {experience_data.map((exp) => (
          <ExperienceCard key={exp.title} exp={exp} />
        ))}
      </div>
    </Style.Container>
  );
}
