import React from 'react';
import s from './Names.module.css'
import {Link} from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import InfoIcon from '@material-ui/icons/Info';

export default class index extends React.Component {

    constructor() {
        super();
        this.state = {
            check: 'red',
            checkedUsers: [],
        }
        this.input = React.createRef();
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

    render() {
        debugger
        const name = this.props.name;
        return <div id={name.key}>
            <div className={s.paragraph} checked={this.state.check} style={{backgroundColor: this.state.check}}>
                <input type='checkbox' className={s.input} onChange={(e) => {
                    this.checkChange(e.target.value, name.key)
                }}/>
                <input type="text" value={name.text} className={s.in} onChange={(e) => {
                    this.props.setUpdate(e.target.value, name.key)
                }}/>
                <button className={s.but} onClick={() => {
                    this.props.deleteName(name)
                }}>
                    <DeleteForeverIcon fontSize="small"> Del </DeleteForeverIcon>
                </button>

                <Link to={'/user/' + name.key + '/' + name.text}>
                    <button className={s.but}>
                        <InfoIcon fontSize="small">Profile</InfoIcon>
                    </button>
                </Link>
            </div>
        </div>

    }
}

