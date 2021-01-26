import {Link} from "react-router-dom";
import SvgIcon from "@material-ui/core/SvgIcon";
import s from './Names.module.css'
import React from "react";
import {useParams} from "react-router";

export default function UserInfo(props) {
    let {id} = useParams();
    let {name} = useParams()
    return (
        <div className={s.info}>
            <div className={s.icon}>
                <Link to={'/'}><SvgIcon className={s.homeIcon}>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </SvgIcon>
                </Link>
            </div>
            <div>
                <h1>User Info</h1>
                <p>
                    <div className={s.text_line}>ID:{id}</div>
                    <div className={s.text_line}>Name:{name}</div>
                </p>
            </div>
        </div>
    );
}