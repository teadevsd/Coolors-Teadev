import Hero from "../../components/Hero/Hero"
import Sponsor from "../../components/Sponsor/Sponsor"
import iOS from '../../assets/png/apple.png'
import Android from '../../assets/png/android.png'
import Figma from '../../assets/svg/figma.svg'
import Chrome from '../../assets/png/chrome.png'
import Adobe from '../../assets/png/adobe.png'
import './Home.css'
import Companies from "../../components/Companies/Companies"
import Footer from "../../static/Footer/Footer"



const Home = () =>{
  return(
      <div>
          <Hero />
          
          <div className="sponsorContainer">
          <Sponsor title = 'iOS App' image = {iOS} text ='Create, browse and save palettes on the go' />
          <Sponsor title = 'Android App' image = {Android} text ='Thousands of palettes in your pocket' />
          <Sponsor title = 'Android App' image = {Figma} text ='All palettes right in your workspace' />
          <Sponsor title = 'Chrome Extension' image = {Chrome} text ='Get and edit a palette every new tab' />
          <Sponsor title = 'Adobe Extension' image = {Adobe} text ='Use coolors with your favorite tools' />
          </div>

          <Companies />
          <Footer />
      </div>
  )
}

export default Home