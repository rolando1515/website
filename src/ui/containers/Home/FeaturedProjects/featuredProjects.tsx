import { ProjectCard } from 'ui/components';
import { Style } from './styles';

const project_data = [
  {
    title: ' Car Market place App',
    image: '/project_pictures/vetee.png',
    github: 'https://github.com/rolando1515/nextjs-ecommerce.git/',
    link: 'https://nextjs-ecommerce-eta-sandy.vercel.app/',
    detail:
      'This project is a Next.js e-commerce application that serves as a car buying and selling platform.The application allows users to browse, buy, and sell cars online.It utilizes a MongoDB database and Prisma ORM for efficient data management.The front-end is built with React and Next.js, while Tailwind CSS with DaisyUI is used for styling.For QA Cypress is used for end-to-end testing.',
  },
  {
    title: 'Vroom Stock App',
    image: '/project_pictures/vroomstockapp.png',
    github: 'https://github.com/rolando1515/vroomstockpriceapp',
    link: 'https://rolando1515-vroomstockpriceapp-myapp-s6gjuc.streamlit.app/',
    detail:
      'Python-based Stock Price Web Application. Using Streamlit and yfinance libraries, this app fetches company information and real-time stock prices for S&P 500 companies. With less than 50 lines of code.',
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


/*
  {
    title: 'To do list',
    image: '/project_pictures/taskList.png',
    github: 'https://github.com/rolando1515/To-do-list',
    link: 'https://to-do-list-r4qd645pj-rolando1515.vercel.app/',
    detail:
      'A simple to do list app made with HTML,CSS and JavaScript. Its fast, responsive, and uses local storage to keep data secure.',
  },



*/