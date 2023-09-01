import { IColaborador } from '../../shared/interfaces/IColaborador';
import { ITime } from '../../shared/interfaces/ITime';
import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

interface TimeProps {
    time: ITime,
    colaboradores: IColaborador[],
    mudarCor: (evento: string, id: string) => void,
    aoDeletar: (id: string) => void,
    aoFavoritar: (id: string) => void
}

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }: TimeProps) => {
    const estiloSecao = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }
    const estiloTitulo = { borderColor: time.cor }

    return (
        (colaboradores.length > 0) ?
            <section className='time' style={estiloSecao}>
                <input value={time.cor} type='color' className='input-cor' onChange={evento => mudarCor(evento.target.value, time.id)}></input>
                <h3 style={estiloTitulo}>{time.nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map(colaborador => {
                        return (
                            <Colaborador
                                key={colaborador.nome}
                                colaborador={colaborador}
                                aoDeletar={aoDeletar}
                                corDeFundo={time.cor}
                                aoFavoritar={aoFavoritar}
                            ></Colaborador>
                        );
                    })}
                </div>
            </section>
            : <></>
    )
}

export default Time;