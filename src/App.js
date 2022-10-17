import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import AdminLogin from './component/AdminLogin';
import Services from './component/Service';
import Image from './component/Image';
import UserHome from './component/UserHome';
import PageNotFound from './component/PageNotFound';


const App=()=>{
  return(
    <>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark navbar fixed-top navbar-expand-lg " >
     <div class="container-fluid">
        <a class="navbar-brand" href="#">Hello World</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/about" class="nav-link">About Us</Link>
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link">Contact Us</Link>
        </li>
        <li class="nav-item">
        <Link to="/service" class="nav-link">Services</Link>
        </li>
        <li class="nav-item">
        <Link to="/image" class="nav-link">Image</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>

<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/service' element={<Services/>}></Route>
    <Route path='/image' element={<Image/>}></Route>
    <Route path='/adminlogin' element={<AdminLogin/>}></Route>
    <Route path='/userhome' element={<UserHome/>}></Route>
    <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </>
  )
}
export default App;
