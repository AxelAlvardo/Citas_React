import React from 'react'

export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const{nombre,propietario,email,fecha,sintomas, id} = paciente;

    return (
        <div>
            <div className='w-full mt-5 bg-white shadow-md p-6 mb-5 rounded-lg'>
                <p className='font-bold uppercase mb-1'>Nombre : <span className='font-normal normal-case'>{nombre}</span></p>
                <p className='font-bold uppercase mb-1'>Propietario : <span className='font-normal normal-case'>{propietario}</span></p>
                <p className='font-bold uppercase mb-1'>Email : <span className='font-normal normal-case'>{email}</span></p>
                <p className='font-bold uppercase mb-1'>Fecha : <span className='font-normal normal-case'>{fecha}</span></p>
                <p className='font-bold uppercase mb-1'>Sintomas : <span className='font-normal normal-case'>{sintomas}</span></p>

                <div className='mt-5 lg:flex justify-between'>
                    <button className='bg-blue-600 py-2 px-8 font-bold text-white rounded w-full mr-3 mb-3'
                        onClick={()=>setPaciente(paciente)}
                    >
                        Editar
                    </button>
                    <button className='bg-red-600 py-2 px-8 font-bold text-white rounded w-full mb-3'
                        onClick={()=>{eliminarPaciente(id)}}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}
