import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

import { Route,Routes } from 'react-router-dom';
import Csdragon from './components/Csdragon';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/csdragon' element={<Csdragon/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;