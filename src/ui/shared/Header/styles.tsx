import styled from 'styled-components';

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
    }
  `,
};
