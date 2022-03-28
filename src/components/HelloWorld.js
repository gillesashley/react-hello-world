import React from "react";
import Clock from "./Clock";

function formatUser(props) {
  return user.firstname + " " + user.secondname;
}

function getGreeting(user) {
  if (user) {
    return `Hello Mr. ${formatUser(user)}`;
  } else {
    return `User Not found!`;
  }
}

const user = {
  firstname: "Gilles",
  secondname: "Ashley",
};

class HelloWorld extends React.Component {
  render() {
    return (
      <div className={`container py-2 px-3`}>
        <h3 className={`bg-violet-400 text-3xl text-white`}>
          {getGreeting(user)}
        </h3>
        <h4 className={`font-serif text-2xl text-red-500`}>
          {this.props.name}
        </h4>
        <Clock />
      </div>
    );
  }
}

export default HelloWorld;
