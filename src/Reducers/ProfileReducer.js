import {
     GET_WALLET_PROFILE
  } from "../Actions/types";
  
  const initialState = {
     profileData: []
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_WALLET_PROFILE:
        return {
          ...state,
          profileData: action.payload
        };
      default:
        return state;
    }
  }