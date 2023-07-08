import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/pages/Home';
// import About from './component/pages/AboutPage';
// import PlanTour from './component/pages/PlanTour';
// import LiveLocation from './component/pages/LiveLocation';
import ErrorPage from './component/pages/Error';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/page-not-available' element={<ErrorPage/>} ></Route>
        <Route exact path='/' element={<HomePage/>} ></Route>
      </Routes>
        {/* <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/planTour' Component={PlanTour} />
        <Route path='/liveLocation' Component={LiveLocation} /> */}
    </Router>
  );
}

export default App;