import React from 'react'
import {hot} from 'react-hot-loader'
import Routers from './router/index'

 class App extends React.Component{
    render(){
        return(
            <Routers></Routers>
        )
    }
}

export default hot(module)(App)