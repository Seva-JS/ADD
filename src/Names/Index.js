import React from 'react';
import s from './Names.module.css'
import {Link} from "react-router-dom";
import {User} from "../App";

export default class Index extends React.Component {

    constructor() {
        super();
        this.state = {
            check: 'red'
        }
        this.checkChange = this.checkChange.bind(this)

    }


    checkChange(e, key) {
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
//Тот самый ход гения , что-бы передать пропы , здесь происходи первый ренедер с приходящими пропами.
    NameProf(props) {
        User(this.props.name.text)

    }


    render() {
        const name = this.props.name;
        return <div id={name.key}>
            <p className={s.paragraph} checked={this.state.check} style={{backgroundColor: this.state.check}}>
                <input type='checkbox' className={s.input} onChange={(e) => {
                    this.checkChange(e.target.value, name.key)
                }}/>
                <input className={s.input} type="text" value={name.text} className={s.in} onChange={(e) => {
                    this.props.setUpdate(e.target.value, name.key)
                }}/>
                <button className={s.but} onClick={() => {
                    this.props.deleteName(name,)
                }}>Del
                </button>
                <Link to={'/user'}>
                    <button className={s.but} onClick={event => this.NameProf(name.text)}>Prof</button>
                </Link>
            </p>
        </div>

    }
}

