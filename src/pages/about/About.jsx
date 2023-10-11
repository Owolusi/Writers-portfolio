import React from 'react'
import info from '../../components/info';
import stats from '../../components/stats';

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
              <info />
              <a href='' className='button'>
                Dowmload CV <span className="button__icon">
                  
                </span>
              </a>

            </ul>
          </div>

        </div>
      </section>
    </main>
  );
};

export default About