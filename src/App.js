import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Navbar from './Component/navbars/nav1/Navbar';
import Home from "./Component/router/Home"
import About from "./Component/router/About"
import Services from "./Component/router/Services"
import Work from "./Component/router/Work"
import Blog from "./Component/router/Blog"
import Career from "./Component/router/Career"
// import Footer from "./Component/router/Footer"

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Navbar/> */}
  <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/about' Component={About}/>
          <Route exact path='/services' Component={Services}/>
          <Route exact path='/work' Component={Work}/>
          <Route exact path='/blog' Component={Blog}/>
          <Route exact path='/career' Component={Career}/>
  </Routes>
            {/* <Footer/> */}
  </BrowserRouter>
   </>
  );
}

export default App;
