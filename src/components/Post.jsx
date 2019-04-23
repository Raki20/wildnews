import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    handleOnClick = () => {
        this.setState((state) => {
            return {isVisible: !state.isVisible};
        })
    }

    render() {
        const { post } = this.props;
        return (
            <div className="post-card">
                <h3>{post.title}</h3>
                <h4>{post.description}</h4>
                <button type="button" className="btn btn-outline-secondary" onClick={this.handleOnClick}>Show/Hide</button>
                {
                    this.state.isVisible && (
                <p>{post.content}</p>
                )}
            </div>
        );
    }
};

export default Post;
