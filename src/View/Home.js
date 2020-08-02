import * as React from 'react';
import ComponentTopo from './../Components/Topo/Topo';
import ComponentFooter from './../Components/Footer/Footer';
import ComponentDestaque from './../Components/Destaque/Destaque';

import imagemArma from './../assets/imagem/arma.png';
import imagemGuangue from './../assets/imagem/gangue.png';
import imagemMapa from './../assets/imagem/mapa.png';

class Home extends React.Component {
    componentDidMount() { }

    render() {
        return (
            <>
                <ComponentTopo />

                <ComponentDestaque
                    titulo={'Aproveite na TV.'}
                    subTitulo={'Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos.'}
                    imagem={imagemArma}
                    altImagem={'imagem tv'}
                    padrao={true}
                />
                <ComponentDestaque
                    titulo={'Baixe séries para assistir offline.'}
                    subTitulo={'Salve seus títulos favoritos e sempre tenha algo para assistir.'}
                    imagem={imagemGuangue}
                    altImagem={'imagem mobile'}
                    padrao={false}
                />
                <ComponentDestaque
                    titulo={'Assista quando quiser.'}
                    subTitulo={'Assista no celular, tablet, smart TV ou notebook sem pagar a mais por isso.'}
                    imagem={imagemMapa}
                    altImagem={'imagem mobile e tv'}
                    padrao={true}
                />
                <ComponentFooter />
            </>
        );
    }
}

export default Home;