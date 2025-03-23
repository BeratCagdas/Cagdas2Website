import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route,  Routes} from 'react-router-dom'
import Home from './pages/home'
import Indir from './pages/Indir'
import Kayit from './pages/Kayit'
import Siralama from './pages/Siralama'
import Tanitim from './pages/Tanitim'
import Navbar from './components/Navbar'
import Giris from './pages/Giris';  
import Userpanel from './pages/Userpanel'



function App() {


  return (
    <div>
     <Navbar />
  <Routes>
   <Route path='/' element={<Home></Home>} />
   <Route path='/indir' element={<Indir></Indir>} />
   <Route path='/kayit' element={<Kayit></Kayit>} />
   <Route path='/siralama' element={<Siralama></Siralama>} />
   <Route path='/tanitim' element={<Tanitim></Tanitim>} />
   <Route path='/giris' element={<Giris></Giris>} />
   <Route path='userpanel' element={<Userpanel></Userpanel>} />
  </Routes>
  </div>
  )
}

export default App
