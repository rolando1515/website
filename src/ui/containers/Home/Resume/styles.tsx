import styled from 'styled-components';

export const Style = {
  Container: styled.section`
    width: var(--width);
    max-width: var(--max-width);
    height: auto;
    display: flex;
    padding: 100px 0;
    height: 100px;

    h2 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 25px;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 50px;
      background-color: white;
      border-radius: 4px;
      box-shadow: 0px 2px 4px #201f1f inset;
      color: #201f1f;
    }
  `,
};
