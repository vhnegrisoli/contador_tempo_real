import React, { Component } from "react";
import axios from "axios";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      quantidade: 0,
      usuario: "",
      backEnd: "http://localhost:8080/api/log",
    };
  }

  onChangeUsuario = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeIncrement = (e) => {
    e.preventDefault();
    const { quantidade } = this.state;
    this.setState({ quantidade: quantidade + 1 });
  };

  postToApi = async (e) => {
    e.preventDefault();
    const { usuario, quantidade, backEnd } = this.state;
    await axios.post(backEnd, { usuario, quantidade });
  };

  render() {
    const { quantidade } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.postToApi}>
          <div>
            <input name="usuario" onChange={this.onChangeUsuario} />
          </div>
          <div>
            <button onClick={this.onChangeIncrement}>
              Incrementar: {quantidade}
            </button>
          </div>
          <div>
            <button>Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Counter;
