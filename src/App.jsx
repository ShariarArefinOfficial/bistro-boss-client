
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './CommonComponent/Footer'
import NavBar from './CommonComponent/NavBar'

function App() {
  const location = useLocation();
    console.log(location)
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

  return (
    <div>
      { noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      { noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default App
