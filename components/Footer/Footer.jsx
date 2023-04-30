import React from 'react'
const Footer = () => {
  return (
    <>
        <footer className="footer bg--cover">
      <div className="container">
        <div className="footer__wrapper padding-top border-className border-bottom padding-bottom-footer">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="footer__about">
                <p>
                  We are a group of merchants. With more than 30,000 members worldwide since 2008, we believe in assisting traders in conducting profitable trades.
                </p>
                <ul className="social">
                  <li className="social__item">
                    <a href="#" className="social__link"
                      ><i className="fab fa-twitter"></i
                    ></a>
                  </li>
                  <li className="social__item">
                    <a href="#" className="social__link"
                      ><i className="fab fa-instagram"></i
                    ></a>
                  </li>
                  <li className="social__item">
                    <a href="#" className="social__link"
                      ><i className="fab fa-linkedin-in"></i
                    ></a>
                  </li>
                  <li className="social__item">
                    <a href="#" className="social__link"
                      ><i className="fab fa-facebook-f"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer__links">
                <div className="row g-4">
                  <div className="col-lg-4 col-6">
                    <div className="footer__links-item">
                      <div className="footer__links-title">
                        <h5>Contact</h5>
                      </div>
                      <div className="footer__links-content">
                        <ul className="footer__linklist">
                          <li className="footer__linklist-item">
                            <a href="mailto:info@daytraders.com">info@daytraders.com</a>
                          </li>
                          <li className="footer__linklist-item">
                            <a href="tel:+012-345-678-90">+012-345-678-90</a>
                          </li>
                          <li className="footer__linklist-item">
                            <a href="0#">St. London Maeren 01928</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="footer__links-item">
                      <div className="footer__links-title">
                        <h5>Resources</h5>
                      </div>
                      <div className="footer__links-content">
                        <ul className="footer__linklist">
                          <li className="footer__linklist-item">
                            <a href="#">API Docs</a>
                          </li>
                          <li className="footer__linklist-item">
                            <a href="#">Tutorial Video</a>
                          </li>
                          <li className="footer__linklist-item">
                            <a href="#">User Guide</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="footer__links-item">
                      <div className="footer__links-title">
                        <h5>Help & Contact</h5>
                      </div>
                      <div className="footer__links-content">
                        <ul className="footer__linklist">
                          <li className="footer__linklist-item">
                            <a href="about.html">Support</a>
                          </li>
                          <li className="footer__linklist-item">
                            <a href="blog.html">Terms & Conditions</a>
                          </li>
                          <li className="footer__linklist-item">
                            <a href="blog.html">Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copyright padding-top-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-12">
              <a href="index.html" className="footer-logo">
                <img src="./assets/images/logo/logo.png" alt="footer_logo"/>
              </a>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="footer_menu text-center">
                <nav>
                  <ul>
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <a href="index.html">Features</a>
                    </li>
                    <li>
                      <a href="index.html">Pricing </a>
                    </li>
                    <li>
                      <a href="index.html">Resources</a>
                    </li>
                    <li>
                      <a href="index.html">Tools</a>
                    </li>
                    <li>
                      <a href="index.html">About</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="text-center copyright_className py-4">
                <p className="mb-0">© 2023 DayTraders . Designed by TheTork</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </footer> 
    </>
  )
}

export default Footer