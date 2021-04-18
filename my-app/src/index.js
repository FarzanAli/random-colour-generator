import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MainPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
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
