// The Header creates links that can be used to navigate
// between routes.
import React, { Component } from 'react';
import './App.css';
import Route from "react-router/es/Route";
import Switch from "react-router/es/Switch";
import Blog from "./Blog";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <main>
                    <Switch>
                        <Route path='/blog' component={Blog}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Main;
