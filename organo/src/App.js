
import { useState } from 'react';
import { Banner } from './componentes/Banner/Banner';
import { Formulario } from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      nome: 'DevOps',
      cor: '#E06B69',
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ])
  
  const [colaboradores, setColaboradores] = useState([
    {
      nome: 'João',
      cargo: 'Dev',
      imagem: 'https://github.com/JoaoDognini.png',
      time: times[1].nome
    },
    {
      nome: 'João 1',
      cargo: 'Dev',
      imagem: 'https://github.com/JoaoDognini.png',
      time: times[2].nome
    },
    {
      nome: 'João 2',
      cargo: 'Dev',
      imagem: 'https://github.com/JoaoDognini.png',
      time: times[2].nome
    }
  ]);

  function mudarCorTime(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) time.cor = cor;
      return time;
    }))

  }

  function deletarColaborador() {
    console.log('Deletando');
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
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorTime}
        ></Time>)}
      <Rodape></Rodape>
    </div>
  );
}

export default App;
