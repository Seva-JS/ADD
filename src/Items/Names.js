import React from 'react';
import Index from "./index";
import SvgIcon from "@material-ui/core/SvgIcon";

export default class Names extends React.Component {
    constructor() {
        super();
        this.state = {
            names: [],
            currentItem: {
                text: '',
                key: ''
            },
        };
        this.setUpdate = this.setUpdate.bind(this);
        this.handleInput = this.handleInput.bind(this)
        this.newName = this.newName.bind(this)


    }

    newName(e) {
        if (e.key === "Enter") {
            const newName = this.state.currentItem;
            if (newName.text !== "") {
                const items = [...this.state.names, newName];

                this.setState({
                    names: items,
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
            names: this.state.names.filter((i) => {
                return i !== name
            })
        })
    }

    setUpdate(text, key) {
        const names = this.state.names;
        names.map(item => {
            if (item.key === key) {
                item.text = text;
            }
        })
        this.setState({
            names: names
        })
    }

    handleInput(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now(),

            }

        })
    }

    render() {
        return (
            <div className={s.main}>
                <SvgIcon onClick={e => window.location.href = '/'} >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </SvgIcon>
                <header>NAMES LIST</header>
                <p>Total name's in list <div className={s.numberOfNames}>{this.state.names.length}</div>
                </p>
                <div><input placeholder={'Name'} onKeyPress={this.newName}
                                                onChange={this.handleInput}/></div>
                <div>
                    {this.state.names.map((name) => {
                        return <Index
                            name={name}
                            setUpdate={this.setUpdate}
                            deleteName={this.delName}
                        />
                    })}
                </div>
            </div>
        )

    }


}