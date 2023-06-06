import { ProjectCard } from 'ui/components';
import { Style } from './styles';

const project_data = [
  {
    title: 'Vroom Stock App',
    image: '/project_pictures/vroomstockapp.png',
    github: '',
    link: 'https://rolando1515-vroomstockpriceapp-myapp-s6gjuc.streamlit.app/',
    detail:
      'Python-based Stock Price Web Application. Using Streamlit and yfinance libraries, this app fetches company information and real-time stock prices for S&P 500 companies. With less than 50 lines of code.',
  },
  {
    title: 'To do list',
    image: '/project_pictures/taskList.png',
    github: '',
    link: 'https://to-do-list-r4qd645pj-rolando1515.vercel.app/',
    detail:
      'A simple to do list app made with HTML,CSS and JavaScript. Its fast, responsive, and uses local storage to keep data secure.',
  },
];

export function FeaturedProjects() {
  return (
    <Style.Container id="projects">
      <h2>FEATURED PROJECTS</h2>
      <div className="projects">
        {project_data.map(({ detail, title, image, link, github }) => (
          <ProjectCard
            key={title}
            detail={detail}
            title={title}
            image={image}
            link={link}
            github={github}
          />
        ))}
      </div>
    </Style.Container>
  );
}
