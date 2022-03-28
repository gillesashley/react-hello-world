import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className={`bg-blue-500 rounded-2xl`}>
        <h2 className={`text-2xl text-white`}>
          The time is: {this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}

export default Clock;
