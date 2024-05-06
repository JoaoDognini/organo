
import { useState } from 'react';
import { Formulario } from './componentes/Formulario';
import Banner from './componentes/Banner'
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuid } from 'uuid';
import { IColaborador } from './shared/interfaces/IColaborador';
import { ITime } from './shared/interfaces/ITime';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuid(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuid(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuid(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuid(),
      nome: 'DevOps',
      cor: '#E06B69',
    },
    {
      id: uuid(),
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuid(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuid(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ])

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

  function mudarCorTime(cor: string, id: string) {
    setTimes(times.map(time => {
      if (time.id === id) time.cor = cor;
      return time;
    }))
  }

  function deletarColaborador(id: string) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  const aoAdicionarNovo = (colaborador: IColaborador) => {
    const colaboradorExistente = colaboradores.find(x => x.nome === colaborador.nome && x.time === colaborador.time);
    if (!!colaboradorExistente) {
      toast.warn(`Colaborador já está cadastrado no time de ${colaborador.time}`);
    } else {
      toast.success('Novo colaborador cadastrado com sucesso!');
      colaborador.id = uuid();
      setColaboradores([...colaboradores, colaborador]);
    }
  }

  function cadastrarTime({ nome, cor }: ITime) {
    times.find(time => time.nome.toLowerCase() === nome.toLowerCase())
      ? toast.warn(`Time ${nome} já cadastrado.`)
      : setTimes([...times, { nome, cor, id: uuid() }]);
  }

  function favoritar(id: string) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png' textoAlternativo='O banner principal da página do Organo'></Banner>
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
          aoFavoritar={favoritar}
        ></Time>)}
      <Rodape></Rodape>
    </div>
  );
}

export default App;
