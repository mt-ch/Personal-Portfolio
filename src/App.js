import React from 'react';
import './css/App.scss';

//components
import Nav from './components/nav';
import Home from './pages/home';
import Info from './pages/info'
import Footer from './components/footer';
import Landing from './pages/landing';
import Projects from './pages/projects';

function App() {
  return (
    <div className="app">
      <Landing/>
      <Projects/>
    </div>
  );
}

export default App;
