import {
    GET_ALL_MERCHANTS
  } from "../Actions/types";
  
  const initialState = {
      topWallets:[],
      topFoodPromotions:[],
      topTravelPromotions:[],
      merchants:[]
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_ALL_MERCHANTS:
        return {
          ...state,
          merchants: action.payload
        };
      default:
        return state;
    }
  }