import React, { Component } from 'react';
import { showLookup, showCast } from './api';
import logo from './logo.svg';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { showInfo: null }
    }
    componentDidMount() {
        showLookup(this.props.params.id).then(data => {
            console.log('data loaded:', data)
            this.setState({ showInfo: data });
            showCast(data.id)
                .then(cast => this.setState({ cast }));
        })
    }
    renderCast(cast) {
        return (
            <div>{cast.map((player, idx) => {

                return <div key={idx}>{player.person.name}</div>

            })}</div>
        );
    }
    renderShow(showInfo, cast) {
        return (<div>
            <h1>{showInfo.name}</h1>
            <div>{showInfo.summary.replace(/(<([^>]+)>)/ig, '')}</div>
            <img src={showInfo.image.medium} />
            {this.renderCast(cast)}
        </div>)
    }
    render() {
        const { showInfo, cast } = this.state;
        console.log('cast', cast)
        if (showInfo && cast) return this.renderShow(showInfo, cast);
        return (<div>loading...</div>)
    }


}
export default Search;