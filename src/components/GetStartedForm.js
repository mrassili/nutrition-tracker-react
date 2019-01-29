import React from "react";
import styles from "./GetStartedForm.css";

class GetStartedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      genre: "",
      age: null,
      height: null,
      weight: null,
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.blurredContainer} />
        <div className={styles.container}>
          <h1>Please fill in the informations below to get started!</h1>
          <form className={styles.form}>
            <label htmlFor="fullName" className={styles.entryLabel}>
              Full Name :{/* eslint-disable-next-line */}
              <input type="text" id="fullName" autoFocus />
            </label>
            {/* eslint-disable-next-line */}
            <label htmlFor="genre" className={styles.entryLabel}>
              Genre :
              <select id="genre">
                <option>Male</option>
                <option>Female</option>
              </select>
            </label>
            <label htmlFor="age" className={styles.entryLabel}>
              Age :
              <input type="number" placeholder="e.g. 20" min="18" />
            </label>
            <label htmlFor="height" className={styles.entryLabel}>
              Height :
              <input type="number" id="height" placeholder="e.g. 150" min="0" />
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
              <input type="number" id="weight" placeholder="e.g. 160" min="0" />
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
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default GetStartedForm;
