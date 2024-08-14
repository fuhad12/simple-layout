import React from 'react'
import classes from './Hero.module.css'
import img1 from '../../Assets/heroimg1.png'
import img2 from '../../Assets/heroimg2.png'
import img3 from '../../Assets/heroimg3.png'
import img4 from '../../Assets/heroimg4.png'
import img5 from '../../Assets/heroimg5.png'
import img6 from '../../Assets/heroimg6.png'
import img7 from '../../Assets/heroimg7.png'
import img8 from '../../Assets/heroimg8.png'
import img9 from '../../Assets/heroimg9.png'

const Hero = () => {
  return (
    <div className={classes.container}>
        <div className={classes.layouts}>
                    <div className={classes.sec1}>
                        <img src={img1} alt="img1" />
                    </div>
                     <div className="lay2">
                        <div className={classes.sec2}>
                            <div className="img2">
                                <img src={img2} alt="img2" /> 
                            </div>
                            <div className="img3">
                                <img src={img3} alt="img3" />
                            </div>
                        </div>
                    </div>
                    <div className="lay3">
                        <div className={classes.sec3}>
                            <div className="img4">
                                <img src={img4} alt="img4" />
                            </div>
                            <div className="img5">
                                <img src={img5} alt="img5" />
                            </div>
                        </div>
                    </div>
                    <div className="lay4">
                        <div className={classes.sec4}>
                            <div className="img6">
                                 <img src={img6} alt="img6" />
                            </div>
                            <div className="img7">
                                <img src={img7} alt="img7" />
                            </div>
                        </div>
                    </div>
                    <div className={classes.lay5}>
                        <div className="sec5">
                            <div className="img8">
                                <img src={img8} alt="img8" />
                            </div>
                            <div className="img9">
                                <img src={img9} alt="img9" />
                            </div>
                        </div>
            
                    </div>
            </div>
        </div>     
    
  )
}

export default Hero