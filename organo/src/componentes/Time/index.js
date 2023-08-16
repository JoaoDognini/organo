import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const estiloSection = { backgroundColor: props.corSecundaria };
    const estiloTitulo = { borderColor: props.corPrimaria }

    return (
        props.colaboradores.length > 0  && <section className='time' style={estiloSection}>
            <h3 style={estiloTitulo}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    ></Colaborador>)}
            </div>
        </section>
    )
}

export default Time;