import { Github, Link as LinkIcon } from '../Icons';
import { Style } from './styles';

export function ProjectCard() {
  return (
    <Style.Container>
      <figure></figure>
      <hgroup>
        <h3>Vroom Stock App</h3>
        <div>
          <Github />
          <LinkIcon />
        </div>
      </hgroup>
     
      <span>
      Python-based Stock Price Web Application. Using Streamlit and yfinance libraries, 
      this app fetches company information and real-time stock prices for S&P 500 companies.
      With less than 50 lines of code.
      </span>
    </Style.Container>
  );
}

export function ProjectCard1() {
  return (
    <Style.Container>
      <figure></figure>
      <hgroup>
        <h3>To do list</h3>
        <div>
          <Github />
          <LinkIcon />
        </div>
      </hgroup>
     
      <span>
      A simple to do list app made with HTML,CSS and JavaScript. 
      It's fast, responsive, and uses local storage to keep data secure.
      </span>
    </Style.Container>
  );
}