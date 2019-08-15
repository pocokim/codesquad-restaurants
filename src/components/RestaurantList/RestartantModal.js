import React, { useState, useEffect } from "react";
import { Header, Image, Modal, Table, Divider, Icon } from "semantic-ui-react";
import CommentExampleComment from "./CommentExampleComment";
import restauranstStore from "../../apis/restaurantsApi";

import styled from "styled-components";

const Card = styled.div`
  position: relative;
  padding: 40px;
  background: #fff;
  width: 280px;
  border-radius: 20px;
  box-shadow: 0 2px 3px black, 0 2px 10px black;
  margin-bottom: 30px;
`;

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
    transition: opacity 0.5s ease-out;
  }
`;

const ModalModalExample = ({ restaurantsInfo: { id } }) => {
  const [restaurantInfo, setRestaurantInfo] = useState({});

  const getRestaurant = async () => {
    const restaurantJson = await restauranstStore.get(`/stores/${id}`);
    const restaurantData = restaurantJson.data.store;
    setRestaurantInfo(restaurantData);
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  console.log("restaurantInfo", restaurantInfo);

  return (
    <Modal
      trigger={
        <Card key={restaurantInfo.id}>
          <Overlapped>
            <h1>{restaurantInfo.name}</h1>
          </Overlapped>
          <h2>{restaurantInfo.name}</h2>
          <p>
            별점:
            {(restaurantInfo.totalScore / restaurantInfo.commentSize).toFixed(
              1
            )}
          </p>
        </Card>
      }
    >
      <Modal.Header>{restaurantInfo.name}</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src={
            restaurantInfo.imageUrl
              ? "http://192.168.1.4:3000/" + restaurantInfo.imageUrl
              : "public/photo/codesquad.png"
          }
        />
        <Modal.Description>
          <React.Fragment>
            <Divider horizontal>
              <Header as="h4">
                {/* <Icon name="tag" /> */}
                Description
              </Header>
            </Divider>
            <p>{restaurantInfo.description}</p>

            <Divider horizontal>
              <Header as="h4">
                {/* <Icon name="bar chart" /> */}
                Specifications
              </Header>
            </Divider>

            <Table definition>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>메뉴</Table.Cell>
                  <Table.Cell>
                    {restaurantInfo.menus &&
                      restaurantInfo.menus.map(menu => menu.name + ",")}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>가격</Table.Cell>
                  <Table.Cell>
                    {restaurantInfo.menus &&
                      `${(
                        restaurantInfo.menus.reduce((accum, cur) => {
                          accum += cur.price;
                          return accum;
                        }, 0) / restaurantInfo.menus.length
                      ).toFixed(0)}원대`}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell width={4}>전화번호</Table.Cell>
                  <Table.Cell>{restaurantInfo.tel}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>주소</Table.Cell>
                  <Table.Cell>{restaurantInfo.address}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>별점</Table.Cell>
                  <Table.Cell>
                    {(
                      restaurantInfo.totalScore / restaurantInfo.commentSize
                    ).toFixed(1)}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </React.Fragment>
          <CommentExampleComment />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalModalExample;
