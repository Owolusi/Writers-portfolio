import React from 'react'
import Profile from "../../assets/home2.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"


const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className="home__img"/>
        <div className="home__content"> 
          <div className="home__data">
            <h1 className='home__title'>
              <span>
              I'm Owolusi Lucky <br/>
              </span>
              web Designer
            </h1>
            <p className="home__description">
            a passionate front-end developer weaving digital dreams into reality.<br/>            
             With an artistic flair for design and a code-crafter mindset, <br/>
             I bring ideas to life on the web. Let's embark on a journey where pixels meet purpose,<br/>
              creating immersive and user-centric experiences. <br/>
            Welcome to my digital realm!
            </p>
            <Link to='/about' className='button'>
              More About me<span className='button__icon'>
                <FaArrowRight
                />
              </span>
            </Link>

        <div className='color__block'>

        </div>
        </div>
</div>


  </section> 
  )
}

export default Home