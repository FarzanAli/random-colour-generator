import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Palettes from './components/palettes';
import Description from './components/description';

class MainPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      rgb: [[], [], [], [], []],
      hex: [[], [], [], [], []],
      showIndex: 0,
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

    const alphaDiff = [0, 20, 40, 60, 80, 100];

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const createCSSColor = (r, g, b, alphaDiff) => "rgb(" + (r - alphaDiff).toString() + ", " + 
                                                        (g - alphaDiff).toString() + ", " + 
                                                        (b - alphaDiff).toString() + ")";

    function setColor(variable, color){
      document.documentElement.style.setProperty(variable, color);
    }

    r = random(0, 256);
    g = random(0, 256);
    b = random(0, 256);

    setColor("--page-color", createCSSColor(r, g, b, alphaDiff[0]));
    setColor("--text-color", createCSSColor(r, g, b, alphaDiff[4]));
    setColor("--palette-color-1", createCSSColor(r, g, b, alphaDiff[1]));
    setColor("--palette-color-2", createCSSColor(r, g, b, alphaDiff[2]));
    setColor("--palette-color-3", createCSSColor(r, g, b, alphaDiff[3]));
    setColor("--palette-color-4", createCSSColor(r, g, b, alphaDiff[4]));

    function createRGB(r, g, b, size){
      let array = [];
      for(let i = 0; i < size; i++){
        array.push([(r - alphaDiff[i]) > 0 ? (r - alphaDiff[i]) : 0,
                    (g - alphaDiff[i]) > 0 ? (g - alphaDiff[i]) : 0,
                    (b - alphaDiff[i]) > 0 ? (b - alphaDiff[i]) : 0]);
      }
      return array;
    }
    
    function createHex(rgb){
      let hex = []
      for(let i = 0; i < rgb.length; i++){
        hex.push("#" + (Math.floor(rgb[i][0]/16)).toString(16).toUpperCase() + (((rgb[i][0]/16) - Math.floor(rgb[i][0]/16))*16).toString(16).toUpperCase() + 
                (Math.floor(rgb[i][1]/16)).toString(16).toUpperCase() + (((rgb[i][1]/16) - Math.floor(rgb[i][1]/16))*16).toString(16).toUpperCase() +
                (Math.floor(rgb[i][2]/16)).toString(16).toUpperCase() + (((rgb[i][2]/16) - Math.floor(rgb[i][2]/16))*16).toString(16).toUpperCase())
      }
      return hex
    }
  
    this.setState({
      rgb : createRGB(r, g, b, this.state.rgb.length),
      hex: createHex(createRGB(r, g, b, this.state.rgb.length))
    });
  }

  handleCallbackPalletes = (palletesData) => {
    this.setState({showIndex: palletesData});
  }

  render(){
    return(
      <div>
        <>
        <Header/>
        <Palettes callback={this.handleCallbackPalletes}/>
        <Description
        rgb={this.state.rgb}
        hex={this.state.hex}
        showIndex={this.state.showIndex}
        />
        </>
      </div>
    );
  }

}

ReactDOM.render(
  <MainPage/>,
  document.getElementById('root')
)
