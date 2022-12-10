import React from 'react';
import './App.css';
import Icons from './Icons';

class App extends React.Component {
  render() {
    return (
      <>
        <div className='App'>
          <h1 className='FullName'>Emre Bozkurt</h1>
          <h1 className='JobTitle'>Software Engineer @ Munich</h1>
        </div>
        <div>
          <Icons/>
        </div>
      </>
    );
  }
}

export default App;
