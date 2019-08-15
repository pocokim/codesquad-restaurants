import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import restauranstStore from '../../apis/restaurantsApi';

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

const RestaurantList = () => {

  const [restaurantsInfo, setRestaurantsInfo] = useState([]);
  
  const getRestaurants = async () => {
    const restaurantsJson = await restauranstStore.get('/stores?size=9');
    const randomRestaurants = restaurantsJson.data.stores;
    // const allRestaurantsInfo = restaurantsJson.body;
    setRestaurantsInfo(randomRestaurants);
  }
  
  useEffect(() => {
    getRestaurants();
  }, [])

  const total = restaurantsInfo.map( ({
      name,
      ratings,
      tags,
      id
    }) => {
      return (
        <Card key={id}>
          <Overlapped>
            <h1>{name}</h1>
          </Overlapped>
          <h2>{name}</h2>
          <p>별점: {ratings}</p>
          {/* {tags.map( tag => (<Span>{tag} </Span>) )} */}
        </Card>
      )
  })

  return (
    <Div>
      { restaurantsInfo ? total : '... loading'}
    </Div>
  )

  }

export default RestaurantList