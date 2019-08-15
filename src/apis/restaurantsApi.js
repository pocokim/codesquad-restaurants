import axios from "axios";

// import RestaurantList from "../RestaurantList/RestaurantList";

export default axios.create({
  baseURL: 'http://192.168.1.4:3000'
})