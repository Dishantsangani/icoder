import React from "react";
import Navbar from "../Componet/Navbar";
import Slider from "../Componet/Slider";
import Footer from "../Componet/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="container my-4">
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  World
                </strong>
                <h3 className="mb-0">Global Conferences</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto justify-content-center">
                  "Global Conferences are Large Gatherings of People From Around
                  The World Who Share a Common Interest"
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/World"
                  className="btn btn-primary mt-2 mr-2 w-50 "
                  target="_blank"
                >
                  Read More !
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width={200}
                  height={250}
                  src="thumb1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">
                  Design
                </strong>
                <h3 className="mb-0">Learn Designing</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto justify-content-center">
                  "There's a Wealth of Online Resources and Tutorials Waiting To
                  Equip you With The Skills To Bring Your Designs To Life"
                </p>
                <a
                  href="https://www.coursera.org/articles/how-to-learn-graphic-design"
                  className="btn btn-primary mt-2 mr-2 w-50 "
                  target="_blank"
                >
                  Read More !
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width={200}
                  height={250}
                  src="Design.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-danger">
                  FrontEnd
                </strong>
                <h3 className="mb-0">Bootstrap Templates</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto justify-content-center">
                  "Bootstrap is a popular open-source front-end framework used
                  for developing responsive and mobile-first websites."
                </p>
                <a
                  href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                  className="btn btn-primary mt-1  w-50 "
                  target="_blank"
                >
                  Read More !
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width={200}
                  height={250}
                  src="Bootstrap4.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-warning">
                  Python
                </strong>
                <h3 className="mb-0">Learn Python</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto justify-content-center">
                  " Python, a Beginner-Friendly Language Perfect for Building
                  Cool Programs, Automating Tasks, and More"
                </p>
                <a
                  href="https://www.python.org/"
                  className="btn btn-primary mt-2 mr-2 w-50 "
                  target="_blank"
                >
                  Read More !
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width={200}
                  height={250}
                  src="Python.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="position-relative overflow-hidden p-3 p-md-2 m-md-2 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-3">
          <h1 className="display-4 font-weight-normal">
            Better Solutions For Your Business
          </h1>
          <p className="lead font-weight-normal">
            Better Solutions For Your Business provides tailored strategies to
            enhance efficiency and drive growth. Our expert team leverages
            cutting-edge technology and industry best practices to deliver
            customized solutions that address your unique challenges.
          </p>
          <a className="btn btn-outline-secondary" href="#">
            Coming soon
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block" />
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
      </div>
      {/*  */}
      <div className="container px-4 py-4">
        <h2 className="pb-2 border-bottom">Artificial intelligence</h2>
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-2">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-body-emphasis">
              AI benefits and dangers
            </h2>
            <p className="text-body-secondary">
              AI has a range of applications with the potential to transform how
              we work and our daily lives. While many of these transformations
              are exciting, like self-driving cars, virtual assistants, or
              wearable devices in the healthcare industry, they also pose many
              challenges..
            </p>
            <a
              href="https://www.tableau.com/data-insights/ai/advantages-disadvantages"
              className="btn btn-primary btn-lg"
              target="_blank"
            >
              Read More!
            </a>
          </div>
          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#collection" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  1. Reactive machines
                </h4>
                <p className="text-body-secondary">
                  Machines built in this way don’t possess any knowledge of
                  previous events but instead only “react” to what is before
                  them in a given moment.
                </p>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#gear-fill" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  2. Limited memory machines
                </h4>
                <p className="text-body-secondary">
                  Machines with limited memory possess a limited understanding
                  of past events.
                </p>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#speedometer" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  3. Theory of mind machines
                </h4>
                <p className="text-body-secondary">
                  Machines that possess a “theory of mind” represent an early
                  form of artificial general intelligence.
                </p>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#table" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  4. Self-aware machines
                </h4>
                <p className="text-body-secondary">
                  This is what most people mean when they talk about achieving
                  AGI. Currently, this is a far-off reality.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="row mb-2  mt-5">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary-emphasis">
                  TRANSPORTATION
                </strong>
                <h5 className="mb-0">
                  Advancing the Journey to Software Defined Vehicles
                </h5>
                <p className="card-text mb-auto">
                  Today, software plays a critical role in cars controlling
                  various aspects of their operation,
                </p>
                <a
                  href="https://www.ltts.com/brochure/software-defined-vehicles"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                  target="_blank"
                >
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  src="l&t.png"
                  width={250}
                  height={230}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success-emphasis">
                  Healthcare Providers
                </strong>
                <h5 className="mb-0">Disease diagnosis and treatment</h5>
                <p className="mb-auto">
                  Using AI to process data, like medical images, and develop
                  disease models can potentially help clinicians make diagnoses
                  with more precision.
                </p>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8754556/"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                  target="_blank"
                >
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width={200}
                  height={250}
                  src="diagnose.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
