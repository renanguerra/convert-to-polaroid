import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../pages/home/App'
import Contato from '../pages/contato/index.tsx'


 const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/contato' component={Contato}></Route>

        </Switch>
    </BrowserRouter>
)

export default Routes;
