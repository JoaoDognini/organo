import './Campo.css';

interface CampoProps {
    label: string;
    valor: string;
    type?: 'text' | 'password' | 'color' | 'date' | 'email' | 'number';
    placeholder: string;
    obrigatorio?: boolean;
    aoAlterar: (valor: string) => void
}

export const Campo = ({ type = 'text', label, placeholder, valor, aoAlterar, obrigatorio = false }: CampoProps) => {
    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterar(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={aoDigitar}
                required={obrigatorio}
                placeholder={placeholder}
            ></input>
        </div>
    );
}

export default Campo;