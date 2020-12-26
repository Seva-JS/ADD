import React from 'react';
import Post from "./Post";
import s from './Item.module.css'

class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            names: [],
            currentItem: {
                text: '',
                key: ''

            },
            check:false
        };
        this.setUpdate = this.setUpdate.bind(this);
        this.handleInput = this.handleInput.bind(this)
        this.newPost = this.newPost.bind(this)
        this.delName = this.delName.bind(this);
        this.checkChange=this.checkChange.bind(this)


    }

    newPost(e) {
        if (e.key === "Enter") {
            const addPost = this.state.currentItem;
            if (addPost.text !== "") {
                const items = [...this.state.names, addPost];

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

    delName(item) {
        this.setState({
            names: this.state.names.filter((i) => {
                return i !== item
            })
        })
    }

    setUpdate(text, key) {
        const items = this.state.names;
        items.map(item => {
            if (item.key === key) {
                item.text = text;
            }
        })
        this.setState({
            names: items
        })
    }

    handleInput(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }
    checkChange(){
        let _check=!this.state.check;
        this.setState({
            check:_check
        })

    }

    render() {
        return (
            <div>
                <header>NAMES LIST</header>
                <p>Total name's in list <div className={s.numberOfNames}>{this.state.names.length}</div></p>
                <div><input placeholder={'Имя'} onKeyPress={this.newPost} onChange={this.handleInput}/></div>
                <div>
                    <Post type='checkbox ' items={this.state.names} setUpdate={this.setUpdate} del={this.delName}
                          checkChange={this.checkChange} check={this.state.check}
                          />

                </div>
            </div>
        )
    }


}

export default Item;