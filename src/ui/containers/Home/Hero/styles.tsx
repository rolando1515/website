import styled from 'styled-components';

export const Style = {
  Container: styled.main`
    width: var(--width);
    max-width: var(--max-width);
    height: calc(100vh - 123px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: calc(123px / 2);

    span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;

      @media (max-width: 768px) {
        margin-bottom: 25px;
      }
    }

    h1 {
      background: linear-gradient(
        89.81deg,
        #9845e8 -1.72%,
        #33d2ff 54.05%,
        #dd5789 99.78%
      );
      font-family: 'GTWalsheimPro-Black';
      font-weight: 400;
      font-size: 96px;
      line-height: 110px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      @media (max-width: 768px) {
        font-size: 45px;
        line-height: 105%;
      }
    }

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 24px;
      text-align: justify;
      color: #f0f0f0;
      margin: 25px 0;

      @media (max-width: 768px) {
        margin: 15px 0;
        font-size: 16px;
      }
    }

    button {
      background: none;
      width: max-content;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 24px;
      color: #ffffff;
      display: flex;
      align-items: center;

      svg {
        margin-left: 15px;
      }
    }
  `,
};
