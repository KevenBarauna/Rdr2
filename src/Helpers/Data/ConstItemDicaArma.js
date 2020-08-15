import imagemDica01Img01 from './../../assets/imagem/DicaArmas/id-01-img-01.png';
import imagemDica01Img02 from './../../assets/imagem/DicaArmas/id-01-img-02.png';
import imagemDica01Img03 from './../../assets/imagem/DicaArmas/id-01-img-03.png';
import imagemDica01Img04 from './../../assets/imagem/DicaArmas/id-01-img-04.png';

import imagemDica02Img01 from './../../assets/imagem/DicaArmas/id-02-img-01.png';
import imagemDica02Img02 from './../../assets/imagem/DicaArmas/id-02-img-02.png';
import imagemDica02Img03 from './../../assets/imagem/DicaArmas/id-02-img-03.png';
import imagemDica02Img04 from './../../assets/imagem/DicaArmas/id-02-img-04.png';

import imagemDica03Img01 from './../../assets/imagem/DicaArmas/id-03-img-01.png';
import imagemDica03Img02 from './../../assets/imagem/DicaArmas/id-03-img-02.png';
import imagemDica03Img03 from './../../assets/imagem/DicaArmas/id-03-img-03.png';
import imagemDica03Img04 from './../../assets/imagem/DicaArmas/id-03-img-04.png';

import imagemDica04Img01 from './../../assets/imagem/DicaArmas/id-04-img-01.png';
import imagemDica04Img02 from './../../assets/imagem/DicaArmas/id-04-img-02.png';
import imagemDica04Img03 from './../../assets/imagem/DicaArmas/id-04-img-03.png';
import imagemDica04Img04 from './../../assets/imagem/DicaArmas/id-04-img-04.png';

import imagemDica05Img01 from './../../assets/imagem/DicaArmas/id-05-img-01.png';
import imagemDica05Img02 from './../../assets/imagem/DicaArmas/id-05-img-02.png';
import imagemDica05Img03 from './../../assets/imagem/DicaArmas/id-05-img-03.png';
import imagemDica05Img04 from './../../assets/imagem/DicaArmas/id-05-img-04.png';

import imagemDica06Img01 from './../../assets/imagem/DicaArmas/id-06-img-01.png';
import imagemDica06Img02 from './../../assets/imagem/DicaArmas/id-06-img-02.png';
import imagemDica06Img03 from './../../assets/imagem/DicaArmas/id-06-img-03.png';
import imagemDica06Img04 from './../../assets/imagem/DicaArmas/id-06-img-04.png';

export default class ConstItemDicaArma {

    static get DICAS() {
        return [
            {
                id: '01',
                titulo: 'Machadinha',
                subtitulo: 'Arma branca rara, localizada em uma caverna na floresta, perto de Annesburs',
                imagem: [imagemDica01Img01, imagemDica01Img02, imagemDica01Img03, imagemDica01Img04],
                alt: 'imagem Machadinha Viking',
                tituloImagem: ' ',
                subTituloImagem: 'Machadinha Viking',
                dano: '3.2',
                alcance: '1',
                cadencia: '0',
                recarga: '0',
                precisao: '1',
                condicao: '4',
            },
            {
                id: '02',
                titulo: 'Machadinha',
                subtitulo: 'Arma branca unica, localizada no fundo de uma casa, perto de Valentine',
                imagem: [imagemDica02Img01, imagemDica02Img02, imagemDica02Img03, imagemDica02Img04],
                alt: 'imagem Machadinha',
                tituloImagem: ' ',
                subTituloImagem: 'Machadinha',
                dano: '3.2',
                alcance: '1',
                cadencia: '0',
                recarga: '0',
                precisao: '1',
                condicao: '4',
            },
            {
                id: '03',
                titulo: 'Machadinha Dupla',
                subtitulo: 'Arma branca unica, localizada na floresta, próximo de uma antiga lareira, perto de Valentine',
                imagem: [imagemDica03Img01, imagemDica03Img02, imagemDica03Img03, imagemDica03Img04],
                alt: 'imagem Machadinha Dupla',
                tituloImagem: ' ',
                subTituloImagem: 'Machadinha Dupla',
                dano: '3.2',
                alcance: '1',
                cadencia: '0',
                recarga: '0',
                precisao: '1',
                condicao: '4',
            },
            {
                id: '04',
                titulo: 'Machadinha de Corte',
                subtitulo: 'Arma branca unica, localizada na floresta, próximo de uma fogueira, perto de Annesburs',
                imagem: [imagemDica04Img01, imagemDica04Img02, imagemDica04Img03, imagemDica04Img04],
                alt: 'imagem Machadinha de Corte',
                tituloImagem: ' ',
                subTituloImagem: 'Machadinha de Corte',
                dano: '3.2',
                alcance: '1',
                cadencia: '0',
                recarga: '0',
                precisao: '1',
                condicao: '4',
            },
            {
                id: '05',
                titulo: 'Machadinha de Caçador',
                subtitulo: 'Arma branca unica, localizada na floresta, próximo de uma casa, escondida em um tronco de árvore, perto de Annesburs',
                imagem: [imagemDica05Img01, imagemDica05Img02, imagemDica05Img03, imagemDica05Img04],
                alt: 'imagem Machadinha de Caçador',
                tituloImagem: ' ',
                subTituloImagem: 'Machadinha de Caçador',
                dano: '3.2',
                alcance: '1',
                cadencia: '0',
                recarga: '0',
                precisao: '1',
                condicao: '4',
            },
            {
                id: '06',
                titulo: 'Machadinha Dupla Corroída',
                subtitulo: 'Arma branca unica, localizada na cidade, próximo de uma casa vermelha, em Annesburs',
                imagem: [imagemDica06Img01, imagemDica06Img02, imagemDica06Img03, imagemDica06Img04],
                alt: 'imagem Machadinha Dupla Corroída',
                tituloImagem: ' ',
                subTituloImagem: 'Machadinha Dupla Corroída',
                dano: '3.2',
                alcance: '1',
                cadencia: '0',
                recarga: '0',
                precisao: '1',
                condicao: '4',
            },
        ];
    }

}