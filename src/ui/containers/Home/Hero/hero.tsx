import { RightArrow } from 'ui/components/Icons';
import { Style } from './styles';

export function Hero() {
  return (
    <Style.Container>
      <span>Hey, I'm</span>
      <h1>Rolando Labrador</h1>
      <p>
        I'm a QA engineer based in South Florida......blah blah blah blah blah
      </p>
      <button>
         <RightArrow />
      </button>
    </Style.Container>
  );
}
