import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MainPage extends React.Component{
  
  render(){
    const alphaDiff = [0, 20, 40, 50, 60, 80];

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const createColor = (r, g, b, alphaDiff) => "rgb(" + (r - alphaDiff).toString() + ", " + 
                                                        (g - alphaDiff).toString() + ", " + 
                                                        (b - alphaDiff).toString() + ")";

    function setColor(variable, color){
      document.documentElement.style.setProperty(variable, color);
    }

    let pageColor;
    let titleColor;
    let paletteColor1;
    let paletteColor2;
    let paletteColor3;
    let paletteColor4;

    function updateColor(){
      let r = random(0, 256);
      let g = random(0, 256);
      let b = random(0, 256);

      pageColor = createColor(r, g, b, alphaDiff[0]);
      titleColor = createColor(r, g, b, alphaDiff[4]);
      paletteColor1 = createColor(r, g, b, alphaDiff[1]);
      paletteColor2 = createColor(r, g, b, alphaDiff[2]);
      paletteColor3 = createColor(r, g, b, alphaDiff[3]);
      paletteColor4 = titleColor;

      setColor("--page-color", pageColor);
      setColor("--title-color", titleColor);
      setColor("--palette-color-1", paletteColor1);
      setColor("--palette-color-2", paletteColor2);
      setColor("--palette-color-3", paletteColor3);
      setColor("--palette-color-4", paletteColor4);
    }

    updateColor();
    
    document.addEventListener('keydown', function(event){
      if(event.keyCode == 32){
        console.log("MEOW")
        updateColor();
      }
    });

    return(
      <div>
        <div className="ui-container">
          <p>Random Colour Generator</p>
        </div>
        
        <div className="palette-container">
          <div className="palette1"></div>
          <div className="palette2"></div>
          <div className="palette3"></div>
          <div className="palette4"></div>

        </div>
      </div>
    );
  }
  
}

ReactDOM.render(
  <MainPage />,
  document.getElementById('root')
)
