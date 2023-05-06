import React, { useState } from "react";
import "../services/services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Services with more than 3 years of experiance.Providing quality
                work to client and companies.
              </p>

              <ul className="service__modal-service grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    I develop the use interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">Webpage development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    Design and mockups of products for comanies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Services with more than 3 years of experiance.Providing quality
                work to client and companies.
              </p>

              <ul className="service__modal-service grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    I develop the use interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">Webpage development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    Design and mockups of products for comanies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Services with more than 3 years of experiance.Providing quality
                work to client and companies.
              </p>

              <ul className="service__modal-service grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    I develop the use interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">Webpage development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__model-icon"></i>
                  <p className="service__modal-info">
                    Design and mockups of products for comanies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
