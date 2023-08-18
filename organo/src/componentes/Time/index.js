import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    const estiloSection = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, '0.6') };
    const estiloTitulo = { borderColor: props.cor }

    return (
        (props.colaboradores.length > 0) ?
            <section className='time' style={estiloSection}>
                <input value={props.cor} type='color' className='input-cor' onChange={evento => props.mudarCor(evento.target.value, props.nome)}></input>
                <h3 style={estiloTitulo}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador =>
                        <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={props.cor}
                        aoDeletar={props.aoDeletar}
                        ></Colaborador>)}
                </div>
            </section>
            : ''
    )
}

export default Time;