import styled from 'styled-components';

// To make it easier go to figma and copy the styles from there. 
export const Style = {
  Container: styled.header`
    height: 123px;
    width: 100%;
    border: 1px solid red;
    display: grid;
    place-items: center;

    .header-content {
      width: var(--width);
      max-width: var(--max-width);
      height: 100%;
      border: 1px solid red;
   
      .header-logo {
      position: left;
      width: 86px;
      height: 64px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 53.0547px;
      line-height: 64px;
      color: #FFFFFF;
      }
    }
  `,
};

