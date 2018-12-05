import React from 'react'
import { get, post } from '../../request/request.js'
import { first, login, addUser } from "../../request/api.js";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidMount() {
        console.log('---homepage')
        get(first).then(res => {
            console.log(res)
        })
    }

  
    render() {
        return(
            <div>
                <div>welcome to home page !</div>
            </div>
        )
    }
}