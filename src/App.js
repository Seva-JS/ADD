import s from './App.module.css'
import React from "react";
import {Link, Switch} from "react-router-dom";
import {Route} from "react-router";
import Names from "./Names/Names";
import SvgIcon from "@material-ui/core/SvgIcon";


function App() {
    return (
        <div className={s.App}>
            <Switch>
                <header>
                    <div className={s.App_header}>

                        <Route
                            path={''}
                            render={() => <Names/>}/>
                        <Route //сюда хочу передать пропы из Index.js.
                            path="/user"
                            render={(props) => (
                                <User {...props} />
                            )}
                        />
                    </div>
                </header>
            </Switch>
        </div>
    )
}


export function User(props) {
    //Здесь поставь debugger и посмотри как приходят пропсы , а потом сробатывает редирект.
    //Если захочешь увидеть рендер функции снизу замени {props} на любой текст
    return (
        <div>
            <Link to={''}><SvgIcon className={s.homeIcon}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </SvgIcon>
            </Link>
            <div>
                <h1>User Info</h1>
                <p>
                    {props}
                </p>
            </div>
        </div>
    )


}


export default App;
