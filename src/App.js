import React, { Component } from "react";
import "./App.css"; // Make sure to import your styles if you have any
import Photo from "./my-photo.jpg"; // Import the image

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Baha Bdira",
        bio: "No risk No Life!",
        imgSrc: Photo,
        profession: "Front-End developer",
      },
      show: false,
      interval: 0,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => {
      const show = !prevState.show;

      // Reset the interval counter to 0 when the profile is toggled
      const interval = show ? 0 : prevState.interval;

      // Clear the existing interval if it exists
      clearInterval(this.intervalId);

      // Start a new interval if the profile is toggled
      if (show) {
        this.intervalId = setInterval(() => {
          this.setState((prevState) => ({
            interval: prevState.interval + 1,
          }));
        }, 1000);
      }

      return {
        show,
        interval,
      };
    });
  };

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.intervalId);
  }

  render() {
    const { person, show, interval } = this.state;

    return (
      <div className="App">
        <h1>My Fourth React App</h1>
        <button onClick={this.handleToggle}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>
        )}
        {show && <p>Time interval since last mount: {interval} seconds</p>}
      </div>
    );
  }
}

export default App;
