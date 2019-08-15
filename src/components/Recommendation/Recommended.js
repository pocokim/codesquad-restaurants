import React from 'react';
import styled from 'styled-components';

const RecommendContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  padding: 0;
`

const Card = styled.li`
  padding: 40px;
  background: #fff;
  width: 360px;
  border-radius: 20px;
  box-shadow: 0 2px 3px black, 0 2px 10px black;
  margin-bottom: 30px;
  transition: all 300ms;

  &:hover{
    transform: scale(1.1);
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
  font-weight: bold;
`

const Recommended = ({ restaurantsInfo }) => {

  const recommendation = restaurantsInfo.filter( ( _, idx) => {
    return idx < 3;
  }).map( ({
    name,
    ratings,
    tags,
    min_price,
    ID
  }) => {
    return (
      <Card key={ID}>
        <h2>{name}</h2>
        <p>별점: {ratings}</p>
        <p>가격: {min_price}</p>
        {tags.map( tag => (<Span>{tag} </Span>) )}
      </Card>
    )
  })

  return (
    <RecommendContainer>
      {recommendation}
    </RecommendContainer>
  )
}

export default Recommended;
