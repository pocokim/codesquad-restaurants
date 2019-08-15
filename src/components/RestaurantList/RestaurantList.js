import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

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

const Span = styled.span`
  display: inline-block;
  background-color: grey;
  border-radius: 20px;
  margin-right: 10px;
  height: 25px;
  width: 60px;
  text-align: center;
  padding-top: 3px;
`

const RestaurantList = ({ restaurantsInfo }) => {

  const total = restaurantsInfo.filter((_, idx) => {
    return idx < 9;
  }).map( ({
      name,
      ratings,
      tags,
      min_price,
      ID
    }) => {
      return (
        <Card key={ID}>
          <Overlapped>
            <h1>{name}</h1>
          </Overlapped>
          <h2>{name}</h2>
          <p>별점: {ratings}</p>
          <p>가격: {min_price}</p>
          {tags.map( tag => (<Span>{tag} </Span>) )}
        </Card>
      )
  })

  return (
    <Div>
      {total}
    </Div>
  )

  }

export default RestaurantList