import React from 'react'
import { Paciente } from './Paciente'

export const ListaPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className='md:w-1/2 lg:3/5 md:overflow-y-scroll h-screen'>
            <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
            <p className='font-bold text-lg text-center mt-5'>Edita, Elimina a tus <span className='font-black text-indigo-600'>Pacientes</span></p>

            <div className='md:px-10'>
                {
                    pacientes.map(paciente => <Paciente
                        paciente={paciente} key={paciente.id}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />)
                }
            </div>
        </div>
    )
}
