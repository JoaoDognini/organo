import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='redes'>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='./imagens/fb.png' alt='Facebook'></img>
                        </a>

                    </li>
                    <li>
                        <a href='twitter.com' target='_blank'>
                            <img src='./imagens/tw.png' alt='Twitter'></img>
                        </a>

                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'>
                            <img src='./imagens/ig.png' alt='Instagram'></img>
                        </a>

                    </li>
                </ul>
            </div>
            <div>
                <img src='./imagens/logo.png' alt='Logo Organo'></img>
            </div>
            <div>
                <h2>Desenvolvido por Alura</h2>
            </div>
        </footer>
    )
}

export default Rodape;