import CampoTexto from '../CampoTexto';
import './Formulario.css';

export const Formulario = () => {
    return (
        <section className="formulario">
            <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"></CampoTexto>
            </form>
        </section>
    )
}

export default Formulario;