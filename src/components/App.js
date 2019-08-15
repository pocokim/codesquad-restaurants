import React from 'react';
import RestaurantList from './RestaurantList/RestaurantList';
import Header from './Header/Header';
import styled from 'styled-components';
import Recommended from './Recommendation/Recommended';
import FooterCont from './Footer/Footer';

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

  return (
    <Wrapper>
      <Header />
      <Todays>오늘의 베스트</Todays>
      <Recommended />
      <Todays>오늘의 랜덤봇</Todays>
      <Div>
        <RestaurantList />
      </Div>
      <FooterCont />
    </Wrapper>
  )
}

export default App;
