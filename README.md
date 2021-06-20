## Como foi resolver o teste

O teste foi bastante gratificante de ser resolvido, é sempre interessante lidar com APIs diferentes e eu ainda não conhecia as APIs do youtube nem do TicketMaster. Mais um aprendizado muito bom.

## Decisoes tomadas

Antes de começar a escrever o código, foi necessário pensar em como resolveria o problema e, para ajudar, comecei a desenhar no papel como o faria, quais libraries usar e de quais componentes precisaria. Optei por não utilizar react Router neste projeto, portanto tudo seria feito em uma página e isso evitaria complexidade desnecessária. Também optei por não usar o axios pelo mesmo motivo. Ambas requisições de APIs são feitas separadamente em Js puro. A renderização dos cards, tanto de vídeos quanto de eventos é tratada em componentes React separados.

## Como organizou e separou o codigo

Para organizar o código, bastou seguir o planejamento feito inicialmente no papel e caneta. Porém resolvi prototipar algumas coisas em um único componente no início. Este componente foi quebrado nas diversas partes que podem ser vistas no código atual, tornando-o assim, mais organizado, legível e facilitanto no debug.

## Instrucoes de como rodar o projeto

1. Primeiramente é necessário cloná-lo localmente em sua máquina. Isto pode ser feito através do comando: `git@github.com:fmagesty/demo.git` (certifique-se de usá-lo em seu terminal)
2. Instale as dependências do package.json utilizando `npm install` ou `yarn install`
3. Para utilizar as 2 APIs do projeto é necessário criar suas próprias API keys do Youtube e TicketMaster
4. No diretório /src crie um arquivo chamado config.js
5. Nele deve conter o seguinte código:

   `const config = {`
   `API_KEY: "API KEY DO YOUTUBE",`
   ` API_KEY_2: "API KEY TICKETMASTER",`
   `};`

`export default config;`

Substitua os valores "API KEY DO YOUTUBE" e "API KEY TICKETMASTER" por suas respectivas API keys

6. Agora basta usar o comando `npm run start` e seu projeto clonado deverá rodar normalmente

Estou a disposição para qualquer dúvida em relação ao projeto, basta me contactar pelo GitHub ou pelo [e-mail](fmagesty@gmail.com)
