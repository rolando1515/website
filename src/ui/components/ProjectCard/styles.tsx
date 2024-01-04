import styled from 'styled-components';

export const Style = {
  Container: styled.article<{ image: string }>`
    width: 45%;
    height: 500px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }

    figure {
      width: 100%;
      height: 65%;
      border: 1px solid white;
      border-radius: 4px;
      background: ${({ image }) => `url(${image})`};
      background-position: top;
      background-size: cover;
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

    .projectImage {
      width: 100%; /* or any fixed value */
      height: 200px; /* or any fixed value */
      object-fit: cover;
    }
  `,
};
