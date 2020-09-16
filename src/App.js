import React from 'react';
import './css/App.scss';

//components
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
