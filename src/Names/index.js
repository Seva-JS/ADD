import React from 'react';
import s from './Names.module.css'
import {Route} from "react-router";
import User from "./Users/User";
export default class Index extends React.Component {

    constructor() {
        super();
        this.state = {
            check: 'red'
        }
        this.checkChange = this.checkChange.bind(this)

    }


    checkChange(e) {
        if (this.state.check === 'red') {
            this.setState({
                check: 'green'
            })
        } else {
            this.setState({
                check: 'red'
            })

        }
    }
    NameProf (props){debugger
        window.location.href = '/User';
        return (
            <Route path={'/User'} render={() => <User name={this.props.name.text} />}/>
        )
    }
        render()
        {
            const name = this.props.name;
            return <div id={name.key}>
                <p className={s.paragraph} checked={this.state.check} style={{backgroundColor: this.state.check}}>
                    <input type='checkbox' onChange={(e) => {
                        this.checkChange(e.target.value)
                    }}/>
                    <input type="text" id={name.key} value={name.text} className={s.in} onChange={(e) => {
                        this.props.setUpdate(e.target.value, name.key)
                    }}/>
                    <button className={s.but} onClick={() => {
                        this.props.deleteName(name)
                    }}>Del
                    </button>
                    <button className={s.but} onClick={event => this.NameProf(this.props.name)}>Prof</button>
                </p>
            </div>

        }
    }

