:octocat:

###### Go to develop 
`$ git checkout develop`

Este projeto foi iniciado com o [Create React App](https://github.com/facebook/create-react-app)<br>
 `$ npx create-react-app kevenrdr2`

### Requisistos: :pencil:
- [Node js](https://nodejs.org/en/)

### Tecnologias: :mag:
- [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)  
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)

```
npm install react-bootstrap bootstrap
npm install react-router-dom
```

### Iniciar o projeto :outbox_tray:
No diretório do projeto, você pode executar:<br>
`npm install` - <sub>Instalar todas as dependências do projeto<sub><br>
`npm start` - <sub>Iniciar o projeto<sub>

Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

# Padrão pessoal :bowtie:
- Toda classe de css deve começar com o nome do componente e separado por traço.<br>
<sub>Exemplo: No componente topo, a classe de style que cuida da imagem do topo:</sub><br> 
```
.topo-imagem-logo 
no lugar de 
.imagem-logo
```

- Usar aspas simples.<br>
<sub>Exemplo: no import do react:</sub>
```
import React from 'react'; 
no lugar de  
import React from "react";
```

- Usar pt para tamanho de fonte no css.<br>
<sub>Exemplo: no stule.css:</sub> 
```
font-size: 12pt; 
no lugar de 
font-size: 20px;
```

# Dicas :speech_balloon:
Para criar a logo online você pode fazer no [fontmeme](https://fontmeme.com/netflix-font/)<br>
Para entender mais é possível assistir um mini curso em [Alura](https://www.alura.com.br/imersao-react/aula01-react-aluraflix)<br>
Emojis do readme.md [Emojis](https://www.webfx.com/tools/emoji-cheat-sheet/)

# Cores :art:
- Toda as cores devem ser importadas do css global, que é o `ìndex.css`<br>
![Padrão de cores](https://github.com/KevenBarauna/Rdr2/blob/develop/src/assets/git/padrao-cores.png?raw=true)

# Fonte :a:
Página 404 - [Poppins](https://fonts.google.com/specimen/Poppins?preview.text=P%C3%A1gina+404&preview.text_type=custom&sidebar.open=true&selection.family=Poppins:wght@300;400;600)