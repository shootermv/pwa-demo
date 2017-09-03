import React, { Component } from 'react';
import { search, toTileFormat } from './api';
import logo from './logo.svg';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { searchResults: [] }
    }
    doSearch(searchTerm) {
        search(searchTerm).then(rawResults => {
            this.setState({
                searchResults: toTileFormat(rawResults),
                rawResults
            });
        });
    }
    render() {
        const { searchResults } = this.state;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <input placeholder="search movie" ref={(inpt) => this.inpt = inpt} />
                    <button onClick={(e) => this.doSearch(this.inpt.value)}>search</button>
                    {searchResults.map((res, index) => <a href={'#/show/' + res.id} key={index}>{res.name}<img src={res.img} /></a>)}
                </p>
            </div>
        );
    }
}
export default Search;