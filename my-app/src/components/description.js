import React, {Component} from 'react';

export default class Description extends Component{
    render(){
        return(
            <>
            <div className="description-container">
                <div className="rgb">
                    RGB&nbsp;&nbsp;&nbsp;{this.props.rgb[this.props.showIndex][0]},
                    {this.props.rgb[this.props.showIndex][1]},
                    {this.props.rgb[this.props.showIndex][2]}
                </div>
                <div className="hex">
                    HEX&nbsp;&nbsp;&nbsp;{this.props.hex[this.props.showIndex]}
                </div>
            </div>
            </>
        );
    }
}