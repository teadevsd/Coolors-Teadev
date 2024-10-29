import './Header.css'
import logo from '/logo.svg'

const Header = () =>{
    return(
      <div className='header'>

        <img src={logo} alt="" />

        <div className='rightNav'> 
            <nav>Tools</nav>
            <nav className='goPro'>Go Pro</nav>
            <nav>Sign in</nav>
            <button>Sign up</button>
        </div>


      </div>
    )
  }
  
  export default Header