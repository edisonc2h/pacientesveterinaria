import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/nuevaCita';

class App extends Component{
  state = {
    citas: []
  }

  crearNuevaCita = datos => {
    const citas = [...this.state.citas, datos];
    this.setState({
      citas
    })
  }

  render(){
    return(
      <div className="container">
        <Header 
         titulo='Adminstrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
            crearNuevaCita={this.crearNuevaCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
