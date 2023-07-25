import { ExperienceCard } from 'ui/components/ExperienceCard/experienceCard';
import { Style } from './styles';

const experience_data = [
  {
    title: 'QA Engineer',
    employer_name: 'RBI / Popeyes ',
    responsibilities: [
      '•	Validated and verified fixes and enhancement done by the developing team.',
      '•	Conducted through smoke tests on software application to identify any critical issues, defects, or regressions. (Using TestRail.)',
      '•	Executed regressions tests according to the defined test plan, documenting and reporting any deviation or failures encountered during the testing process.',
      
    ],
    duration: 'May 2023 - July 2023',
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
    duration: 'Jan 2023 - May 2023',
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
    duration: 'Jun 2022 - Dec 2022',
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
