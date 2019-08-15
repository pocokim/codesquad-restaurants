import React, { useEffect } from 'react';
import styled from 'styled-components';
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = styled.button`
  position: absolute;
  top: -50px;
  right: 110px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: all 300ms;
  margin-bottom: 10px;
  outline: none;

  &:hover{
    transform: rotate( 45deg ) scale( 1.1 );
    box-shadow: 0 2px 3px black, 0 2px 10px black;
  }

  &:active{
    background-color: black;
    color: white;
  }
`

const Span = styled.span`
  background-image: url('../../../public/photo/refresh-arrow.png');
  background-color: transparent;
  background-repeat: no-repeat;
`

const RefreshBtn = ({ clickHandler }) => {

  return (
    <Button onClick={clickHandler}>
      <FontAwesomeIcon icon={faRedo} size='2x' />
    </Button>
  )

}

export default RefreshBtn;