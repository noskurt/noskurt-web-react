import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Icons from './Icons';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <main className="content-wrapper">
        <div className="text-content">
          <h1 className="full-name">Emre Bozkurt</h1>
          <p className="job-title">Software Engineer @ Munich</p>
        </div>
      </main>
      <footer className="social-footer">
        <Icons />
      </footer>
    </div>
  );
};

export default App;
