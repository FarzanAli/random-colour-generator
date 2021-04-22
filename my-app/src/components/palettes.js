import React, {Component} from 'react';

export default class Palettes extends Component{

    render(){
        return(
            <>
            <div className="palette-container">
                <div className="palette1" onMouseEnter={() => this.props.callback(1)} onMouseLeave={() => this.props.callback(0)}></div>
                <div className="palette2" onMouseEnter={() => this.props.callback(2)} onMouseLeave={() => this.props.callback(0)}></div>
                <div className="palette3" onMouseEnter={() => this.props.callback(3)} onMouseLeave={() => this.props.callback(0)}></div>
                <div className="palette4" onMouseEnter={() => this.props.callback(4)} onMouseLeave={() => this.props.callback(0)}></div>
            </div>
            </>
        );
    }
}