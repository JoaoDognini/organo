import { IColaborador } from '../../shared/interfaces/IColaborador';
import { ITime } from '../../shared/interfaces/ITime';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react'

interface FormularioProps {
    times: string[],
    aoCadastrarColaborador: (colaborador: IColaborador) => void,
    aoCadastrarTime: (time: ITime) => void
}

export const Formulario = ({ times, aoCadastrarColaborador, aoCadastrarTime }: FormularioProps) => {


    const [id, setId] = useState('')
    const [favorito, setFavorito] = useState(false)
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [data, setData] = useState('');

    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#000000');

    const cadastrarColaborador = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        aoCadastrarColaborador({
            id,
            favorito,
            nome,
            cargo,
            imagem,
            time,
            data
        })

        setId('');
        setFavorito(false);
        setCargo('');
        setNome('');
        setTime('');
        setImagem('');
        setData('');
    }

    const cadastrarTime = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        aoCadastrarTime({
            id: id,
            nome: nomeTime,
            cor: corTime
        })

        setId('');
        setNomeTime('');
        setCorTime('#000000');
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
                    placeholder="Digite seu nome"
                />
                <Campo
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                />
                <Campo
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                />
                <Campo
                    label='Data de entrada'
                    placeholder=''
                    type='date'
                    valor={data}
                    aoAlterar={valor => setData(valor)}
                />
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
                    placeholder="Digite o nome do time"
                />
                <Campo
                    type='color'
                    valor={corTime}
                    aoAlterar={valor => setCorTime(valor)}
                    obrigatorio
                    label="Cor"
                    placeholder="Escolha a cor do time"
                />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;