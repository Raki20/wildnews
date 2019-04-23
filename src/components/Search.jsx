import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleSubmitSearch = () => {
        this.props.onSearch(this.state.text);
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.handleChange}></input>
                <button type="button" className="btn btn-outline-secondary" onClick={this.handleSubmitSearch} >
                    Search News
                </button> 
            </div>               
        );
    }
    
};

export default Search;

