import {
    GET_ALL_EWALLETS
} from "./types";

let ewallets = [
    {
      name: "Fave Pay",
      image_link: "../Images/facpic.png",
      type: "link To Card",
      os: "Both",
      merchants: "50000",
      promotions: "20",
      services: [
        {
          name: "Food"
        },
        {
          name: "Deliery"
        },
        {
          name: "TopUp"
        }
      ],
      rewardScheme: "Cashback",
      minReload: "RM10",
      maxReload: "RM500",
      p2pTransfer: "Yes",
      supportWithdrawal: "Yes",
      onlinePayment: "Yes",
      merchantPayment: "Yes",
      website: "https://www.google.com/"
    },
    {
      name: "Touch n Go ",
      type: "link To Card",
      image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQju3E368dFkY67-Mmv16nJPhg3pc-5E4X-RLXGapkW-AvRzd3_",
      os: "Both",
      merchants: "50000",
      promotions: "20",
      services: [
        {
          name: "Food"
        },
        {
          name: "Deliery"
        },
        {
          name: "TopUp"
        }
      ],
      rewardScheme: "Cashback",
      minReload: "RM10",
      maxReload: "RM500",
      p2pTransfer: "Yes",
      supportWithdrawal: "Yes",
      onlinePayment: "Yes",
      merchantPayment: "Yes",
      website: "https://www.google.com/"
    },
    {
      name: "Boost",
      image_link: "https://media-events.thestar.com.my/wp-content/uploads/2019/06/boost-logo.png",
      type: "link To Card",
      os: "Both",
      merchants: "50000",
      promotions: "20",
      services: [
        {
          name: "Food"
        },
        {
          name: "Deliery"
        },
        {
          name: "TopUp"
        }
      ],
      rewardScheme: "Cashback",
      minReload: "RM10",
      maxReload: "RM500",
      p2pTransfer: "Yes",
      supportWithdrawal: "Yes",
      onlinePayment: "Yes",
      merchantPayment: "Yes",
      website: "https://www.google.com/"
    },
    {
      name: "Grab Pay",
      image_link: "https://support.codapay.com/hc/article_attachments/360044188252/GrabPay_Logo_FINAL-1.png",
      type: "link To Card",
      os: "Both",
      merchants: "50000",
      promotions: "20",
      services: [
        {
          name: "Food"
        },
        {
          name: "Deliery"
        },
        {
          name: "TopUp"
        }
      ],
      rewardScheme: "Cashback",
      minReload: "RM10",
      maxReload: "RM500",
      p2pTransfer: "Yes",
      supportWithdrawal: "Yes",
      onlinePayment: "Yes",
      merchantPayment: "Yes",
      website: "https://www.google.com/"
    }
  ]

export const getAllEwallets = () => dispatch => {
    dispatch({
        type: GET_ALL_EWALLETS,
        payload: ewallets
    })
}


