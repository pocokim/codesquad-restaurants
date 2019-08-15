import React, { useState, useEffect } from "react";
import styled from "styled-components";
import restauranstStore from "../../apis/restaurantsApi";
import RestartantModal from "./RestartantModal";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// const Span = styled.span`
//   display: inline-block;
//   background-color: grey;
//   border-radius: 20px;
//   margin-right: 10px;
//   height: 25px;
//   width: 60px;
//   text-align: center;
//   padding-top: 3px;
// `;

const RestaurantList = () => {

  const [restaurantsInfo, setRestaurantsInfo] = useState([]);

  const getRestaurants = async () => {
    const restaurantsJson = await restauranstStore.get("/stores?size=9");
    const randomRestaurants = restaurantsJson.data.stores;
    setRestaurantsInfo(randomRestaurants);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const total = restaurantsInfo.map((restaurantsInfo) => {
    return <RestartantModal restaurantsInfo={restaurantsInfo}  />;
  });
  console.log("state에 넘겨받은 정보", restaurantsInfo);

  return (
  <Div>
    {restaurantsInfo ? total : "... loading"}
  </Div>
  );
};

export default RestaurantList;
