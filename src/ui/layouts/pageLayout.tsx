import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export function PageLayout({ children }: Props) {
  return <Style.Container>{children}</Style.Container>;
}

const Style = {
  Container: styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
