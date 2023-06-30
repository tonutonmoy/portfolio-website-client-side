

import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'

function App() {
 

  return (
<div>
  <Navbar></Navbar>
  <Outlet></Outlet>
  <Footer></Footer>
</div>
  )
}

export default App
