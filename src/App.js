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
                        <Route
                            path="/User"
                            render={(props) => (
                                <User {...props} isAuthed={true} />
                            )}
                        />
                    </div>
                </header>
            </Switch>
        </div>
    )
}


export function User(props) {
    debugger
    return (
        <div>
            <Link to={''}><SvgIcon className={s.homeIcon}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </SvgIcon>
            </Link>
            <div><h1>Greeting page</h1>
                <p>
                    {props}
                </p></div>
        </div>
    )


}


export default App;
