import React from "react";
import styles from "./GetStartedForm.css";
import { navigate } from "@reach/router";

class GetStartedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      gender: "",
      age: null,
      height: null,
      weight: null,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fullName, gender, age, height, weight } = this.state;
    if (fullName && gender && age && height && weight) {
      navigate("/overview", {
        state: { fullName, gender, age, height, weight },
      });
    } else {
      alert("All fields are required!");
    }
  }

  handleNameChange(e) {
    this.setState({
      fullName: e.target.value,
    });
  }

  handleGenderChange(e) {
    this.setState({
      gender: e.target.value,
    });
  }

  handleAgeChange(e) {
    this.setState({
      age: e.target.value,
    });
  }

  handleHeightChange(e) {
    this.setState({
      height: e.target.value,
    });
  }

  handleWeightChange(e) {
    this.setState({
      weight: e.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.blurredContainer} />
        <div className={styles.container}>
          <h1>Please fill in the informations below to get started!</h1>
          <form className={styles.form} onSubmit={(e) => this.handleSubmit(e)}>
            <label htmlFor="fullName" className={styles.entryLabel}>
              Full Name :{/* eslint-disable */}
              <input
                type="text"
                id="fullName"
                autoFocus
                onChange={(e) => this.handleNameChange(e)}
              />
              {/* eslint-enable */}
            </label>
            {/* eslint-disable-next-line */}
            <label htmlFor="gender" className={styles.entryLabel}>
              Gender :
              <select id="gender" onBlur={(e) => this.handleGenderChange(e)}>
                <option>Male</option>
                <option>Female</option>
              </select>
            </label>
            <label htmlFor="age" className={styles.entryLabel}>
              Age :
              <input
                type="number"
                placeholder="e.g. 20"
                min="18"
                onChange={(e) => this.handleAgeChange(e)}
              />
            </label>
            <label htmlFor="height" className={styles.entryLabel}>
              Height :
              <input
                type="number"
                id="height"
                placeholder="e.g. 150"
                min="0"
                onChange={(e) => this.handleHeightChange(e)}
              />
              <div className={styles.unitToggle}>
                <fieldset className={styles.radioSwitch}>
                  <legend>Height Unit</legend>
                  <input type="radio" name="height" id="ft" />
                  <label htmlFor="ft" className="switchLabel">
                    Feet
                  </label>

                  <input type="radio" name="height" id="cm" />
                  <label htmlFor="cm" className="switchLabel">
                    Cm
                  </label>
                </fieldset>
              </div>
            </label>
            <label htmlFor="weight" className={styles.entryLabel}>
              Weight :
              <input
                type="number"
                id="weight"
                placeholder="e.g. 160"
                min="0"
                onChange={(e) => this.handleWeightChange(e)}
              />
              <div className={styles.unitToggle}>
                <fieldset className={styles.radioSwitch}>
                  <legend>Height Unit</legend>
                  <input type="radio" name="weight" id="lbs" />
                  <label htmlFor="lbs" className="switchLabel">
                    Lbs
                  </label>

                  <input type="radio" name="weight" id="kg" />
                  <label htmlFor="kg" className="switchLabel">
                    Kg
                  </label>
                </fieldset>
              </div>
            </label>
            <button className={styles.submitBtn} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default GetStartedForm;
