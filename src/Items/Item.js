import React from 'react';
import s from './Item.module.css'

class Item extends React.Component {
    constructor(props) {
        super();
        this.state = {
            editing: false,
            names: ['Иван', 'Саша'],
            key: ''

        };
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
        this.setState({
            names: this.state.names.filter((i) => {
                return i !== item
            })
        })
    }

    setUpdate(text, key) {
        const item = this.state.names;
        item.map(item => {
            if (item.key === key) {
                item.text = text;

            }
        })
        this.setState({item: item})

    }


    render() {


        return (

            <div>
                <div><input placeholder={'Имя'} onKeyPress={this.newPost.bind(this)}
                /></div>
                <div>

                    {this.state.names.map((item) => {
                            debugger
                            return <div>
                                <input
                                    key={item.id}
                                    onDoubleClick={this.setUpdate.bind(this)}
                                    type='text' value={item}
                                    className={s.in}
                                    onChange={(e) => {
                                        this.setUpdate(e.target.value, item.id)
                                    }}
                                >

                                </input>
                                <button className={s.but} onClick={this.delName.bind(this, item)}>Del</button>
                            </div>

                        },
                    )}
                </div>

            </div>
        )
    }


}

export default Item;