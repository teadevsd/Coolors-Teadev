import './Companies.css'
import Disney from '../../assets/png/disney.png'
import Dreamwork from '../../assets/svg/dreamworks.svg'
import Warner from '../../assets/png/warner.png'
import Netflix from '../../assets/png/netflix.png'
import Airbnb from '../../assets/png/airbnb.png'
import Dropbox from '../../assets/png/dropbox.png'
import Hasbro from '../../assets/png/hasbro.png'
import Wing from '../../assets/png/wing.png'
import Ea from '../../assets/png/ea.png'
import Apple from '../../assets/png/apple.png'
import Microsoft from '../../assets/svg/microsoft.svg'


const Companies =() =>{
    
    return(
        <>
            <div className='compDetails'>
            <p>Used by 5+ million designers and by top companies</p>

            <div className='compImg'> 
                <img src={Disney} alt="Disney logo" />
                <img src={Dreamwork} alt="Dreamwork logo" />
                <img src={Warner} alt="Warner logo" />
                <img src={Netflix} alt="Netflix logo" />
                <img src={Airbnb} alt="Airbnb logo" />
                <img src={Dropbox} alt="Dropbox logo" />
                <img src={Hasbro} alt="Hasbro logo" />
                <img src={Wing} alt="Wing logo" />
                <img src={Ea} alt="Ea logo" />
                <img src={Apple} alt="Apple logo" />
                <img src={Microsoft} alt="Microsoft logo" />
            </div>
            </div>
        </>
    )
   
}

export default Companies