import './CampoTexto.css';

export const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    );
}

export default CampoTexto;