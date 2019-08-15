import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  margin-bottom: 30px;
  background-color: #e51e2b;
  box-shadow: 0 1px 0px black, 0 1px 1px black;
`

const Img = styled.img`
  background-image: url('${process.env.PUBLIC_URL}/photo/codesquad.png');
  background-size: 170px;
  background-repeat: no-repeat;
  width: 130px;
  height: 130px;
  border: none;
  margin-right: 10px;
`

const WebTitle = styled.h1`
  font-size: 130px;
  color: #ffffff;
  text-shadow: 8px 10px 2px black;
`

const Header = props => {
  return (
    <Div>
      <Img></Img>
      <WebTitle>배고파!!</WebTitle>
    </Div>
  )
}

export default Header;