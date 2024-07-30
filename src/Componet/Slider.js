import React from "react";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to={1} />
          <li data-target="#carouselExampleCaptions" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="1.jpg" className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Welcome to iCoder</h2>
              <p>Technology News, Development and Artificial intelligence</p>
              <button className="btn btn-primary">
                <a
                  className="text-white"
                  href="https://en.wikipedia.org/wiki/Web_development"
                  target="_blank"
                >
                  Web Development
                </a>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>The Best Coding Blog</h2>
              <p>Technology News, Development and Artificial intelligence</p>
              <button className="btn btn-success">
                <a
                  className="text-white"
                  href="https://en.wikipedia.org/wiki/Artificial_intelligence"
                  target="_blank"
                >
                  Artificial_intelligence
                </a>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Award winning Blog</h2>
              <p>Technology News, Development and Artificial intelligence</p>
              <button className="btn btn-danger">
                <a
                  className="text-white"
                  href="https://en.wikipedia.org/wiki/Technology"
                  target="_blank"
                >
                  Technology
                </a>
              </button>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Slider;
