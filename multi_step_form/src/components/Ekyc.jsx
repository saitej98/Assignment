import React, { Component } from "react";

class Ekyc extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <>
        <label htmlFor="">
          <div className="flex">
            <div>
              {" "}
              <input className="dot" type="radio" name="kyc" />
            </div>
            <div>
              <h1> eKYC using Aadhar No</h1>
              <p>(instant approval,faster processing)</p>
            </div>
          </div>
          <div className="flex">
            <div>
              {" "}
              <input className="dot" type="radio" name="kyc" />{" "}
            </div>
            <div>
              {" "}
              <h1>Upload a scanned copy of your documents</h1>
              <p>(48-72 hrs for document approval)</p>
            </div>
          </div>
        </label>
      </>
    );
  }
}

export default Ekyc;
