import React from 'react'
import { post } from '../../request/request.js'
import { login, addUser } from "../../request/api.js";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }

    getName(e) {
        this.setState({
            name: e.target.value
        }, () => {
            console.log(this.state.name)
        })
    }

    getPassword(e) {
        this.setState({
            password: e.target.value
        }, () => {
            console.log(this.state.password)
        })
    }

    tijiao() {
        let data = {
            name: this.state.name,
            password: this.state.password
        }
        post(login, data).then(res => {
            console.log(res)
            if(res.data === 'true') {
                this.props.history.push('/home')
            }else {
                window.alert(res.desc)
            }
        })
    }

    addUser() {
        let data = {
            name: this.state.name,
            password: this.state.password
        }
        post(addUser, data).then(res => {
            console.log(res)
            window.alert(res.desc)
        })
    }

    render() {
        return(
            <div>
                <div><input type="text" onBlur={this.getName.bind(this)}/></div>
                <div><input type="password" onBlur={this.getPassword.bind(this)}/></div>
                <div>
                    <button onClick={this.tijiao.bind(this)}>登陆</button>
                    <button onClick={this.addUser.bind(this)}>添加用户</button>
                </div>
            </div>
        )
    }
}