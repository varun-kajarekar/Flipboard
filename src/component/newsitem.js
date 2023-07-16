import React, { Component } from "react";
import cnbc from "./flipboard.png";
import light from "./light.png";
export class newsitem extends Component {
  render() {
    let { title, companyName, imgurl, publishedAt, articleurl } = this.props;
    let iurl="";
    imgurl
      ? (iurl = imgurl)
      : (iurl = "https://i.ytimg.com/vi/LQ18gp18xG0/maxresdefault.jpg");

    return (
      <div className="card" style={{ width: "23rem", height: "40rem" }}>
        <a className="navbar-brand m-3 " href="#">
          <img
            src={cnbc}
            alt="Logo"
            width="40"
            height="40"
            className=" border border-1 d-inline-block align-text-center rounded-circle "
          />
          <span className="align-text-center mx-2 fw-semibold">
            {companyName}
          </span>
        </a>
        <div className="p-2">
          <img
            src={iurl}
            className="card-img-top border border-1 rounded"
            alt="..."
            height="300"
          />
        </div>

        <div className="card-body">
          <p className="card-text fs-5 fw-medium">{title}</p>
        </div>

        <span className="navbar-brand m-3 " href="#">
          <div className="position-relative p-3">
            <div className="position-absolute top-0 start-0 mt-1">
              <img
                src={light}
                alt="Logo"
                width="15"
                height="15"
                className="d-inline-block align-text-center"
              />
              <span className="align-text-center mx-2 fs-6 ">
                {publishedAt.slice(0, 10)}
              </span>
            </div>
            <div className="position-absolute top-0 end-0">
              <a href={articleurl} className="text-decoration-none text-danger">
                Read more
              </a>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default newsitem;