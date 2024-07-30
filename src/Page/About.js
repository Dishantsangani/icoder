import React from "react";
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
function About() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              i Coder's Idea: A Game-Changer Poised to Revolutionize Coding
              Education
            </h2>
            <p className="lead justify-content-center">
              i Coder's idea has the potential to be a true game-changer in the
              world of coding education. By making learning accessible,
              engaging, and community-driven, i Coder is set to revolutionize
              the way people approach coding and technology
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src="about-1.jpg" alt="" />
          </div>
        </div>

        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-2">
            <h1 className="display-5 fw-bold">React Js</h1>
            <p className="col-md-8 fs-2">
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components by Facebook Inc. It
              is maintained by Meta and a community of individual developers and
              companies. React can be used to develop single-page, mobile, or
              server-rendered applications with frameworks like Next.js.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Read More!
            </button>
          </div>
        </div>

        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">We Started i Coder in 1877</h2>
            <p className="lead justify-content-center">
              i Coder, as described in the search results, was founded by Ammar
              Bandukwala, Kyle Carberry, and John Andrew Entwistle after they
              graduated from high school, primarily to address challenges in
              remote software development collaboration. Their journey began
              much later than 1877, as they moved to Austin and started Coder
              after their earlier experiences with Minecraft projects.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="img-fluid" src="about-2.jpg" alt="" />
          </div>
        </div>

        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-2">
            <h1 className="display-5 fw-bold"> MERN stack </h1>
            <p className="col-md-8 fs-2">
              The MERN stack is a collection of technologies that help
              developers build robust and scalable web applications using
              JavaScript. The acronym “MERN” stands for MongoDB, Express, React,
              and Node.js, with each component playing a role in the development
              process. MongoDB serves as a document-oriented database that can
              efficiently store data in JSON format
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Read More!
            </button>
          </div>
        </div>

        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">First Featurette Heading.</h2>
            <p className="lead justify-content-center">
              we delve into the origins of Coder and the pivotal project that
              brought its founders together. From their early days of developing
              Minecraft plugins to the challenges of remote collaboration,
              discover how their shared experiences shaped the vision for Coder
              and set the stage for its innovative solutions in the software
              development landscape.
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src="about-3.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
