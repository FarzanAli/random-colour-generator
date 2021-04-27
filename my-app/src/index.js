import React from 'react';
import ReactDOM from 'react-dom';
import {Transition, animated} from 'react-spring';
import './index.css';
import Header from './components/header';
import Palettes from './components/palettes';
import Description from './components/description';
import Copied from './components/copied';

class MainPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      rgb: [[245, 165, 86], [225, 145, 66], [205, 125, 46], [185, 105, 26], [165, 85, 6]],
      hex: [['#F5A556'], ['#E19142'], ['#CD7D2E'], ['#B9691A'], ['#A55506']],
      showIndex: 0,
      toggleCopied: false,
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', (event) => {
      if(event.key === " "){
        this.startup();
      }
    });
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
      let hex = [];
      for(let i = 0; i < rgb.length; i++){
        hex.push("#" + (Math.floor(rgb[i][0]/16)).toString(16).toUpperCase() + (((rgb[i][0]/16) - Math.floor(rgb[i][0]/16))*16).toString(16).toUpperCase() + 
                (Math.floor(rgb[i][1]/16)).toString(16).toUpperCase() + (((rgb[i][1]/16) - Math.floor(rgb[i][1]/16))*16).toString(16).toUpperCase() +
                (Math.floor(rgb[i][2]/16)).toString(16).toUpperCase() + (((rgb[i][2]/16) - Math.floor(rgb[i][2]/16))*16).toString(16).toUpperCase());
      }
      return hex;
    }
  
    this.setState({
      rgb : createRGB(r, g, b, this.state.rgb.length),
      hex: createHex(createRGB(r, g, b, this.state.rgb.length))
    });
  }

  handleCallbackPalletesHover = (palletesData) => {
    this.setState({showIndex: palletesData});
  }

  handleCallbackPalletesClick = () => {
    this.setState({toggleCopied: !this.state.toggleCopied});
  }

  render(){
    return(
      <div>
        <>
        <Transition
            items={this.state.toggleCopied}
            config={{friction:20, clamp: true}}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            onRest={() => 
              this.setState({toggleCopied: false})
            }
            >
            {
            (styles, item) =>
              item && 
              <animated.div style={styles}>
                <Copied/>
              </animated.div>
            }
          </Transition>
        <Header/>        

        <div className="main-content">
          <Palettes
          callbackHover={this.handleCallbackPalletesHover}
          callbackClick={this.handleCallbackPalletesClick}
          rgb={this.state.rgb}
          hex={this.state.hex}
          />
          
          <Description
          rgb={this.state.rgb}
          hex={this.state.hex}
          showIndex={this.state.showIndex}
          />
        </div>
        <div className="footer">
          Press Spacebar
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
