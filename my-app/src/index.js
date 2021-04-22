import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Palettes from './components/palettes';

class MainPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      rgb: [0, 0, 0]
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', (event) => {
      if(event.key === " "){
        this.startup();
      }
    });

    this.startup();
  }

  startup(){

    let r;
    let g;
    let b;

    const alphaDiff = [0, 20, 40, 50, 60, 80];

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const createColor = (r, g, b, alphaDiff) => "rgb(" + (r - alphaDiff).toString() + ", " + 
                                                        (g - alphaDiff).toString() + ", " + 
                                                        (b - alphaDiff).toString() + ")";

    function setColor(variable, color){
      document.documentElement.style.setProperty(variable, color);
    }

    r = random(0, 256);
    g = random(0, 256);
    b = random(0, 256);      

    let pageColor = createColor(r, g, b, alphaDiff[0]);
    let titleColor = createColor(r, g, b, alphaDiff[4]);
    let paletteColor1 = createColor(r, g, b, alphaDiff[1]);
    let paletteColor2 = createColor(r, g, b, alphaDiff[2]);
    let paletteColor3 = createColor(r, g, b, alphaDiff[3]);
    let paletteColor4 = titleColor;

    setColor("--page-color", pageColor);
    setColor("--text-color", titleColor);
    setColor("--palette-color-1", paletteColor1);
    setColor("--palette-color-2", paletteColor2);
    setColor("--palette-color-3", paletteColor3);
    setColor("--palette-color-4", paletteColor4);
    this.setState({rgb: [r, g, b]});
  }

  render(){
    return(
      <div>
        <>
        <Header/>
        <Palettes/>
        <div className="description-container">
          RGB: ({this.state.rgb[0]}, {this.state.rgb[1]}, {this.state.rgb[2]})
        </div>
        </>
      </div>
    );
  }
  
}

ReactDOM.render(
  <MainPage/>,
  document.getElementById('root')
)
