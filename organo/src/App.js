
import { useState } from 'react';
import { Banner } from './componentes/Banner/Banner';
import { Formulario } from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionarNovo = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario aoCadastrarColaborador={colaborador => aoAdicionarNovo(colaborador)}></Formulario>
    </div>
  );
}

export default App;
