import React from 'react';
const Banner = () => {
  return (
    <>
    <section id="home" className="banner bg--cover" style={{backgroundImage:"url(assets/images/banner/bg.png)"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-12">
            <div className="banner__wrapper">
              <div className="banner__content text-start" data-aos="fade-up" data-aos-duration="800">
                <h1>
                  Take charge of your <span> brand new</span> future
                </h1>
                <p>
                  Access the world’s largest library of fullstack components and
                  build better websites in hours, not days.
                </p>
                <div className="btn-group">
                  <a href="#" className="default-btn default-btn2">Get Started</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="banner_right">
              <div className="banner_img">
                <img src="./assets/images/banner/banner-right.png" alt="banner"/>
                  <a href="https://www.youtube.com/embed/hAP2QF--2Dg" data-rel="lightcase" className="banner_icon">
                    <i className="fa-solid fa-play play"></i>
              </a>  
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Banner