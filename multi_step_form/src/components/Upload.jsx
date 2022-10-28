import React from "react";
import { Component } from "react";

class Upload extends Component {
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
        <div className="uploadtext">
          <h1>Please upload the documents</h1>
          <p style={{ fontSize: "15px" }}>
            Dear Customer, as a TRAI mandate we should require a proof of
            address <br />
            <span>documnet for the connection should be shifted</span>
          </p>
          <br />
          <br />
          <select name="document" id="doc">
            <option value="">Choose Document type</option>
            <option value="Aadhar">Aadhar Card</option>
            <option value="Driving">Driving Licence</option>
            <option value="Voter">Voter Card</option>
            <option value="Pan">Pan Card</option>
          </select>
          <br />
          <h3>
            Please upload a clear scanned copy of both front and back side of
            relevant document. In case the document is nor readable or clear,
            Shifting process may be delayed.
          </h3>
          <div class="form">
            <div class="grid">
              <div class="form-element">
                <input type="file" id="file-1" accept="image/*" />
                <label for="file-1" id="file-1-preview">
                  {" "}
                  Front Image
                  <img src="https://bit.ly/3ubuq5o" alt="" />
                  <div>
                    <span>+</span>
                  </div>
                </label>
              </div>
              <div class="form-element">
                <input type="file" id="file-2" accept="image/*" />
                <label for="file-2" id="file-2-preview">
                  {" "}
                  Back Image
                  <img src="https://bit.ly/3ubuq5o" alt="" />
                  <div>
                    <span>+</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div style={{ marginLeft: "300px" }}>
          {" "}
          <button className="Back" onClick={this.back}>
            « Back
          </button>
          <button className="proceed" onClick={this.continue}>
            Submit »
          </button>
        </div>
      </>
    );
  }
}

export default Upload;
