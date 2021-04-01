import React from 'react'
import {Switch, Route} from 'react-router-dom'

/* page imports*/
import LandingPage from '../pages/LandingPage'
import Homepage from '../pages/Homepage'


export default(
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route path='/home' component={Homepage} />
        
    </Switch>
   
   
   
   
   )