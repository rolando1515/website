import { ListFormat } from 'typescript';
import { Style } from './footer_styles';

export function Footer () {
    return (
      <Style.Container>
        <div className="footer-content">
          <span className="footer-contact">
            CONTACT
          </span>
          <ul>
            <li>Send an email</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>
      </Style.Container>
    );
  }