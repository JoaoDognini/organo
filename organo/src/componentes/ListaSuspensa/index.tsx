import './ListaSuspensa.css';

interface ListaSuspensaProps {
    label: string,
    itens: string[],
    valor: string,
    obrigatorio: boolean,
    aoAlterar: (valor: string) => void,
}

const ListaSuspensa = ({ label, itens, valor, aoAlterar, obrigatorio = false }: ListaSuspensaProps) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                onChange={evento => aoAlterar(evento.target.value)}
                value={valor}
                required={obrigatorio}
            >
                <option value=''></option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;