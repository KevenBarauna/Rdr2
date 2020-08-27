export default class Util {

    static get NOME_PROJETO() {
        return 'kevenRdr2';
    }

    static get setTitle(){
        document.title = this.NOME_PROJETO + ' - '+ process.env.REACT_APP_VERSION;
        return null
    }
}