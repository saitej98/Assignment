import React, { Component } from "react";

class Appointment extends Component {
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
        <h2>Please Proceed to Book an Appointment</h2>
        <input type="date" />
        <label htmlFor="">
          <input type="checkbox" /> I hereby agree to the shifting charges
        </label>
        <p style={{ color: "red" }}>
          Note : Shifting Charges of Rs.650/- will be applicable
        </p>
        <button className="Back" onClick={this.back}>
          « Back
        </button>
        <button className="Next" onClick={this.continue}>
          Submit »
        </button>
      </>
    );
  }
}

export default Appointment;
