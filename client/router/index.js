import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import Test from '../pages/test.jsx'
import Login from '../pages/login/index.jsx'
import Home from '../pages/homePage/index.jsx'

export default class Routers extends React.Component {
    constructor() {
        super()
    }
    componentWillMount() {
        console.log('---router')
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />  
                    <Route exact path="/" component={Login} />   
                </Switch>
            </HashRouter>
        )
    }
}

