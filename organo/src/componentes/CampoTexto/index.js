import './CampoTexto.css';

export const CampoTexto = ({ label, placeholder, valor, aoAlterar, obrigatorio = false }) => {
    const aoDigitar = (evento) => {
        aoAlterar(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitar} required={obrigatorio} placeholder={placeholder}></input>
        </div>
    );
}

export default CampoTexto;