:octocat:

###### Go to develop 
`$ git checkout develop`

### Projeto: :mailbox: 
Interface que mostra dicas sobre o jogo [Red dead redemption 2](https://www.rockstargames.com/reddeadredemption2/)
- Consumir dados de uma api
- React Hooks e Redux para salvar dados do usuário
- React Router para navegação entre páginas
- Componentes do React bootstrap
- Formulário com React

### Motivação: :mailbox: 
 As poucas experiências acumuladas como dev, demonstram que o desenvolvimento front-end é muito importante e amplo, uma biblioteca que tenho visto crescer cada vez mais é o [React](https://pt-br.reactjs.org/), biblioteca JavaScript muito populat. Com o intuito de praticar criei uma interface de usuário que mostra dicas bem legais do jogo [Red dead redemption 2](https://www.rockstargames.com/reddeadredemption2/), pois é um jogo que estou gostando muito, então como no meu tempo livre estou jogando e no tempo de trabalho entre uma folga e outra estou estudando React criei esse projeto para praticar bastante! :)


Este projeto foi iniciado com o [Create React App](https://github.com/facebook/create-react-app)<br>
 `$ npx create-react-app kevenrdr2`

### Requisistos: :pencil:
- [Node js](https://nodejs.org/en/)

### Tecnologias: :mag:
- [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)  
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [Axios](https://www.npmjs.com/package/axios)
- [Redux](https://redux.js.org/basics/usage-with-react)

```
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install --save axios
npm install --save redux
npm install react-redux
npm install --save redux-thunk
```

### Iniciar o projeto :outbox_tray:
No diretório do projeto, você pode executar:<br>
`npm install` - <sub>Instalar todas as dependências do projeto</sub><br>
`npm start` - <sub>Iniciar o projeto</sub>

Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

### Padrão pessoal :bowtie:
- Toda classe de css deve começar com o nome do componente e separado por traço.<br>
<sub>Exemplo: No componente topo, a classe de style que cuida da imagem do topo:</sub><br> 
```
.topo-imagem-logo 
no lugar de 
.imagem-logo
```

- Usar aspas simples.<br>
<sub>Exemplo: no import do react</sub>
```
import React from 'react'; 
no lugar de  
import React from "react";
```

- Usar pt para tamanho de fonte no css.<br>
<sub>Exemplo: no style.css</sub> 
```
font-size: 12pt; 
no lugar de 
font-size: 20px;
```

- Localização arquivos.<br>
<sub>Imagens dentro do projeto: `src/assets/imagem`</sub> <br>
<sub>Imagens do readme: `src/assets/git`</sub> <br>
<sub>Css: Dentro de cada pasta de cada componente deve conter seu próprio arquivo css</sub> <br>
<sub>Nome do projeto: Pegue o nome do projeto dentro de `Helpers/Util` pois o nome do projeto deve ser alterado em breve</sub> <br>

### Dicas :speech_balloon:
Para criar a logo online você pode fazer no [fontmeme](https://fontmeme.com/netflix-font/)<br>
[Emojis](https://www.webfx.com/tools/emoji-cheat-sheet/) do README.md

### Cores :art:
- Toda as cores devem ser importadas do css global, que é o `index.css`<br><br>
![Padrão de cores](https://github.com/KevenBarauna/Rdr2/blob/develop/src/assets/git/padrao-cores.png?raw=true)

### Fonte :a:
Fonte padão - [Poppins](https://fonts.google.com/specimen/Poppins?preview.text=P%C3%A1gina+404&preview.text_type=custom&sidebar.open=true&selection.family=Poppins:wght@300;400;600) <sub>(definida no `index.css`)</sub>

### Perguntas :question:

 - Adicionar nova dica?<br>
   No arquivo `src/Helpers/Data/ConstDicas` contem um Array, adicione um novo objeto nesse Array com as seguintes informações:<br>

|  Propriedade  |     Tipo      |     Descrição                                           |             Exemplo            |
| ------------- | ------------- | ------------------------------------------------------- |------------------------------- |
|     id        |     string    | key unica, seguindo a ordem crescente (01,02,03,04 ...) |              01                |
|imagem |[imagem](https://create-react-app.dev/docs/adding-images-fonts-and-files/)| Imagem exibida no topo do card.  1000x565 Pixel| import imagem from './assets/imagem/Dica-14.jpg';
|     titulo    |     string    | Título exibido abaixo da imagem                         | 'Cavalos raros'
|     texto     |     string    | Texto exibido no corpo do card                          | 'Esse é o melhor cavalo do jogo.'

<br>

 - Adicionar nova arma?<br>
    No arquivo `src/Helpers/Data/ConstItemDicaArma` contem um Array, adicione um novo objeto nesse Array com as seguintes informações:<br>

|  Propriedade  |     Tipo      |     Descrição                                           |             Exemplo            |
| ------------- | ------------- | ------------------------------------------------------- |------------------------------- |
|id             |     string    | key unica, seguindo a ordem crescente (01,02,03,04 ...) |              01                |
|titulo         |     string    | Título exibido ao lado da imagem                        |       'Machadinha Dupla'       |
|imagem         |      Array    | Imagem exibida no carousel. 1277x674 Pixel              | [imagemDica06Img01, imagemDica06Img02, imagemDica06Img03, imagemDica06Img04],
|alt            |     string    | [alt da imagem](https://www.w3schools.com/tags/att_img_alt.asp)| 'imagem Machadinha'
|tituloImagem   |     string    | Título exibido dentro do carousel.                      | 'Machadinha de mão'
|subTituloImagem|     string    | Subtítulo exibido dentro do carousel.                   | 'Muito forte e rápida!'
|dano           |     string    | Dano da arma(de 0 até 4). Não obrigátorio               | '2'
|alcance        |     string    | Alcance da arma(de 0 até 4). Não obrigátorio            | '3'
|cadencia       |     string    | Cadencia da arma(de 0 até 4) . Não obrigátorio          | '1'
|recarga        |     string    | Recarga da arma(de 0 até 4). Não obrigátorio            | '3.5'
|precisao       |     precisao  | Precisão da arma(de 0 até 4). Não obrigátorio           | '2'
|condicao       |     condicao  | Condição da arma(de 0 até 4). Não obrigátorio           | '4'

<br>

### Menções :page_with_curl:
- As dicas da [página de dicas](http://localhost:3000/dicas) foram retiradas do [techtudo](https://www.techtudo.com.br/listas/2018/11/red-dead-redemption-2-confira-dez-dicas-para-mandar-bem-no-jogo.ghtml)
- Obrigado [arjdev69](https://github.com/arjdev69) pela ajuda na configuração do Redux
