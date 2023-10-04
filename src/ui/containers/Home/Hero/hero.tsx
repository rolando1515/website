import { RightArrow } from 'ui/components/Icons';
import { Style } from './styles';

export function Hero() {
  return (
    <Style.Container>
      <span>Hey, I'm</span>
      <h1>Rolando Labrador</h1>
      <p>
        Welcome to my personal website. 
      </p>
      <button>
         <RightArrow />
      </button>
    </Style.Container>
  );
}
