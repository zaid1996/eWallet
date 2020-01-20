import {
    GET_WALLET_PROFILE
} from "./types";

let profile = [
    {
      name: "Zain",
      comment: "Its Good",
      rating: "4.6"
    },
    {
      name: "Zaid",
      comment: "Its very Good",
      rating: "5.0"
    },
    {
      name: "Irtaza",
      comment: "Amazing",
      rating: "4.2"
    },
    {
      name: "Talal",
      comment: "Great",
      rating: "4.9"
    }
  ];

export const getWalletProfile = () => dispatch => {
    dispatch({
        type: GET_WALLET_PROFILE,
        payload: profile
    })
}


