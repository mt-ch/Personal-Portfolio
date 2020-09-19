import React from 'react';
import './css/App.scss';

//components
import Nav from './components/nav';
import Home from './pages/home';
import Info from './pages/info'
import Footer from './components/footer';

function App() {
  return (
    <div className="app">
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
