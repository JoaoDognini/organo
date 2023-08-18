
import { useState } from 'react';
import { Banner } from './componentes/Banner/Banner';
import { Formulario } from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'DevOps',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ])

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nome: 'João',
      cargo: 'Dev',
      imagem: 'https://github.com/JoaoDognini.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'João 1',
      cargo: 'Dev',
      imagem: 'https://github.com/JoaoDognini.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'João 2',
      cargo: 'Dev',
      imagem: 'https://github.com/JoaoDognini.png',
      time: times[2].nome
    }
  ]);

  function mudarCorTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) time.cor = cor;
      return time;
    }))
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    console.log(id);
  }

  const aoAdicionarNovo = (colaborador) => {
    const colaboradorExistente = colaboradores.find(x => x.nome === colaborador.nome && x.time === colaborador.time);
    if (!!colaboradorExistente) {
      toast.warn(`Colaborador já está cadastrado no time de ${colaborador.time}`);
    } else {
      toast.success('Novo colaborador cadastrado com sucesso!');
      setColaboradores([...colaboradores, colaborador]);
    }
  }

  function cadastrarTime({nome, cor}) {
    setTimes([...times, {nome, cor, id: uuidv4() }]);
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
      <Formulario
        times={times.map(time => time.nome)}
        aoCadastrarColaborador={colaborador => aoAdicionarNovo(colaborador)}
        aoCadastrarTime={cadastrarTime}
      ></Formulario>
      {times.map(time =>
        <Time
          key={time.nome}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorTime}
        ></Time>)}
      <Rodape></Rodape>
    </div>
  );
}

export default App;
