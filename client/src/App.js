import React from 'react'
import Search from './components/Search';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Contact from './components/Contact';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path={"/" && "/main"}  element={<Main />}/>
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
