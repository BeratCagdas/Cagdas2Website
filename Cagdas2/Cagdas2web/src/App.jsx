
import {Route,  Routes} from 'react-router-dom'
import Home from './pages/home'
import Kayit from './pages/Kayit'
import Siralama from './pages/Siralama'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Giris from './pages/Giris';  
import Userpanel from './pages/Userpanel'




function App() {


  return (
    <div>
     <Navbar />
     
  <Routes>
   <Route path='/' element={<Home></Home>} />
   <Route path='/kayit' element={<Kayit></Kayit>} />
   <Route path='/siralama' element={<Siralama></Siralama>} />
   <Route path='/giris' element={<Giris></Giris>} />
   <Route path='userpanel' element={<Userpanel></Userpanel>} />
  </Routes>
  <Footer />
  </div>
  )
}

export default App
