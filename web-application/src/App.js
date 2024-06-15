import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/pages/Home';
// import About from './component/pages/AboutPage';
// import PlanTour from './component/pages/PlanTour';
// import LiveLocation from './component/pages/LiveLocation';
import ErrorPage from './component/pages/Error';
import DsaMainContainer from './component/pages/dsaMain';
import CreateOrder from './component/pages/createOrder';
import {NavbarContainer} from './style/navbar'
import MernTest from './component/pages/mernTest';


const App = () => {
  return (
    <>
      <NavbarContainer/>
      <div className='page-container'>
      <Router>
        <Routes>
          <Route exact path='*' element={<ErrorPage/>} ></Route>
          <Route exact path='/' element={<HomePage/>} ></Route>
          <Route exact path='/dsamainview' element={<DsaMainContainer/>} ></Route>
          <Route exact path='/createOrder' element={<CreateOrder/>} ></Route>
          <Route exact path='/mernTest' element={<MernTest/>} ></Route>
        </Routes>
          {/* <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/planTour' Component={PlanTour} />
          <Route path='/liveLocation' Component={LiveLocation} /> */}
      </Router>
      </div>
    </>
  );
}

export default App;