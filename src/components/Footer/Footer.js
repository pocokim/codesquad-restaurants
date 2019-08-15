import React from 'react'
import styled from 'styled-components';

const FooterCont = styled.footer`
  display: flex;
  align-items: center;
  background-color: #050b2b;
  color: #edeef1;
  height: 150px;
`

const Footer = () => {
  return (
    <FooterCont>
      <div>
        <p>
          Made by Jake, Doran, Wook and Q at Codesquad hackathon day.
        </p>
        <p>
          코드스쿼드의 점심봇 번영을 위하여...
        </p>
      </div>
    </FooterCont>
  )
}

export default Footer;