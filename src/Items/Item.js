import React from 'react';
import s from './Item.module.css'

class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            names: [],
            currentItem: {
                text: '',
                key: ''

            }
        };
        this.setUpdate = this.setUpdate.bind(this);
        this.handleInput = this.handleInput.bind(this)
        this.newPost = this.newPost.bind(this)


    }

    newPost(e) {
        if (e.key === "Enter") {
            const addPost = this.state.names;
            addPost.push(e.currentTarget.value);
            this.setState({
                names: addPost
            })
            e.currentTarget.value = ''

        }
    }

    delName(item) {
        debugger
        this.setState({
            names: this.state.names.filter((i) => {
                return i !== item
            })
        })


    }

    setUpdate(text, key) {
        debugger
        const names = this.state.names;
        names.map(name => {
            if (name.key === key) {
                name = text;
            }
        })
        this.setState({
            names: names
        })
    }

    handleInput(e) {
        debugger
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    render() {
        return (
            <div>
                <div><input placeholder={'Имя'} onKeyPress={this.newPost} onChange={this.handleInput}/></div>
                <div>
                </div>
                {this.state.names.map((item) => {
                        debugger
                        return <div>
                            <input className={s.in}  value={item} key={this.state.currentItem.key}
                                   onChange={(e) => {
                                       this.setUpdate(e.target.value, this.state.currentItem.key)
                                   }}
                            />


                            <button className={s.but} onClick={this.delName.bind(this,item)}>Del</button>

                        </div>
                    }
                )}

            </div>
        )
    }


}

export default Item;