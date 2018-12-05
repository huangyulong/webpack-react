import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'
import { AppContainer } from 'react-hot-loader'
import {hot} from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

const dom =  document.getElementById('root')
const render = (Components) => {
    ReactDOM.render(
        <AppContainer>
            <Components />
        </AppContainer>,
       dom
    )
}

render(App)


