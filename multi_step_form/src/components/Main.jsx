import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import AllInfo from "./AllInfo";
import Appointment from "./Appointment";
import Ekyc from "./Ekyc";
import Upload from "./Upload";

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
    city: "",
  };

  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1,
    });
  };
  substep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 0.1,
    });
  };
  fullstep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 0.9,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
 prevsubStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 0.1,
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
      city,
      shiftaddress,
    } = this.state;

    if (step === 1)
      return (
        <PersonalInfo
          nextStep={this.substep}
          handleChange={this.handleChange}
          firstName={firstName}
          lastName={lastName}
        />
      );
    if (step === 1.1)
      return (
        <AllInfo
          firstName={firstName}
          lastName={lastName}
          number={number}
          installation={installation}
          current={current}
          shiftaddress={shiftaddress}
          city={city}
          pincode={pincode}
          prevStep={this.prevsubStep}
          nextStep={this.fullstep}
        />
      );
    if (step === 2)
      return <Appointment prevStep={this.prevStep} nextStep={this.nextStep} />;

    if (step === 3)
      return <Ekyc prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 4)
      return <Upload prevStep={this.prevStep} nextStep={this.nextStep} />;
  };

  render() {
    const { step } = this.state;

    return (
      <>
        <h2>Step {step} of 4.</h2>
        {this.showStep()}
      </>
    );
  }
}

export default StepForm;
