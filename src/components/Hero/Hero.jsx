import './Hero.css'
import desktop from '../../assets/png/desktopView.png'
import ads from '../../assets/svg/adspost.svg'

const Hero = () =>{
    return(
        <div className="heroCont">
            <div className="heroDetails">
                <h1>The super fast color palettes generator!</h1>
                <p>Create the perfect palette or get inspired by thousands of beautiful color schemes.</p>
  
                <div className='heroButtons'>
                    <button className='sartBut'>Start the generator!</button>
                    <button className='explorButt'>Exploring trending palettes</button>
                </div>

                <img className='ads' src={ads} alt="" />
            </div>

            <div className='imageContainer'>
                <img className='deskImage' src={desktop} alt="" />
            </div>
        </div>
    )
  }
  
  export default Hero