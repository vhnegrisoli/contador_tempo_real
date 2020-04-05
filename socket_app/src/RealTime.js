import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class RealTime extends Component {
  constructor() {
    super();
    this.state = {
      data: false,
      backEnd: "http://localhost:8080",
    };
  }

  componentDidMount() {
    const { backEnd } = this.state;
    const socket = socketIOClient(backEnd);
    socket.on("chat message", (data) => {
      this.setState({ data: data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div>
          <h2>Usuário: {data.user ? data.user : "Sem usuário"} </h2>
        </div>
        <div>
          <h3>Valor atual: {data ? data.qtd : 0}</h3>
        </div>
      </div>
    );
  }
}

export default RealTime;
