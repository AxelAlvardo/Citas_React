import React from 'react'
import { useState, useEffect } from 'react'
import { ErrorDiv } from './ErrorDiv';

export const Formulario = ({ pacientes, setPacientes, paciente }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

    function handleSubmit(e) {
        e.preventDefault();
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        }
        setError(false);

        const pacienteOBJ = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if (paciente.id) {
            //EDITANDO EL REGISTRO
            pacienteOBJ.id = paciente.id;
            const pacientesActualizados = pacientes.map((pacienteState)=>{
                return pacienteState.id === paciente.id ? pacienteOBJ : pacienteState;
            })

            setPacientes(pacientesActualizados);
        }else{
            //NUEVO REGISTRO 
            pacienteOBJ.id = Date.now();
            setPacientes([...pacientes, pacienteOBJ]);
        }
        
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

    return (
        <div className='md:w-1/2 lg:2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
            <p className='font-bold text-lg text-center mt-5'>Añade Pacientes y <span className='font-black text-indigo-600'>Administralos</span></p>

            <form className='bg-white shadow-md rounded-md mt-5 py-10 px-5 mb-7'
                onSubmit={handleSubmit}
            >

                {error &&
                    <ErrorDiv>
                        <p>Todos los campos son obligatorios</p>
                    </ErrorDiv>
                }

                <div className='mb-4'>
                    <label htmlFor="mascota" className='block font-bold text-gray-700 uppercase'>Nombre Mascota :</label>
                    <input className='border-2 py-3 px-2 w-full mt-3 rounded-lg placeholder:text-gray-400' type="text" id='mascota' placeholder='Nombre de la Mascota' value={nombre}
                        onChange={(e) => { setNombre(e.target.value) }}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="propietario" className='block font-bold text-gray-700 uppercase'>Nombre Propietario :</label>
                    <input className='border-2 py-3 px-2 w-full mt-3 rounded-lg placeholder:text-gray-400' type="text" id='propietario' placeholder='Nombre del Propietario' value={propietario}
                        onChange={(e) => { setPropietario(e.target.value) }}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="email" className='block font-bold text-gray-700 uppercase'>Email :</label>
                    <input className='border-2 py-3 px-2 w-full mt-3 rounded-lg placeholder:text-gray-400' type="email" id='email' placeholder='Ejemplo: correo@correo.com' value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="fecha" className='block font-bold text-gray-700 uppercase'>Fecha :</label>
                    <input className='border-2 py-3 px-2 w-full mt-3 rounded-lg placeholder:text-gray-400' type="date" id='fecha' value={fecha}
                        onChange={(e) => { setFecha(e.target.value) }}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="sintomas" className='block font-bold text-gray-700 uppercase'>Síntomas :</label>
                    <textarea className='border-2 py-3 px-2 w-full mt-3 rounded-lg placeholder:text-gray-400 resize-none' type="text" id='sintomas' placeholder='Describe los Síntomas...' value={sintomas}
                        onChange={(e) => { setSintomas(e.target.value) }}
                    />
                </div>

                <input type='submit' className='cursor-pointer uppercase text-center text-white p-3 bg-indigo-600 w-full rounded-md font-bold hover:bg-indigo-500'
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                >
                </input>
            </form>
        </div>
    )
}
