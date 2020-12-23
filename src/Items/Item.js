import React from 'react';
import s from './Item.module.css'

class Item extends React.Component {
    constructor(props) {
        super();
        this.state = {
            names: ['Иван', 'Саша']
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

    render() {
        return (
            <div>
                <div><input placeholder={'Имя'} onKeyPress={this.newPost.bind(this)}/></div>
                <div>
                </div>
                {this.state.names.map((item) => {
                        return <div>
                            {item}
                            <button className={s.but} onClick={this.delName.bind(this, item)}>Del</button>
                            <button className={s.but} >Change</button>
                        </div>

                    }
                )}

            </div>
        )
    }


}

export default Item;