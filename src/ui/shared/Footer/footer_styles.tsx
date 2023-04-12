import styled from 'styled-components';

export const Style = {
    Container: styled.footer`
      position: absolute;
      bottom: 0;
      left:0;
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
        color: #FFFFFF;
      }
        
        .footer-contact {
            width: 86px;
            height: 22px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 22px;


text-transform: uppercase;

color: #FFFFFF;
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
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 48px;
  
  }
      
    `,
  };
  
  
