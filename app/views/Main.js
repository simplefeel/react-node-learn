import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'

const Main = () => (
    <main>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/home' component={Home}/>
        </Switch>
    </main>
)

export default Main
