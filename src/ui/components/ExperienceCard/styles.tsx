import styled from 'styled-components';

export const Style = {
  Container: styled.article`
    margin-bottom: 50px;

    @media (max-width: 768px) {
      ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
      li {
        font-size: 12px;
        max-width: 95%;
      }
    }
  `,
};
