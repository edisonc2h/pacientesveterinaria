import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/nuevaCita';
import ListaCitas from './components/listaCitas';

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
         titulo='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
            crearNuevaCita={this.crearNuevaCita}
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas={this.state.citas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
