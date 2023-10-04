import styled from 'styled-components';

export const Style = {
  Container: styled.section`
    width: var(--width);
    max-width: var(--max-width);
    height: auto;
    display: flex;
    flex-direction: column;
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
      text-align: left;
    }

    h3 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 22px;
      color: #ffffff;
    }
    h4 {
      width: 142px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #c4c4c4;
    }

    ul {
      list-style: none;
    }

    li {
      width: 852px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: #c4c4c4;
    }
  `,
};
