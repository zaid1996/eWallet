import {
    GET_ALL_EWALLETS
  } from "../Actions/types";
  
  const initialState = {
     eWalletList:[]
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_ALL_EWALLETS:
        return {
          ...state,
          eWalletList: action.payload
        };
      default:
        return state;
    }
  }