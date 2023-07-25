import React, { useState, useEffect } from "react";
import "./styles.scss";
import Logo from "../../assets/logo.svg";

const ComponentOne = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <nav className="header-menu1">
          <div className="dropdown">
            <a href="#">Services</a>

            <div className="services-content">
              <div>
                <a href="#">Mobile App Development</a>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </div>
              <div>
                <a href="#">Web Development</a>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </div>
              <div>
                <a href="#">UI/UX Design</a>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </div>
              <div>
                <a href="#">AI Development</a>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </div>
              <div>
                <a href="#">Tech Consulting</a>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <a href="#">Hire Developers</a>

            <div className="dropdown-content hire-developers-content">
              <div>
                {" "}
                <div className="t-1">
                  <div>
                    <a href="#">Mobile App Developer</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">Node JS</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">Angular JS</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">Flutter</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">Laravel</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">Webflow</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="t-2">
                  <div>
                    <a href="#">WeWeb</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">Xano</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">Wordpress</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">Shopify</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">React JS</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">Chat GPT</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="t-3">
                  <div>
                    <a href="#">Bubble</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">Whisper</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">UI/UX Designer</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">Website Developer</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <a href="#">LangChain Developer</a>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="normal_navlinks">
            Case Study
          </a>

          <a href="#" className="normal_navlinks">
            Pricing Plan
          </a>

          <a href="#" className="normal_navlinks">
            No Code Tools
          </a>

          <a href="#" className="normal_navlinks">
            About Us
          </a>

          <a href="#" className="get-in-touch-btn">
            Get in Touch
          </a>
        </nav>

        <div
          className="ham-menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>

        {menuOpen === true ? (
          <>
            <div className="hidden-menu">
              <nav className="header-menu2">
                <div className="dropdown">
                  <a href="#">Services</a>

                  <div className="services-content">
                    <div>
                      <a href="#">Mobile App Development</a>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <a href="#">Web Development</a>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <a href="#">UI/UX Design</a>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <a href="#">AI Development</a>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <a href="#">Tech Consulting</a>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="dropdown">
                  <a href="#">Hire Developers</a>

                  <div className="dropdown-content hire-developers-content">
                    <div>
                      <div className="t-1">
                        <div>
                          <a href="#">Mobile App Developer</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">Node JS</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">Angular JS</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">Flutter</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">Laravel</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">Webflow</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div className="t-2">
                        <div>
                          <a href="#">WeWeb</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">Xano</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">Wordpress</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">Shopify</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">React JS</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">Chat GPT</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div className="t-3">
                        <div>
                          <a href="#">Bubble</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">Whisper</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">UI/UX Designer</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">Website Developer</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div>
                          <a href="#">LangChain Developer</a>
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" className="normal_navlinks">
                  Case Study
                </a>

                <a href="#" className="normal_navlinks">
                  Pricing Plan
                </a>

                <a href="#" className="normal_navlinks">
                  No Code Tools
                </a>

                <a href="#" className="normal_navlinks">
                  About Us
                </a>

                <a href="#" className="get-in-touch-btn">
                  Get in Touch
                </a>
              </nav>
            </div>
          </>
        ) : null}
      </header>
    </>
  );
};

export default ComponentOne;
