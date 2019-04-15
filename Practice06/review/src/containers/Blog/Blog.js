import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Posts from "./Posts/Posts";
import Home from "./Home";
import PostRender from "./Posts/PostRender";

export default class Blog extends Component {
    showAbout(){


    }
    render() {
      
        return (
            <div className="All">
                <div className="Header">
                    <div className="Button">
                        <NavLink to="/home">Home</NavLink>
                    </div>
                    <div className="Button"> 
                        <NavLink to="/posts">Posts</NavLink>
                    </div>
                    <div className="Button">
                        <NavLink to="/authors">Authors</NavLink>`
                    </div>
                </div>
                <div className="Main">
                    <div className="Column">
                        <div id="about" onClick={this.showAbout}>About</div>
                        <div>Information</div>
                        <div>Posts</div>
                    </div>
                    <div className="Article">
                        <div className="Content">
                            <Switch>
                            <Route path="/home" component={Home} />
                            <Route exact path="/posts" component={Posts} />
                            <Route path="/posts/:id?" component={PostRender} />
                            <Redirect from="/home" to="/" />
                            </Switch>
                        </div>
                    </div>
                </div>
                <hr />
                
            </div>
        );
    }
}
