import React, { Component } from 'react';

export default class PopupCard extends Component {
    render() {
        return (
            <div className="col-md-6">
                <h6><a className="dropdown-item p-0" href="#"><b>{this.props.data.title}</b></a></h6>
                <p>{this.props.data.description}</p>
            </div>
        )
    }
}