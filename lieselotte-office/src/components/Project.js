import React from "react";
import "../CSS/Project.css";
import Project1 from "../img/portfolio-1.jpg";
import Project2 from "../img/portfolio-2.jpg";
import Project3 from "../img/portfolio-3.jpg";
import Project4 from "../img/portfolio-4.jpg";
import Project5 from "../img/portfolio-5.jpg";
import Project6 from "../img/portfolio-6.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Portfolio</h1>
        <p className="heading p__color">
          Work from Bacherlor Degree (BARCH 1/2/3)
        </p>
        <p className="heading p__color">Work from Masters Degree (MARCH 1/2)</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text"> BARCH 1 PROJECT 1</h5>
                <h4 className="project__text">the sound of music</h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">BARCH 1 PROJECT 2</h5>
                <h4 className="project__text">Rubik's home</h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">BARCH 1 PROJECT 3</h5>
                <h4 className="project__text">The WallGate</h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">BARCH 3 PROJECT 2</h5>
                <h4 className="project__text">
                  PLUSliving
                </h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project5} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">BARCH 3 PROJECT 3</h5>
                <h4 className="project__text">Service centre</h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project6} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">MARCH 1 PROJECT 1</h5>
                <h4 className="project__text">Beyond the bridge</h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
