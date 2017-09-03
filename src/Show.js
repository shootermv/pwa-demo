import React, { Component } from 'react';
import { showLookup } from './api';
import logo from './logo.svg';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { showInfo: null }
    }
    componentDidMount() {
        showLookup(this.props.params.id).then(data => {
            console.log('data loaded:', data)
            this.setState({ showInfo: data })
        })
    }

    render() {
        const { showInfo } = this.state;
        console.log('showInfo', showInfo)
        if (showInfo) return (<div>{showInfo.name}</div>)
        return (<div>loading...</div>)
    }


}
export default Search;