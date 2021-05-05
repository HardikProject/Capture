import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import GlobalStyles from './GlobalStyles';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContectUs from './pages/ContectUs';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contect">
          <ContectUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
