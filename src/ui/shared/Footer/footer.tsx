import { ListFormat } from 'typescript';
import { Style } from './footer_styles';

export function Footer() {
  return (
    <Style.Container>
      <div className="footer-content">
        <span className="footer-contact">CONTACT</span>
        <ul>
          <li>Send an email</li>
          <li>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="linkedinIcon"
            >
              <path
                d="M4.94043 2.00002C4.94016 2.53046 4.7292 3.03906 4.35394 3.41394C3.97868 3.78883 3.46986 3.99929 2.93943 3.99902C2.409 3.99876 1.90039 3.78779 1.52551 3.41253C1.15062 3.03727 0.940165 2.52846 0.94043 1.99802C0.940695 1.46759 1.15166 0.958988 1.52692 0.584103C1.90218 0.209218 2.411 -0.00124153 2.94143 -0.000976312C3.47186 -0.000711096 3.98047 0.210257 4.35535 0.585517C4.73024 0.960777 4.9407 1.46959 4.94043 2.00002V2.00002ZM5.00043 5.48002H1.00043V18H5.00043V5.48002ZM11.3204 5.48002H7.34043V18H11.2804V11.43C11.2804 7.77002 16.0504 7.43002 16.0504 11.43V18H20.0004V10.07C20.0004 3.90002 12.9404 4.13002 11.2804 7.16002L11.3204 5.48002V5.48002Z"
                fill="#C4C4C4"
              />
            </svg>
            LinkedIn
          </li>
          <li>GitHub</li>
        </ul>
      </div>
    </Style.Container>
  );
}

// NOTE: You put the LinkedIn class on the list and not the SVG, causing it to overwrite previous stylings.
// i'm also adding the flex to the li now.
// Also added an example of targeting the SVG inside the link and changing the width.
