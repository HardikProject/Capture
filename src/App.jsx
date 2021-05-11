import React from 'react';
import { Switch, Route,useLocation} from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import GlobalStyles from './GlobalStyles';
import AboutUsPage from './pages/AboutUsPage';
import OurWorkPage from './pages/OurWorkPage.jsx';
import ContectUsPage from './pages/ContectUsPage';
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <AnimatePresence exitBeforeEnter >
      <Switch location={location} key={location.pathname} >
        <Route path="/" exact>
          <AboutUsPage />
        </Route>
        <Route path="/ourwork">
          <OurWorkPage />
        </Route>
        <Route path="/contect">
          <ContectUsPage />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
