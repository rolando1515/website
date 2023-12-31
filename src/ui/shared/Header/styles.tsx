import styled from 'styled-components';

// practice css here https://developer.mozilla.org/en-US/docs/Web/CSS/position.
export const Style = {
  Container: styled.header`
    height: 123px;
    width: 100%;
    border: 1px #000000;
    display: grid;
    place-items: center;
    background-color: #000000;

    .flex-container {
      display: flex;
    }

    .flex-item {
      flex: 1;
      padding: 10px;
      border: 1px solid black;
    }
    .header-content {
      width: var(--width);
      max-width: var(--max-width);
      height: 100%;
      border: 1px #000000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #ffffff;
    }

    .header-logo {
      position: left;
      width: 86px;
      height: 64px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 25px;
      line-height: 64px;
      color: #ffffff;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    // The inline block is what makes it so the list items are next to each other.
    li {
      display: inline-block;
      margin-left: 60px;
      font-size: 16px;

      a {
        font-size: 16px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 48px;
      }

      @media (max-width: 768px) {
        margin-left: 15px;
        font-size: 12px;
      }
    }
  `,
};
