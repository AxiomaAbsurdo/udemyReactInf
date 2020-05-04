import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Funcion de Hola
// function Hello(props) {
//   return <h1>Hola {props.title}</h1>;
// }

// const Hello = (props) => <h1>Hola {props.title}</h1>;

class TituloPorDefecto extends Component {
  render() {
    return <h5>{this.props.textDef}</h5>;
  }
}

TituloPorDefecto.defaultProps = {
  textDef: "Veo esto que es un texto por defecto",
};

class Hello extends Component {
  render() {
    return <h2>Hola {this.props.title}</h2>;
  }
}

class Text extends Component {
  render() {
    const {
      isActivated,
      arrayOfNumbers,
      arrayObj,
      multiply,
      textConHTML,
    } = this.props;

    const textoSegunValorBoolena = isActivated ? "On" : "Off";

    //MANIPULAR VALORES DE UNA ARRAY CON MAP ANTES DE RENDERIZAR
    const mappedNumbers = arrayOfNumbers.map(multiply);

    const mappedObj = arrayObj.fruta1;

    return (
      <div>
        <p> {this.props.text} </p>
        <p> {this.props.number} </p>
        <p> {textoSegunValorBoolena} </p>
        <p> {mappedNumbers.join("-")} </p>
        <p> {mappedObj} </p>
        {textConHTML}
        <TituloPorDefecto textDef="Esto si lo borras veras el texto por defecto ve al archivo y borralo" />
      </div>
    );
  }
}

class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 1 };
    setInterval(()=>{
      this.setState({
        contador : this.state.contador + 1
      })
    }, 1000)
  }
  render() {
    //const contador = 0;
    //return <span>{this.state.contador}</span>;
    return <ContadorNumero numero={this.state.contador}/>
  }
}

class ContadorNumero extends Component {
  render () {
  return <span>{this.props.numero}</span>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Esto es props" />
          <Text
            number={2}
            multiply={(number) => number * 4}
            text="esto es un prop de texto"
            isActivated
            arrayOfNumbers={[1, 2, 3]}
            arrayObj={{ fruta1: "banana", fruta2: "manzana" }}
            textConHTML={<h1> Esto lo paso como HTML </h1>}
          />
        </header>
        <body>
          <div>
            <p>Propagando el STATE de nuestros componentes</p>
            <p>Primer componente con STATE</p>
            <Contador />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
