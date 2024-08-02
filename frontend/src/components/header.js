import React from "react";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div id="header" className="header-area absulate-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-3">
            <div className="header-top-left">
              <ul>
                <li className="has-dropdown">
                  <a href="#">USD</a>
                  <ul>
                    <li>
                      <a href="#">URO</a>
                    </li>
                    <li>
                      <a href="#">FJD</a>
                    </li>
                    <li>
                      <a href="#">GBP</a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a href="#">English</a>
                  <ul>
                    <li>
                      <a href="#">Arabic</a>
                    </li>
                    <li>
                      <a href="#">French</a>
                    </li>
                    <li>
                      <a href="#">Bangla</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-sm-9">
            <div className="header-top-contact">
              <ul>
                <li>
                  <a href="mailto:yourname@email.com">
                    <i className="fal fa-envelope"></i>
                    support@adventuregene.com
                  </a>
                </li>
                <li>
                  <a href="tel:+008012345678">
                    <i className="fal fa-phone-alt"></i>012 345 6789
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-area">
        <div className="container">
          <div className="row navigation-bg">
            <div className="col-lg-2 col-sm-4 col-4">
              <div className="site-logo">
                <a href="index.html">
                  <img src="img/logo.png" alt="GENE" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-4 col-2 order-two">
              <div className="main-menu-wrap">
                <Navbar />
              </div>
              <div className="mobile-menu-area"></div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 order-one">
              <div className="login-cart">
                <ul>
                  <li>
                    <a href="login.html">
                      <i className="far fa-user"></i>LOGIN
                    </a>
                  </li>
                  <li className="cart-mega">
                    <a
                      href="#ec-side-cart"
                      className="ec-header-btn ec-side-toggle"
                    >
                      <div className="header-icon">
                        <i className="fal fa-shopping-basket"></i>
                        <small>(0)</small>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
