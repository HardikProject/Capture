import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import GlobalStyles from './GlobalStyles';
import AboutUs from './pages/AboutUs';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <AboutUs/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
