import React, {Component} from 'react';
export default class Palettes extends Component{

    copyToClipboardCallback(rgb, hex){
        let info = document.createElement("textarea");
        document.body.appendChild(info);
        info.value = rgb.toString() + "," + hex;
        info.select();
        document.execCommand("copy");
        document.body.removeChild(info);
    }

    render(){
        return(
            <>
            <div className="palette-container">
                <div className="palette" onMouseEnter={() => this.props.callbackHover(0)} onMouseLeave={() => this.props.callbackHover(0)} onClick={() => {this.copyToClipboardCallback(this.props.rgb[0], this.props.hex[0]); this.props.callbackClick();}}></div>
                <div className="palette1" onMouseEnter={() => this.props.callbackHover(1)} onMouseLeave={() => this.props.callbackHover(0)} onClick={() => {this.copyToClipboardCallback(this.props.rgb[1], this.props.hex[1]); this.props.callbackClick();}}></div>
                <div className="palette2" onMouseEnter={() => this.props.callbackHover(2)} onMouseLeave={() => this.props.callbackHover(0)} onClick={() => {this.copyToClipboardCallback(this.props.rgb[2], this.props.hex[2]); this.props.callbackClick();}}></div>
                <div className="palette3" onMouseEnter={() => this.props.callbackHover(3)} onMouseLeave={() => this.props.callbackHover(0)} onClick={() => {this.copyToClipboardCallback(this.props.rgb[3], this.props.hex[3]); this.props.callbackClick();}}></div>
                <div className="palette4" onMouseEnter={() => this.props.callbackHover(4)} onMouseLeave={() => this.props.callbackHover(0)} onClick={() => {this.copyToClipboardCallback(this.props.rgb[4], this.props.hex[4]); this.props.callbackClick();}}></div>
            </div>
            </>
        );
    }
}