import styled from 'styled-components';

export const Style = {
  Container: styled.section`
    width: var(--width);
    max-width: var(--max-width);
    height: auto;
    display: flex;
    padding: 75px 0;

    h2 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 25px;
    }

    h3 {font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
      margin-bottom: 25px;
      margin-left: 200px;
    }


      .resume {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 316px;
  height: 29px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
}

.name {
  margin-top: 10px;
}

.contact {
  margin-top: 20px;
  text-align: center;
}

.section {
  margin-top: 20px;
  text-align: center;
}

.section h2 {
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 10px;
}

.section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.section ul li {
  margin-bottom: 10px;
}

.section ul li h3 {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5px;
}

.section ul li p {
  font-size: 14px;
  line-height: 17px;
  margin: 0;
  padding: 0;
}






    
  `,
};
