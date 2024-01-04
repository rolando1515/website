import styled from 'styled-components';

export const Style = {
  Container: styled.section`
    width: var(--width);
    max-width: var(--max-width);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 75px 0;

    h2 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 25px;
    }

    div.projects {
      display: flex;
      justify-content: space-between;



      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  `,
};
