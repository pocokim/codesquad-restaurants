import React, { useState, useEffect } from 'react';
import RestaurantList from './RestaurantList/RestaurantList';
import Header from './Header/Header';
import styled from 'styled-components';
import Recommended from './Recommendation/Recommended';
import FooterCont from './Footer/Footer';
import RefreshBtn from './RestaurantList/RefreshBtn'

const Wrapper = styled.div`
    /* background-color: #EACD85; */
`

const Div = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
`

const Todays = styled.p`
  box-shadow: 0 1px 1px black, 0 1px 1px black;
  background-color: #d4173f;
  font-size: 3rem;
  color: #feffff;
  width: 300px;
  text-shadow: 2px 2px 2px black;
  margin-top: 40px;
`

const App = () => {

  const [restaurantsInfo, setRestaurantsInfo] = useState([]);
  
  const getRestaurants = async () => {
    const restaurantsJson = await fetch('../../public/json/localData.json').then(data => data.json());
    const allRestaurantsInfo = restaurantsJson.body;
    setRestaurantsInfo(allRestaurantsInfo);
  }

  // const refreshHandler = (e) => {

  // }

  // const randomPick = (restaurantsInfo) => {
  //   const tempArr = [...Array(9)];
  //   const alreadyUsedId = [];
  //   tempArr.map( (info, idx)=> {
  //     let randomNum = createRandomNum({alreadyUsedId, idx, restaurantsInfo});
  //     const randomNumId = restaurantsInfo[randomNum].id;
  //     if(alreadyUsedId.includes(randomNumId)) 
  //     alreadyUsedId.push(info.id)
  //     return restaurantsInfo[randomNum];
  //   })
  // }
  
  // const createRandomNum = ({ idx, restaurantsInfo }) => {
  //   return Math.floor(Math.random() * restaurantsInfo.length - idx);
  // }

  useEffect(() => {
    getRestaurants();
  }, [])

  return (
    <Wrapper>
      <Header />
      <Todays>오늘의 베스트</Todays>
      <Recommended restaurantsInfo={restaurantsInfo}/>
      <Todays>오늘의 랜덤봇</Todays>
      <Div>
        {/* <RefreshBtn onClick={} /> */}
        <RestaurantList restaurantsInfo={restaurantsInfo}/>
      </Div>
      <FooterCont />
    </Wrapper>
  )
}

export default App;
