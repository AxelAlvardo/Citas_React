import { useEffect, useState } from 'react'
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListaPacientes } from './components/ListaPacientes';

function App() {

  const INTIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const[pacientes, setPacientes] = useState(INTIAL);
  const[paciente, setPaciente] = useState({});
  
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  function eliminarPaciente(id){
    const pacientesActualizados = pacientes.filter((pacienteState)=>{
      return pacienteState.id !== id;
    })
    setPacientes(pacientesActualizados);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex px-12'>
        <Formulario 
          setPacientes={setPacientes}
          pacientes={pacientes} 
          paciente = {paciente}
        />
        <ListaPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}
export default App
