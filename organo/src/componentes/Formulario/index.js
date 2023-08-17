import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react'

export const Formulario = (props) => {


    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoCadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        })

        // setCargo('');
        // setNome('');
        // setTime('');
        // setImagem('');
    }

    return (
        <section className="formulario">
            <form onSubmit={(event) => aoSalvar(event)}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome">
                </CampoTexto>
                <CampoTexto
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo">
                </CampoTexto>
                <CampoTexto
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Informe o endereço da imagem">
                </CampoTexto>
                <ListaSuspensa
                    label="Time"
                    itens={props.times}
                    obrigatorio={true}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                ></ListaSuspensa>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;