import React, { Component, Fragment } from 'react';
import PostsList from './PostsList';
import Search from './Search';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }


    onLoadNews = (text) => {
        fetch(`https://newsapi.org/v2/everything?q=${text}&apiKey=503d1ab1328e4299a9e39dd3a68a4d1a`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    posts: data.articles
                });
            })
    }

    componentDidMount(){
        this.onLoadNews('turtles');
    }
    
    render() {
        const { posts } = this.state;
        return (
            <Fragment>
                <div className="title">
                    <h1>Wild News</h1>
                    <Search onSearch={this.onLoadNews}/>
                </div>
                <div className="container">
                    <PostsList posts={posts} />
                </div>
            </Fragment>
        );
    }
}

export default App;
