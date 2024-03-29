import React, { Component } from "react";

import Post from "../../../components/Post/Post";

export default class PostRender extends Component {
    render() {
        const postIDs = ["1", "2", "3", "4", "5"];
        const { id } = this.props.match.params;
        return id && postIDs.includes(id) ? (
            <Post id={id} />
        ) : (
            <div>
                <h3>No more to show</h3>
            </div>
        );
    }
}
