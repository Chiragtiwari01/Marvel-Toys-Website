import React from "react";

const About = () => {
return (
  <>
    <section class="about1">
      <div class="main">
        <div class="tulip"></div>
        <div class="about-text">
          <h1>About Us</h1>
          <h5>
            College <span>Student</span>
          </h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <button type="button" >
            <a className="son"
              href="https://www.instagram.com/chiragtiwari.b02/?hl=en"
            >
              let's Talk
            </a>
          </button>
        </div>
      </div>
    </section>
    <nav className="navbar">
      <div className="navbar_text">
        <div className="logo">
          <img src="/images/chirag2.ico" alt="logo" />
        </div>
        <ul className="navbar_ul">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/Menu">menu</a>
          </li>
          <li>
            <a href="/Contact">contact us</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);
};

export default About;