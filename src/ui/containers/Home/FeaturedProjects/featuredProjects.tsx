import { ProjectCard } from 'ui/components';
import { Style } from './styles';

const project_data = [
  {
    title: 'Vroom Stock App',
    image: 'vroom.webp',
    detail:
      'Python-based Stock Price Web Application. Using Streamlit and yfinance libraries, this app fetches company information and real-time stock prices for S&P 500 companies. With less than 50 lines of code.',
  },
  {
    title: 'To do list',
    image: 'task-list.webp',
    detail:
      'A simple to do list app made with HTML,CSS and JavaScript. Its fast, responsive, and uses local storage to keep data secure.',
  },
];

export function FeaturedProjects() {
  return (
    <Style.Container id="projects">
      <h2>FEATURED PROJECTS</h2>
      <div className="projects">
        {project_data.map(({ detail, title, image }) => (
          <ProjectCard
            key={title}
            detail={detail}
            title={title}
            image={image}
          />
        ))}
      </div>
    </Style.Container>
  );
}
