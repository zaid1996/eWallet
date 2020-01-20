import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import EWalletComparison from '../Pages/E-WalletComparison'
import Home from '../Pages/Home'
import SearchResult from '../Pages/SearchResult'
import SmartSearch from '../Pages/SmartSearch'
import CountDownTimer from '../Components/CountDownTimer'
import Merchants from '../Pages/Merchant'
import Promotions from '../Pages/Promotions'
import WalletProfile from '../Pages/WalletProfile'
import SavingSimulations from '../Pages/SavingSimulations'

class AppRoutes extends React.Component{

    render(){
        return(
           <Router>
               <Switch>
                   <Route path="/" exact >
                     <Home/>
                   </Route>
                   <Route path="/compare" exact >
                     <EWalletComparison/>
                   </Route>
                   <Route path="/searchResult" exact >
                     <SearchResult/>
                   </Route>
                   <Route path="/smartSearch" exact >
                     <SmartSearch/>
                   </Route>
                   <Route path="/timer" exact >
                     <CountDownTimer/>
                   </Route>
                   <Route path="/merchants" exact >
                     <Merchants/>
                   </Route>
                   <Route path="/promotions" exact >
                     <Promotions/>
                   </Route>
                   <Route path="/walletProfile" exact >
                     <WalletProfile/>
                   </Route>
                   <Route path="/savingSimulation" exact >
                     <SavingSimulations/>
                   </Route>
               </Switch>
           </Router>
        );
    }

}

export default AppRoutes