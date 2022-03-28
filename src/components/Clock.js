import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={`bg-blue-500`}>
        <h2 className={`text-2xl text-white`}>
          The time is: {this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}

export default Clock;
