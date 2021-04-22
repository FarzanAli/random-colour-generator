import React, {Component} from 'react';

export default class Description extends Component{
    render(){
        return(
            <>
            <div className="description-container">
                RGB: ({this.props.rgb[this.props.showIndex][0]},
                {this.props.rgb[this.props.showIndex][1]},
                {this.props.rgb[this.props.showIndex][2]})
            </div>
            </>
        );
    }
}