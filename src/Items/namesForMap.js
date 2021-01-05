import React from 'react';
import s from './Post.module.css'

export default class NamesForMap extends React.Component {
    constructor() {
        super();
        this.state = {
            check: 'red'
        }
        this.checkChange = this.checkChange.bind(this)

    }

    checkChange() {
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
        const name = this.props.name;
        return <div key={name.key}>
            <p className={s.paragraph} checked={this.state.check} style={{backgroundColor: this.state.check}}>
                <input type='checkbox' onChange={this.checkChange}/>
                <input type="text" id={name.key} value={name.text} className={s.in} onChange={(e) => {
                    this.props.setUpdate(e.target.value, name.key)
                }}/>
                <button className={s.but} onClick={() => {
                    this.props.delName(name)
                }}>Del
                </button>
            </p>
        </div>
    }
}

