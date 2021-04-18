import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MainPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    let r = random(0, 256);
    let g = random(0, 256);
    let b = random(0, 256);
    let pageColor = "rgb(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ")";
    let alphaDiff = 60;
    let titleColor = "rgb(" + (r - alphaDiff).toString() + ", " + (g - alphaDiff).toString() + ", " + (b - alphaDiff).toString() + ")";

    document.documentElement.style.setProperty('--page-color', pageColor);
    document.documentElement.style.setProperty('--title-color', titleColor);
    return(
      <div>
        <div className="ui-container">
          <p>Random Color Generator</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <MainPage />,
  document.getElementById('root')
)
