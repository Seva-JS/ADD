import React from 'react';
import s from './Item.module.css'


function Post(props) {
    const items = props.items;
    const PostItems = items.map(item => {
        return <div key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} className={s.in} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)

                }}/>
                <button className={s.but} onClick={() => {
                    props.del(item)
                }}>Del
                </button>
            </p>

        </div>
    })
    return <div>
        {PostItems}
    </div>;
}

export default Post;