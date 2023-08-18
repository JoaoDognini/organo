import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    const css = { backgroundColor: corDeFundo };

    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const configFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                size={25}
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)}
            ></AiFillCloseCircle>
            <div className='cabecalho' style={css}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart {...configFavorito} color='red' />
                        : <AiOutlineHeart {...configFavorito} />
                    }
                </div>
            </div>
        </div>)
}

export default Colaborador