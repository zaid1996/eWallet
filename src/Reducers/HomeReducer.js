import {
    GET_TOP_WALLETS,
    GET_TOP_FOOD_PROMOTIONS,
    GET_TOP_TRAVEL_PROMOTIONS,
    GET_ALL_PROMOTIONS
  } from "../Actions/types";
  
  const initialState = {
      topWallets:[],
      topFoodPromotions:[],
      topTravelPromotions:[],
      promotions:[]
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_TOP_WALLETS:
        return {
          ...state,
          topWallets: action.payload
        };
        case GET_TOP_FOOD_PROMOTIONS:
        return {
          ...state,
          topFoodPromotions: action.payload
        };
        case GET_TOP_TRAVEL_PROMOTIONS:
        return {
          ...state,
          topTravelPromotions: action.payload
        };
        case GET_ALL_PROMOTIONS:
        return {
          ...state,
          promotions: action.payload
        };
      default:
        return state;
    }
  }