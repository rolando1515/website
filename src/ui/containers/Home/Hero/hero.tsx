import { RightArrow } from 'ui/components/Icons';
import { Style } from './styles';

export function Hero() {
  return (
    <Style.Container>
      <span>Hey, I'm</span>
      <h1>Rolando Labrador</h1>
      <p>
        I'm a software engineer based in Toronto, Canada and also a
        communication and journalism student. I enjoy creating things that live
        on the internet, whether that be websites, applications, or anything in
        between. I have been freelancing for a year now while studying at the
        university and I've manage to gain a decent amount of experience and
        valuable knowledge from all different kinds of fields throughout my
        projects/work.
      </p>
      <button>
        Say hi <RightArrow />
      </button>
    </Style.Container>
  );
}
