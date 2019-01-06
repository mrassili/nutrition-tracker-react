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
            <label htmlFor="fullName">
              Full Name :
              <input type="text" id="fullName" />
            </label>
            {/* eslint-disable-next-line */}
            <label htmlFor="genre">
              Genre :
              <select id="genre">
                <option>Male</option>
                <option>Female</option>
              </select>
            </label>
            <label htmlFor="age">
              Age :
              <input type="number" placeholder="e.g. 20" min="18" />
            </label>
            <label htmlFor="height">
              Height :
              <input type="number" id="height" placeholder="e.g. 150" min="0" />
            </label>
            <label htmlFor="weight">
              Weight :
              <input type="number" id="weight" placeholder="e.g. 160" min="0" />
            </label>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default GetStartedForm;
