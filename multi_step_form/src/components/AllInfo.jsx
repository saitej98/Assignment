import React, { Component } from "react";

class AllInfo extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const {
      firstName,
      lastName,
      number,
      installation,
      current,
      shiftaddress,
      pincode,
      city,
      handleChange,
    } = this.props;
    return (
      <>
        <h2>Please Confirm your Address for Fibernet installation:</h2>
        <div className="parent">
          <div>
            First Name: <b>{firstName}</b>
            <br />
            <br />
            Last Name: <b>{lastName}</b>
            <br />
            City: <b>{city}</b>
            <br />
            Shifting Address: <b>{shiftaddress}</b>
            <br />
            <br />
            Pincode:<b>{pincode}</b>
            <br />
            <br />
            <button className="Back" onClick={this.back}>
              « Back
            </button>
            <button className="Next" onClick={this.continue}>
              Confirm and Continue »
            </button>
          </div>
          <div className="mapdiv">
            <iframe
              title="gmap"
              name="gMap"
              className="map"
              src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            ></iframe>
          </div>
        </div>
      </>
    );
  }
}

export default AllInfo;
