import s from './App.module.css'
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import Names from "./Names/Names";
import User from "./Names/Users/User";


function App() {

    return (
        <BrowserRouter>
            <div className={s.App}>
                <header>
                    <div className={s.App_header}>
                        <Route path={''} render={() => <Names/>}/>
                        <Route path={'/User'} render={() => <User/>}/>
                    </div>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
