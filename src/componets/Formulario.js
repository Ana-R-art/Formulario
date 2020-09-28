import React, { Fragment,useState} from 'react';
//import "./App.css";

const Formulario = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange=(event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value

        })
     }

     const enviarDatos = (event) => {
         event.preventDefault();
         console.log(datos.nombre + '' + datos.apellido)
     }

    return (
        <Fragment>
             <h1>Registro</h1>
             <form className="col" onSubmit={enviarDatos}>

                 
                 
                 <div class="row">
                     <div className ="col-md-3">
                     
                        <ul>
                            <input
                                 placeholder="Ingrese Nombre"
                                    className="form-control  "
                                        type="text"
                                            name="nombre"
                                                 onChange={handleInputChange}
                            ></input>
                     </ul>
                     </div>
                 </div>
                 
                 <div class="row">
                     <div className="col-md-3">
                     <ul>

                        <input
                            placeholder="Ingrese Apellido Materno"
                                className="form-control "
                                    type="text"
                                        name="apellido"
                                            onChange={handleInputChange}
                     ></input>
                     </ul>
                     </div>
                 </div>

                 <div class="row">
                     <div className ="col-md-3">
                     
                        <ul>
                            <input
                                 placeholder="Ingrese Apellido Paterno"
                                    className="form-control  "
                                        type="text"
                                            name="nombre"
                                                 onChange={handleInputChange}
                            ></input>
                     </ul>
                     </div>
                 </div>

                 <div class="row">
                     <div className ="col-md-3">
                     
                        <ul>
                            <input
                                 placeholder="Email"
                                    className="form-control  "
                                        type="text"
                                            name="nombre"
                                                 onChange={handleInputChange}
                            ></input>
                     </ul>
                     </div>
                 </div>

                 <div class="row">
                     <div className ="col-md-3">
                     
                        <ul>
                            <input
                                 placeholder="Telefono"
                                    className="form-control  "
                                        type="text"
                                            name="nombre"
                                                 onChange={handleInputChange}
                            ></input>
                     </ul>
                     </div>
                 </div>

                 <div class="row">
                 <div className="col-md-3">
                 <ul>
                        <button className="btn btn-primary" type="submit">Enviar</button>
                 </ul>
                </div>
                   </div>
                   ////
                
                   ////
              </form>
              <h3>{datos.nombre} - {datos.apellido}</h3>
              </Fragment>
            
    );
}

export default Formulario;