import React from "react";

const Header = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_context">
          <div className="banner_bt">
            <a href="" className="btn btn-smart">
              DELIVERY NOW
            </a>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-6 p-25">
              <h1>Marvel Universe</h1>
              <p>
                It is about the fictional universe that is shared by some of the
                world's most famous superheroes based on Marvel Comics. The MCU
                has given us a whole new world to imagine, full of metallic
                suits, super-soldiers, demi-gods, assassins and some extremely
                sharp wit.
              </p>
              <p>
                This article is all about the movies which shaped the MCU, the
                characters which defined it and the changes the franchise went
                through since its birth in 2008. And as the MCU grows in the
                future, so shall this article.
              </p>
            </div>
            <div className="uni_image">
              <img src="/images/chirag3.jpg" alt="universe" />
            </div>
          </div>
        </div>
      </div>
      <div className="clients">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="client">
                <h1>1200</h1>
                <p>Awesome Replies</p>
              </div>
            </div>
            <div className="col-3">
              <div className="client">
                <h1>25</h1>
                <p>Awesome Products</p>
              </div>
            </div>
            <div className="col-3">
              <div className="client">
                <h1>1468</h1>
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className="col-3">
              <div className="client">
                <h1>2002</h1>
                <p>Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop">
        <div className="container">
          <div className="shop_text">
            <div>
              <h1>
                FREE DELIVERY IN THE <br></br>
                <div className="edit">SHOPPING</div> OF 100 USD OR ABOVE
              </h1>
              <div className="shop_btn">
                <a href="" className="vsmart">
                  CONTINUE SHOPPING
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chi">
        <footer className="foot">
          <div className="cont">
            <div className="row-23">
              <div className="foot-col">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">about us</a>
                    <a href="#">our service</a>
                    <a href="#">privacy policy</a>
                    <a href="#">affiliate program</a>
                  </li>
                </ul>
              </div>
              <div className="foot-col">
                <h4>Get Help</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                    <a href="#">shipping</a>
                    <a href="#">returns</a>
                    <a href="#">order status</a>
                  </li>
                </ul>
              </div>
              <div className="foot-col">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://www.instagram.com/chiragtiwari.b02/?hl=en">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/chirag-tiwari-355aa41b7">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <nav className="navbar">
        <div className="navbar_text">
          <div className="logo">
            <img src="/images/chirag2.ico" alt="logo" />
          </div>
          <ul className="navbar_ul">
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="/Menu">menu</a>
            </li>
            <li>
              <a href="/Contact">contact us</a>
            </li>
            <li>
              <a href="/About">about</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
