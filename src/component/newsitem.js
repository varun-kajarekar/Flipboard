import React, { Component } from "react";
import cnbc from "./cnbc.png"
export class newsitem extends Component {
  render() {
    let { title, companyName ,imgurl} = this.props;
    return (
      <div className="card" style={{ width: "23rem" ,height:"38rem"}}>
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
          src={imgurl}
          className="card-img-top border border-1 rounded"
          alt="..."
          height="300"
        /> 

        </div>
        
        <div className="card-body">
          <p className="card-text fs-5 fw-medium">{title}</p>
        </div>
      </div>
    );
  }
}

export default newsitem;
