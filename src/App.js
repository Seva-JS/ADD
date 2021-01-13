import s from './App.module.css'
import React from "react";
import {Switch} from "react-router-dom";
import {Route} from "react-router";
import Users from "./Users/Users";
import UserInfo from "./Users/UserInfo";


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            currentItem: {
                text: '',
                key: ''
            },
        };
    }

    newName = (e) => {
        if (e.key === "Enter") {
            const newName = this.state.currentItem;
            if (newName.text !== "") {
                const items = [...this.state.users, newName];

                this.setState({
                    users: items,
                    currentItem: {
                        text: '',
                        key: ''
                    }
                })
                e.currentTarget.value = ''
            }
        }
    }

    delName = (name) => {
        this.setState({
            users: this.state.users.filter((i) => {
                return i !== name
            })
        })
    }

    setUpdate = (text, key) => {
        const names = this.state.users;
        names.map(item => {
            if (item.key === key) {
                item.text = text;
            }
        })
        this.setState({
            users: names
        })
    }

    handleInput = (e) => {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now(),

            }

        })
    }

    render() {
        return (
            <div className={s.App}>
                <Switch>
                    <header>
                        <div className={s.App_header}>

                            <Route
                                path={'/'}
                                render={() => <Users
                                    state={this.state}
                                    newName={this.newName}
                                    delName={this.delName}
                                    setUpdate={this.setUpdate}
                                    handleInput={this.handleInput}

                                />}/>
                            <Route path="/user/:id/:name" children={<UserInfo userName={this.state.users}/>}
                                   render={() => (
                                       <UserInfo/>
                                   )}
                            />
                        </div>
                    </header>
                </Switch>
            </div>
        )
    }
}
