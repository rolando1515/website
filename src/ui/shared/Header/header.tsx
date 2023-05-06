import { ListFormat } from 'typescript';
import { Style } from './styles';

// this is the function for the header component.
// it returns the header component with the styles from the styles.tsx file.  (this is where you put the css styling)

export function Header() {
  return (
    <Style.Container>
      <div className="header-content">
        <span className="header-logo">R.L</span>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
        </ul>
      </div>
    </Style.Container>
  );
}
