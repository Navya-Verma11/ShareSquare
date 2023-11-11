import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Resources from './components/resources';
import Collab from './components/Collab';
import Opportunities from './components/Opportunities';
import Blogs from './components/blogs';
import Roundtable from './components/roundtable';
import './assets/Home.css';

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/resources' element={<Resources />} />
          <Route exact path='/collab' element={<Collab />} />
          <Route exact path='/opportunities' element={<Opportunities />} />
          <Route exact path='/blogs' element={<Blogs />} />
          <Route exact path='/roundtable' element={<Roundtable />} />
          {/* <Route exact path='/create' element={<Create isLoggedIn={isLoggedIn}/>}/>
          <Route exact path='/login' element={<Login setIsLoggedIn={ setIsLoggedIn }/>} /> */}
          {/* <Route exact path='/signup' element={<Signup />} /> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App