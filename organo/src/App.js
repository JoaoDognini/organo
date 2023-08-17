
import { useState } from 'react';
import { Banner } from './componentes/Banner/Banner';
import { Formulario } from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]
  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionarNovo = (colaborador) => {
    const colaboradorExistente = colaboradores.find(x => x.nome === colaborador.nome && x.time === colaborador.time);
    if (!!colaboradorExistente) {
      toast.warn(`Colaborador já está cadastrado no time de ${colaborador.time}`);
    } else {
      toast.success('Novo colaborador cadastrado com sucesso!');
      setColaboradores([...colaboradores, colaborador]);
    }
  }

  return (
    <div className="App">
      <Banner></Banner>
      <ToastContainer
        autoClose={3000}
        position='top-center'
        pauseOnHover
        theme='dark'
      ></ToastContainer>
      <Formulario times={times.map(time => time.nome)} aoCadastrarColaborador={colaborador => aoAdicionarNovo(colaborador)}></Formulario>
      {times.map(time =>
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        ></Time>)}
      <Rodape></Rodape>
    </div>
  );
}

export default App;
