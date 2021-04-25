import React from 'react';
import './App.css';
import Icons from './Icons';
import {withRouter, RouteComponentProps, Route} from "react-router-dom";

class App extends React.Component<RouteComponentProps> {
  render() {
    return (
      <>
        <Route exact path="/live" render={() => (window.location.href = "https://youtu.be/BjaCO1iRV6c")}/>
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

export default withRouter(App);
