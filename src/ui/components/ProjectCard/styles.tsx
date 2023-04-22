import styled from 'styled-components';

export const Style = {
  Container: styled.article`
    width: 45%;
    height: 500px;
    display: flex;
    flex-direction: column;

    figure {
      width: 100%;
      height: 65%;
      border: 1px solid white;
    }

    hgroup {
      margin: 15px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        width: 75px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    h3 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
    }

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: #c4c4c4;
      margin-bottom: 7.5px;
    }

    span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 24px;
      color: #6cace4;
    }
  `,
};