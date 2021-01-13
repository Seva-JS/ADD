import React from 'react';
import s from './Names.module.css'
import Index from "./index";

export default class Users extends React.Component {


    render() {
        return (
            <div className={s.main}>
                <header>NAMES LIST</header>
                <p>Total name's in list <div className={s.numberOfNames}>{this.props.state.users.length}</div>
                </p>
                <div>
                    <input className={s.input} placeholder={'Name'} onKeyPress={this.props.newName}
                           onChange={this.props.handleInput}/>
                </div>
                <div>
                    {this.props.state.users.map((name) => {
                        return <div id={name.key}>
                            <Index
                                name={name}
                                setUpdate={this.props.setUpdate}
                                deleteName={this.props.delName}
                            />
                        </div>
                    })}
                </div>
            </div>
        )

    }


}

