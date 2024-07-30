import React from "react";
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";

function Service() {
  return (
    <>
      <Navbar />

      <div class="container marketing mt-5">
        <div className="row">
          <div className="col-lg-4 ">
            <img
              className="bd-placeholder-img rounded-circle"
              width={200}
              height={140}
              src="Reactbg.png"
              role="img"
            />
            <h2 className="fw-normal">React Js</h2>
            <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components by Facebook Inc.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle"
              width={220}
              height={140}
              src="Wordpress.png"
            />
            <h2 className="fw-normal">WordPress</h2>
            <p>
              WordPress was mainly used to create blogs. Fast-forward to today,
              the software has improved, and you can create any type of website
              you want.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle"
              width={140}
              height={140}
              src="Wixstudio.png"
            />
            <h2 className="fw-normal"> Wix Studio</h2>
            <p>
              Wix Studio is a flexible, end-to-end platform for agencies and
              enterprises who offer bespoke and scalable web creation services..
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Other Para  */}
      <hr class="featurette-divider mt-5 mb-5" />
      <div className="container mt-5">
        <div className="row featurette mb-5">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Importance of Industrial IoT Devices in Various Industries
              <span className="text-body-secondary">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              The Industrial Internet of Things (IIoT) has rapidly transformed
              industries across the globe, ushering in an era of unprecedented
              connectivity, automation, and data-driven decision-making. IIoT
              has opened up new avenues for optimization, efficiency, and safety
              in various sectors by interconnecting industrial devices,
              machines, sensors, and systems..
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              src="iot.png"
            />
          </div>
        </div>

        <hr class="featurette-divider mt-5 mb-5" />
        {/* Part 2 */}
        <div className="row featurette mt-5">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Virtualization relies on software to simulate hardware
              functionality and create a virtual computer system.
              <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead">
              Server, storage, and virtualization solutions combine physical
              hardware with software to create flexible and efficient IT
              environments. By virtualizing servers and storage, organizations
              can optimize resource utilization, improve agility, and reduce
              costs. Key components include hypervisors, server hardware,
              storage systems, and networking. Popular solutions range from
              hyper-converged infrastructure (HCI) for rapid deployment to
              software-defined storage (SDS) for scalability.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              src="server.png"
            />
          </div>
        </div>
        <hr class="featurette-divider mt-5 mb-5" />

        {/* Part 3 */}
        <div className="row featurette mb-5">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Data Analytics Services
            </h2>
            <p className="lead">
              Data Analytics Services involve the collection, processing, and
              analysis of data to extract meaningful insights that inform
              business decisions. These services typically include data mining,
              predictive analytics, data visualization, and reporting. They help
              organizations identify trends, uncover patterns, and make
              data-driven decisions to improve operational efficiency, enhance
              customer experience, and drive business growth..
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={550}
              src="Dataanalytics.png"
            />
          </div>
        </div>
        <hr class="featurette-divider mt-5 mb-5" />
        {/* Part 4 */}
        <div className="row featurette mt-5 mb-3">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              CLOUD ENGINEERING
            </h2>
            <p className="lead">
              Cloud computing is redefining business transformation journeys. As
              the key enabler for global organizations to seamlessly connect,
              monitor, and streamline their operations – anywhere, anytime –
              cloud offers more flexible and enhanced access to engineering
              resources and ensures a faster time-to-results. Cloud solutions
              today help optimize and drive cutting-edge operations by storing
              all data in a centralized repository and offer real-time and
              predictive analytics to improve productivity.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              src="Cloud.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Service;
