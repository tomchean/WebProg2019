import React from "react";
import { NavLink } from "react-router-dom";


export default ({ id }) => {
    let next=Number(id)+1;
    let prev=Number(id)-1;
    return (
        <article>
            <h1>Article{id}</h1>
            <p>This is the {id}-th post</p>
            <p>
                content content content content content content content content<br/>
                content content content content content content content content<br/>
                content content content content content content content content<br/>
                content content content content content content content content<br/>
                content content content content content content content content<br/>

            </p>
            <button>
                <NavLink to={"/posts/" + prev}>Previous</NavLink>
            </button>
            <button>
                <NavLink to={"/posts/" + next}>Next</NavLink>
            </button>
        </article>
    );
};
