import {
    GET_SEARCH_QUESTIONS,
    GET_SEARCH_RESULT
 } from "../Actions/types";
 
 const initialState = {
    searchQuestions: [],
    searchResult:[]
 };
 
 export default function (state = initialState, action) {
   switch (action.type) {
     case GET_SEARCH_QUESTIONS:
       return {
         ...state,
         searchQuestions: action.payload
       };
       case GET_SEARCH_RESULT:
       return {
         ...state,
         searchResult: action.payload
       };
     default:
       return state;
   }
 }
 