import React, {Component} from 'react';
import uuid from 'uuid';

class NuevaCita extends Component{
    state = {
        cita: {
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        },
        error: false
    }

    handleChange = e => {
        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;

        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error: true
            });

            return;
        }

        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        this.props.crearNuevaCita(nuevaCita);

    }

    render(){
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una cita.
                    </h2>
                    <form
                    onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre Mascota"
                                name="mascota"
                                onChange={this.handleChange}
                                value={this.state.mascota}
                                />
                            </div>
                        </div> {/* form-gruop */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueno
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre Dueno"
                                name="propietario"
                                onChange={this.handleChange}
                                value={this.state.propietario}
                                />
                            </div>
                        </div> {/* form-gruop */}

                        <div className="form-group row">
                            <label className="col-sm-2 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                type="date"
                                className="form-control"
                                name="fecha"
                                onChange={this.handleChange}
                                value={this.state.fecha}
                                />
                            </div>
                        
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                type="time"
                                className="form-control"
                                name="hora"
                                onChange={this.handleChange}
                                value={this.state.hora}
                                />
                            </div>
                        </div> {/* form-gruop */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                className="form-control"
                                name="sintomas"
                                placeholder="Describe los sintomas"
                                onChange={this.handleChange}
                                value={this.state.sintomas}
                                ></textarea>
                            </div>
                        </div> {/* form-gruop */}

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva Cita" />
                    </form>
                </div>
            </div>
        )
    }
}

export default NuevaCita;