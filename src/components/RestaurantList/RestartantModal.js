import React from "react";
import { Header, Image, Modal } from "semantic-ui-react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  padding: 40px;
  background: #fff;
  width: 280px;
  border-radius: 20px;
  box-shadow: 0 2px 3px black, 0 2px 10px black;
  margin-bottom: 30px;
`

const Overlapped = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 40px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 2;
  color: #ffffff;
  opacity: 1;
  background-color: black;
  &:hover {
    opacity: 0;
    transition: opacity .5s ease-out;
  }
`


const ModalModalExample = ({restaurantsInfo}) => {
  console.log("모달이 넘겨받은 정보",restaurantsInfo);
  return(
    <Modal
    trigger={
      <Card key={restaurantsInfo.id}>
        <Overlapped>
          <h1>{restaurantsInfo.name}</h1>
        </Overlapped>
        <h2>{restaurantsInfo.name}</h2>
        <p>별점: {restaurantsInfo.ratings}</p>
      </Card>
    }
  >
    <Modal.Header>{restaurantsInfo.name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src="/images/avatar/large/rachel.png" />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  );
}

export default ModalModalExample;
