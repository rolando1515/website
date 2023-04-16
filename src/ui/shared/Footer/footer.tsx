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
          <li> 
          <svg width="20"
               height="20"
               viewBox="0 0 20 20" 
               fill="none" 
               xmlns="http://www.w3.org/2000/svg">
               className="githubIcon"
                <path d="M10 0C4.475 0 1.45954e-06 4.475 1.45954e-06 10C-0.00113276 12.0993 0.658815 14.1456 1.88622 15.8487C3.11362 17.5517 4.84615 18.8251 6.838 19.488C7.338 19.575 7.525 19.275 7.525 19.012C7.525 18.775 7.512 17.988 7.512 17.15C5 17.613 4.35 16.538 4.15 15.975C4.037 15.687 3.55 14.8 3.125 14.562C2.775 14.375 2.275 13.912 3.112 13.9C3.9 13.887 4.462 14.625 4.65 14.925C5.55 16.437 6.988 16.012 7.562 15.75C7.65 15.1 7.912 14.663 8.2 14.413C5.975 14.163 3.65 13.3 3.65 9.475C3.65 8.387 4.037 7.488 4.675 6.787C4.575 6.537 4.225 5.512 4.775 4.137C4.775 4.137 5.612 3.875 7.525 5.163C8.33906 4.93706 9.18017 4.82334 10.025 4.825C10.875 4.825 11.725 4.937 12.525 5.162C14.437 3.862 15.275 4.138 15.275 4.138C15.825 5.513 15.475 6.538 15.375 6.788C16.012 7.488 16.4 8.375 16.4 9.475C16.4 13.313 14.063 14.163 11.838 14.413C12.2 14.725 12.513 15.325 12.513 16.263C12.513 17.6 12.5 18.675 12.5 19.013C12.5 19.275 12.688 19.587 13.188 19.487C15.173 18.8168 16.8979 17.541 18.1199 15.8392C19.3419 14.1373 19.9994 12.0951 20 10C20 4.475 15.525 0 10 0Z" fill="#C4C4C4"/>
                </svg>      
            GitHub</li>
        </ul>
      </div>
    </Style.Container>
  );
}

// NOTE: You put the LinkedIn class on the list and not the SVG, causing it to overwrite previous stylings.
// i'm also adding the flex to the li now.
// Also added an example of targeting the SVG inside the link and changing the width.
