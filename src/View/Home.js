import * as React from 'react';
import ComponentDestaque from './../Components/Destaque/Destaque';

import imagemArma from './../assets/imagem/arma.png';
import imagemGuangue from './../assets/imagem/gangue.png';
import imagemMapa from './../assets/imagem/mapa.png';

class Home extends React.Component {
    componentDidMount() { }

    render() {
        return (
            <>
                <ComponentDestaque
                    titulo={'Armas escondidas'}
                    subTitulo={'Ache as melhores armas escondidas no mapa que não são vendidas nas lojas'}
                    imagem={imagemArma}
                    altImagem={'imagem arma'}
                    padrao={true}
                />
                <ComponentDestaque
                    titulo={'Guangue'}
                    subTitulo={'Dicas de como cuidar da sua gangue'}
                    imagem={imagemGuangue}
                    altImagem={'imagem gangue'}
                    padrao={false}
                />
                <ComponentDestaque
                    titulo={'Mapa'}
                    subTitulo={'Localização de locois no mapa'}
                    imagem={imagemMapa}
                    altImagem={'imagem mapa'}
                    padrao={true}
                />
            </>
        );
    }
}

export default Home;