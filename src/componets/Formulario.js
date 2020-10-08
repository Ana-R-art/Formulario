import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';


     const Formulario = () => {

      


        const {register, errors, handleSubmit} = useForm();

        const  [Entradas, setEntradas] = useState([])
    
        const onSubmit = (data, e) => {
            console.log(data);
            setEntradas([
                ...Entradas,
                data
            ])
            e.target.reset();
            
    }
    return (
        <Fragment>
            <h1>Registro</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
               

           <div class="row">
                     <div className ="col-md-3">
                        
                Nombre *
                <input
                    name="nombre"
                    type="text"
                    size="15"
                    maxLength="15"
                    placeholder="Ana"
                     className="form-control"
                        ref={
                            register({
                                required: {value: true, message: 'Campo Obligatorio'},
                                maxLength: {
                                    value: 15,
                                    message: 'No mas de 15 caracteres'
                                }
                            })
                        }
                 ></input>
                   
                        {    errors.nombre &&
                            <span className="text-danger text-small d-block mb-2">
                            {errors.nombre.message}
                            </span>
                        }
                        
                        </div>
                 </div>
                 <div class="row">
                <div className ="col-md-3">

                Apellido Materno *
                 <input
                    name="apellidoMaterno"
                     placeholder="Ramirez"
                     maxLength="20"
                    className="form-control my-2"
                    
                    ref={
                        register({
                            required: {value: true, message: 'Campo Obligatorio'},
                            minLenght: {value: 15,message: 'Minimo 15 letras'}
                        })
                    }
                 ></input>
                  {    errors.apellidoMaterno &&
                            <span className="text-danger text-small d-block mb-2">
                            {errors.apellidoMaterno.message}
                            </span>
                        }
                    </div>
                         </div>    
                      
                    <div class="row">
                         <div className ="col-md-3">

                Apellido Paterno *
                 <input
                    name="apellidoPaterno"
                    type="text"
                    maxLength="20"
                    placeholder="Perez"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true, message: 'Campo Obligatorio'},
                            minLenght: {value: 15,message: 'Minimo 15 letras'}
                        })
                        }   
                    ></input>
                    { errors.apellidoPaterno &&
                            <span className="text-danger text-small d-block mb-2">
                            {errors.apellidoPaterno.message}
                            </span>
                    }
                   </div>
                     </div> 
            <div class="row">
             <div className ="col-md-3"> 

                <input
                    name="telefono"
                    type="number"
                     placeholder="7621235620"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true, message: 'Campo Obligatorio'},
                            maxLength: {value: 15,message: 'solo se permiten 10 digitos'}
                        })
                    }
                 ></input>
                  {    errors.telefono &&
                            <span className="text-danger text-small d-block mb-2">
                            {errors.telefono.message}
                            </span>
                        }
                </div>
                  </div>        

                <div class="row">
                <div className ="col-md-3">
                <input
                    name="correo"
                     placeholder="alguien@gmail.com"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true, message: 'Campo Obligatorio'},
                            minLenght: {value: 15,message: 'Minimo 15 letras'}
                        })
                    }
                ></input>
                         { errors.correo &&
                            <span className="text-danger text-small d-block mb-2">
                            {errors.correo.message}
                            </span>
                        }
                        </div>
                        </div>
                 <button className="btn btn-primary">Enviar</button>
                 


            </form>
            <ul>
                {
                    Entradas.map(item =>
                        
                    <li> {item.nombre} -  - {item.apellidoMaterno} - {item.apellidoPaterno} - {item.telefono}-{item.correo}</li>
                    )     
                }
            </ul>
        </Fragment>
    )
}

export default Formulario;