import styled from 'styled-components';

export const Style = {
  Container: styled.footer`
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
    .footer-content {
      width: var(--width);
      max-width: var(--max-width);
      height: 100%;
      border: 1px #000000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #ffffff;
    }

    .footer-contact {
      width: 86px;
      height: 22px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      box-sizing: border-box;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    // The inline block is what makes it so the list items are next to each other.
    li {
      display: flex;
      margin-left: 30px;
      font-size: 12px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      border: 1px solid #c6c6c6;
      border-radius: 4px;
      box-sizing: border-box;
      text-transform: uppercase;
      text-align: center;
      padding: 5px 20px;
      align-items: center;

      svg {
        display: flex;
        /* height: 20px; */
        width: 15px;
        margin-right: 15px;
      }
    }
  `,
};

// Line height is the distance between the lines of text.
//margin-left: 30px; is the distance between the list items.
// for the Github Icons or any other icons you can use this website to get the SVG code:
//[You can right click and copy the SVG in Figma (pretty nice too).
//You can directly paste in your react code, create an SVG file for it or create a react element with it.
