import {combineReducers} from "redux";
import HomeReducer from "./HomeReducer"
import CompareReducer from "./CompareReducer"
import MerchantReducer from "./MerchantReducer"
import ProfileReducer from "./ProfileReducer";
import SearchReducer from "./SearchReducer"

export default combineReducers({
    home: HomeReducer,
    compare: CompareReducer,
    merchant: MerchantReducer,
    profile: ProfileReducer,
    search: SearchReducer
});