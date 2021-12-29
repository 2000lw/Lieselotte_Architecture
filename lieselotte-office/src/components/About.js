import React from "react";
import "../CSS/About.css";
import aboutImg from "../img/About.png";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am a 21-year old student doing a double Masters degree:
              </p>
              <p className="about__text p__color">
                <i>
                  Master of Science - MSc: Engineering and Architecture:
                  architecture design and construction detail (2021-2023)
                </i>{" "}
                at University of Ghent
              </p>
              <p className="about__text p__color">
                <i>
                  Master of Science - MSc: Actuarial and Financial Engineering
                </i>{" "}
                at KU Leuven (2021-2024)
              </p>
              <p className="about__text p__color">
                I have my own company (Nataqua) providing private swimming
                lessons for both children and adults. As hobbies I like to read,
                spend time with friends and family and visit exhibitions and
                musea to stay up to date.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
