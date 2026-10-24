import './App.css';
import Icons from './Icons';
import portrait from './assets/portrait.jpg';

function App() {
  return (
    <div className="app-container">
      <div className="ambient-grid" aria-hidden="true" />

      <header className="site-header">
        <div className="site-mark" aria-label="Emre Bozkurt">
          <span className="site-mark__initials">EB</span>
          <span className="site-mark__caption">EMRE BOZKURT<br />SOFTWARE ENGINEER</span>
        </div>
        <span className="site-location">MUNICH / DE</span>
      </header>

      <main className="content-wrapper">
        <section className="text-content" aria-labelledby="page-title">
          <span className="eyebrow">PROFILE <span>//</span> 01</span>
          <h1 className="full-name" id="page-title">
            <span>EMRE</span>
            <span>BOZKURT</span>
          </h1>
          <p className="job-title">Software engineer<br />based in Munich.</p>
          <Icons />
        </section>

        <div className="dashboard-art">
          <div className="dashboard-art__glow" aria-hidden="true" />
          <div className="dashboard-art__ring" aria-hidden="true" />
          <div className="dashboard-art__core">
            <img className="dashboard-art__portrait" src={portrait} alt="Portrait of Emre Bozkurt" />
          </div>
          <div className="dashboard-art__road" aria-hidden="true" />
          <span className="dashboard-art__label" aria-hidden="true">ENGINEER / MUNICH</span>
        </div>
      </main>

      <footer className="site-footer">EMREBOZKURT.DE</footer>
    </div>
  );
}

export default App;
