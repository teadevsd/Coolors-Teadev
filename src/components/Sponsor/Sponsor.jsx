import './Sponsor.css'


const Sponsor = (props) => {
    return(
        <section className='sponsorCont'>
            <div className='cardCont'>
                <img src={props.image} alt="" />
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </section>
    )
}

export default Sponsor