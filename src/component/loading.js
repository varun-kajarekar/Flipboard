import GrayImg from "./img/gray.png";
import light from "./img/light.png";
import React from "react";

const loading = (props) => {
  return (
    <div className="container">
      <h6 className="mt-4 fw-bolder">{props.catagoryname.toUpperCase()}</h6>
      <div className="row ">
        {[...Array(6)].map((e) => {
          return (
            <div className="col-md-4 my-4">
              <div className="card" aria-hidden="true">
                <a className="navbar-brand m-3 placeholder-glow" href="#">
                  {/* Company Logo  */}

                  <img
                    src={GrayImg}
                    alt="Logo"
                    width="40"
                    height="40"
                    className=" border border-1 d-inline-block align-text-center rounded-circle placeholder"
                  />
                  {/* Company Name */}
                  <span className="align-text-center mx-2 fw-semibold">
                    <span className="placeholder  col-4"></span>
                  </span>
                </a>
                {/* News Image */}
                <div className="p-2 placeholder-glow">
                  <img
                    src={GrayImg}
                    className="card-img-top border border-1 rounded placeholder"
                    alt="..."
                    height="300"
                  />
                </div>
                {/* News title */}
                <div className="card-body">
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-8"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                </div>
                <span className="navbar-brand m-3 placeholder-glow" href="#">
                  <div className="position-relative p-3">
                    <div className="position-absolute top-0 start-0 mt-1">
                      <img
                        src={light}
                        alt="Logo"
                        width="15"
                        height="15"
                        className="d-inline-block align-text-center placeholder"
                      />
                      <span className="align-text-center mx-2 fs-6 placeholder">
                        varun kajarekar
                      </span>
                    </div>

                    <div className="position-absolute top-0 end-0">
                      <a
                        href=""
                        className="text-decoration-none text-danger placeholder"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default loading;
