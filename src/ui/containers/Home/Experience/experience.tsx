import { ExperienceCard } from 'ui/components/ExperienceCard/experienceCard';
import { Style } from './styles';

const experience_data = [
  {
    title: 'Junior QA Engineer',
    employer_name:'Termitek',
    responsibilities: [
      '•	Worked with Daisy UI for streamlined UI development.',
      '•	Work with cross-functional teams to ensure quality throughout the software development lifecycle.',
      '•	Executed manual cases and analyze results.',
      '•	Developed interactive applications using NextJS, TypeScript, HTML, and Tailwind.',
      '•	Carry out functional and regression testing.',
      '•	Managed databases with hands-on experience in MongoDB.',
    ],
    duration: '',
  },
  
  {
    title: 'QA Engineer',
    employer_name:'Treehouse-Strategy',
    responsibilities: [
      '•	Prepared comprehensive and well-structured test plans.',
      '•	Diagnosed, isolated and documented bugs encountered during testing.',
      '•	Work with cross-functional teams to ensure quality throughout the software development lifecycle.',
      '•	Carry out functional and regression testing.',
      '•	Created automated test scripts using Python3 and selenium.',
    ],
    duration: '',
  },
  {
    title: 'Software Engineer Intern',
    employer_name: 'STYLERE.CO',
    responsibilities: [
      '•	Developed, implemented and tested APIs using postman and Flask.',
      '•	Created databases and schemas using MySQL and SQL Alchemy library.',
      '•	Designed, developed and tested mobile applications using React and Flask framework.',
      '•	Diagnosed and fixed application issues.',
      '•	Created automated test cases using selenium.',
    ],
    duration: '',
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
