import React from 'react'
import Info from '../../components/info';
import Stats from '../../components/stats';
import { FaDownload } from 'react-icons/fa';
import CV from "../../assets/Tech-Cv.pdf";
import "./About.css";

const About = () => {
  return (

    <main className='section container'>
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">
              Personal Infos
            </h3>
            <ul className='info__list grid'>
              <Info />
              </ul>

              <a href={CV} download='' className='button'>
                Dowmload CV {''}
                <span className="button__icon">
                  <FaDownload/>
                  </span>
              </a>

          </div>

        <div className="stats grid">
          <Stats />

        </div>

        </div>
      </section>
      <div className="seperator">Seperator</div>
    </main>
  );
};

export default About