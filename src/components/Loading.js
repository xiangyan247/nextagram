import React, { Component } from 'react';
import infinity from './infinity.gif';


class Loading extends React.Component {
    render() {
        return (
            <div>
                {this.props.loading
                    ? <img className="loading" src={infinity} />

                    : null
                }
            </div>
        )
    }
}

export default Loading