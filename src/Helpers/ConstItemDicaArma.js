import imagemDica01Img01 from './../assets/imagem/DicaArmas/id-01-img-01.jpg';
import imagemDica01Img02 from './../assets/imagem/DicaArmas/id-01-img-02.jpg';
import imagemDica01Img03 from './../assets/imagem/DicaArmas/id-01-img-03.jpg';

import imagemDica02Img01 from './../assets/imagem/DicaArmas/id-02-img-01.jpg';
import imagemDica02Img02 from './../assets/imagem/DicaArmas/id-02-img-02.jpg';
import imagemDica02Img03 from './../assets/imagem/DicaArmas/id-02-img-03.jpg';

export default class ConstItemDicaArma {

    static get DICAS_01() {
        const alt = 'imagem Broken Pirate Sword';
        const titulo = 'Broken Pirate Sword';
        const subTitulo = 'Arma branca';
        return [
            {
                id: '01',
                imagem: imagemDica01Img01,
                alt: alt,
                titulo: titulo,
                subTitulo: subTitulo,
            },
            {
                id: '02',
                imagem: imagemDica01Img02,
                alt: alt,
                titulo: titulo,
                subTitulo: subTitulo,
            },
            {
                id: '03',
                imagem: imagemDica01Img03,
                alt: alt,
                titulo: titulo,
                subTitulo: subTitulo,
            },
        ];
    }

    static get DICAS_02() {
        const alt = 'imagem Mchado';
        const titulo = 'Mchado';
        const subTitulo = 'Arma branca';
        return [
            {
                id: '01',
                imagem: imagemDica02Img01,
                alt: alt,
                titulo: titulo,
                subTitulo: subTitulo,
            },
            {
                id: '02',
                imagem: imagemDica02Img02,
                alt: alt,
                titulo: titulo,
                subTitulo: subTitulo,
            },
            {
                id: '03',
                imagem: imagemDica02Img03,
                alt: alt,
                titulo: titulo,
                subTitulo: subTitulo,
            },
        ];
    }

}