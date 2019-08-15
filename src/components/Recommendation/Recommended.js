import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import restauranstStore from '../../apis/restaurantsApi';

const RecommendContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  width: 90%;
`

const H2 = styled.h2`
  margin-bottom: 20px;
`

const P = styled.p`
  margin: 0;
  font-weight: bold;
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

const Recommended = () => {

  const [restaurantsInfo, setRestaurantsInfo] = useState([]);
  
  const getRestaurants = async () => {
    const restaurantsJson = await restauranstStore.get('/stores/recommand');
    const randomRestaurants = restaurantsJson.data.stores;
    setRestaurantsInfo(randomRestaurants);
  }
  
  useEffect(() => {
    getRestaurants();
  }, [])

  const recommendation = restaurantsInfo.map( ({
    name,
    totalScore,
    commentSize,
    address,
    tel,
    id
  }) => {
    return (
      <Card key={id}>
        <H2>{name}</H2>
        <P>주소: {address}</P>
        <P>Tel: {tel}</P>
        <P>평점: {(totalScore/commentSize).toFixed(1) + ' / 5 점'}</P>
        {/* {tags.map( tag => (<Span>{tag} </Span>) )} */}
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
