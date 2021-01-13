import React from 'react';
import s from './Names.module.css'
import {Link} from "react-router-dom";
import {useParams} from "react-router";

export default class index extends React.Component {

    constructor() {
        super();
        this.state = {
            check: 'red'
        }

    }


    checkChange = (e, key) => {
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
    /*profInfo = (e, key,text) => {
        return(
            <div>{text}</div>
        )


    }*/


    render() {
        const name = this.props.name;
        return <div id={name.key}>
            <div className={s.paragraph} checked={this.state.check} style={{backgroundColor: this.state.check}}>
                <input type='checkbox' className={s.input} onChange={(e) => {
                    this.checkChange(e.target.value, name.key)
                }}/>
                <input className={s.input} type="text" value={name.text} className={s.in} onChange={(e) => {
                    this.props.setUpdate(e.target.value, name.key)
                }}/>
                <button className={s.but} onClick={() => {
                    this.props.deleteName(name)
                }}>Del
                </button>
                <Link to={'/user/' + name.key+'/'+ name.text}>
                    <button /*onClick={(e) => {
                        this.profInfo(e.target.value, name.key,name.text)
                    }}*/>Profile
                    </button>
                </Link>
            </div>
        </div>

    }
}

