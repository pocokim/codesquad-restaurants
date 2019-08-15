import React from "react";

export default function MenuTable({restaurantInfo}) {
  return (
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
              {(restaurantInfo.totalScore / restaurantInfo.commentSize).toFixed(
                1
              )}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </React.Fragment>
  );
}
