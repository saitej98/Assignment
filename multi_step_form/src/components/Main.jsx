import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import AllInfo from "./AllInfo";
import Appointment from "./Appointment";

export class StepForm extends Component {
  state = {
    step: 1,

    // step 1
    firstName: "",
    lastName: "",
    email: "",

    // step 2
    number: "",
    installation: "",
    shiftaddress: "",
    current: "",
  };

  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  showStep = () => {
    const {
      step,
      firstName,
      lastName,
      number,
      installation,
      current,
      pincode,
      shiftaddress,
      jobTitle,
      jobCompany,
      jobLocation,
    } = this.state;

    if (step === 1)
      return (
        <PersonalInfo
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          firstName={firstName}
          lastName={lastName}
        />
      );
    if (step === 2)
      return (
        <AllInfo
          firstName={firstName}
          lastName={lastName}
          number={number}
          installation={installation}
          current={current}
          shiftaddress={shiftaddress}
          pincode={pincode}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
        />
      );
    if (step === 3)
      return (
        <Appointment
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          jobCompany={jobCompany}
          jobLocation={jobLocation}
          prevStep={this.prevStep}
        />
      );
  };

  render() {
    const { step } = this.state;

    return (
      <>
        <h2>Step {step} of 3.</h2>
        {this.showStep()}
      </>
    );
  }
}

export default StepForm;
