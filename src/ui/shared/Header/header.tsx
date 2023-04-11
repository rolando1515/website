import { ListFormat } from 'typescript';
import { Style } from './styles';

export function Header() {
  return (
    <Style.Container>
      <div className="header-content">
         <img src="/images/logo.svg" alt="logo" />
         <ul>
         <li>Projects</li>
         <li>Resume</li>
         <li>Contact</li>
         </ul>
       </div>
   
    </Style.Container>
  );
}

