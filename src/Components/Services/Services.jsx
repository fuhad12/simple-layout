import React from 'react'
import classes from './Services.module.css'
import sport from '../../Assets/sport.png'
import mountain from '../../Assets/mountain-bike 1.png'
import wedding from '../../Assets/wedding-photography 1.png'
import star from '../../Assets/Star 1.png'
const Services = () => {
  return (
    <div className={classes.container}>
      <h2>Online Experiences</h2>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>

      <div className={classes.cards}>
        <div className={classes.sportcard}>
            <button>SOLD OUT</button>
            <div className={classes.sportimg}>
            <img src={sport} alt="sport" />
            </div>
            <div className={classes.sportflex}>
            <div className={classes.star} >
              <img src={star} alt="star" />
              </div>
              <div className={classes.text}>
              <p>5.0 (6).USA</p>
              </div>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span>From $50</span> / person</p>
        </div>
        <div className={classes.weddingcard}>
        <button>ONLINE</button>
         <div className={classes.sportimg}>
        <img  src={wedding} alt="wedding" />
        </div>
        <div className={classes.sportflex}>
        <div className={classes.star} >
              <img src={star} alt="star" />
              </div>
              <div className={classes.text}>
               <p>5.0 (30).USA</p>
              </div>
            </div>
            <p>Learn wedding photography
            </p>
            <p><span>From $50</span> / person</p>
        </div>
        <div className={classes.mountaincard}>
          <div className={classes.sportimg}>
        <img src={sport} alt="mountain" />
          </div>
            <div className={classes.sportflex}>
              <div className={classes.star} >
              <img src={star} alt="star" />
              </div>
              <div className={classes.text}>
                <p>4.8 (2).USA</p>
              </div>
            </div>
            <p>Group Mountain Biking</p>
            <p><span>From $50</span> / person</p>
        </div>
      </div>
    </div>
  )
}

export default Services