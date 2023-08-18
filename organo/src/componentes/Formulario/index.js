import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react'

export const Formulario = ({ times, aoCadastrarColaborador, aoCadastrarTime }) => {


    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const cadastrarColaborador = (event) => {
        event.preventDefault();
        aoCadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        })

        setCargo('');
        setNome('');
        setTime('');
        setImagem('');
    }

    const cadastrarTime = (event) => {
        event.preventDefault();
        aoCadastrarTime({
            nome: nomeTime,
            cor: corTime
        })

        setNomeTime('');
        setCorTime('');
    }

    return (
        <section className="formulario">
            <form onSubmit={(event) => cadastrarColaborador(event)}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome">
                </Campo>
                <Campo
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo">
                </Campo>
                <Campo
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Informe o endereço da imagem">
                </Campo>
                <ListaSuspensa
                    label="Time"
                    itens={times}
                    obrigatorio={true}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                ></ListaSuspensa>
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(event) => cadastrarTime(event)}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    valor={nomeTime}
                    aoAlterar={valor => setNomeTime(valor)}
                    obrigatorio
                    label="Nome do time"
                    placeholder="Digite o nome do time">
                </Campo>
                <Campo
                    type='color'
                    valor={corTime}
                    aoAlterar={valor => setCorTime(valor)}
                    obrigatorio
                    label="Cor"
                    placeholder="Escolha a cor do time">
                </Campo>
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;