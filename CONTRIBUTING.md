# Contribuindo com a Plataforma PEA Pescarte

👍🎉 Primeiro de tudo, muito obrigado por despender tempo em contribuir com esse projeto! Espero que tenha uma experiência incível! 👍🎉

### Tabela de conteúdos

## Demandas do projeto

Atualmente estamos implementando uma plataforma web para o projeto Pescarte. A mesma foi dividida em 4 (quatro) módulos, inicialmente:

1. Módulo Públioco
2. Módulo Pesquisa
3. Módulo Admin
4. Módulo Pescador

### Módulo Público

Módulo que representa toda a parte pública da plataforma, onde será exibida as informações sobre os núcleos de pesquisa, linhas de pesquisa, as pessoas pesquisadoras que as formam.

E tabém centralizar documentos do projeto como notícias, declarações e avisos. A plataforma também prevê uma "biblioteca" pública com as mídias do projeto (fotos e vídeos), que serão catalogadas por tags e podem ser recuperadas por meio de pesquisa textual.

### Módulo Pesquisa

Neste módulo será implementado a parte privada da plataforma na qual as pessoas pesquisadoras terão acesso para escrever e enviar seus relatórios, terão seus perfil pessoais, podem se comunicar entre si por meio de mensagem e alertas e possuem acesso a uma agenda do projeto.

### Módulo Admin

Neste módulo a pessoa administradora consegue gerenciar as outras pessoas pesquisadoras e seus prórpios relatórios e dos demais.

### Módulo Pescador

Ainda dentro da parte privada, as pessoas pescadoras terão acesso a plataforma para poderem acessar seus informes de rendimentos e informações sobre pescado, além de também terem seu perfil privado.

## Estado atual da plataforma

Atualmente estamos implementando de forma concorrente a parte pública, que está tendo seus conteúdos ainda definidos e também a parte do _Módulo de Pesquisa_, onde já temos o layout e o design system pronto no Figma.

## Como contribuir?

Serão abertas issues de diferente escopos, como:

- implementar um componente do DesignSystem
- implementar uma tela do layout do Figma
- corrigir bugs de alguma tela existente
- fazer integração com a API

Em adição as issues, existem dois projetos do GitHub com as tarefas atuais, distribuídas num quadro estilo [Kaban](https://www.alura.com.br/artigos/metodo-kanban).

Um projeto é específico para os componentes do Design System e o outro é um projeto para tarefas gerais da plataforma, incluindo correção de bugs e implementação de telas.

### Passos para pegar uma tarefa

Após encontrar uma tarefa do seu interesse na seção de [issues](https://github.com/peapescarte/pescarte-plataforma/issues), adicione um comentário na issue da mesma, informando que irá trabalhar nela!

Crie uma branch no formato `<user-github>/tarefa`, exemplo:

- Usuário no github: `zoedsoupe`
- Tarefa: `Criar componente de botão`

Nome da branch: `zoedsoupe/cria-componente-botao`

### Abrindo a PR

Com a tarefa implementada, abra uma PR diretamente para a branch `main`. A mesma deve seguir o formato do template.

Assim que possível a [@zoedsoupe](https://github.com/zoedsoupe) irá revisar sua PR que poderá ser aprovada ou ter solicitação de refatoração.

Lembre-se que é que não é obrigatório testes unitários para uma PR ser aberta! Caso não saiba como implementar os mesmo, a [@zoedsoupe](https://github.com/zoedsoupe) irá te ajudar no processo!

## Links úteis

- [Figma do projeto](https://www.figma.com/file/PhkO37jz3ofCHwc1pHtPyz/PESCARTE?node-id=0%3A1&t=lTcYuyoIHCspxTWM-1)
- [Documentação Vue 3](https://vuejs.org/guide/introduction.html)
- [Documentação Nuxt.JS 3](https://nuxt.com/docs)
- [Documentação TailwindCSS](https://tailwindcss.com/docs)

## Links para estudo (frontend)

- [História do frontend (pt-br)](https://youtu.be/VKmPGmFY7H4)
- [frontend, por onde começar? (pt-br)](https://www.youtube.com/watch?v=Ab-kGzlCCWI)
- [Tutorial CSS desde o início (pt-br)](https://www.maujor.com/tutorial/joe/cssjoe1.php)
- [Tutoriais e documentação oficial CSS (en)](https://www.w3schools.com/css/)
- [Tutoriais para CSS (pt-br)](https://www.oficinadanet.com.br/css/tutoriais)
- [Tutorial de CSS para inciantes (pt-br)](https://terminalroot.com.br/css/)
- [Tutorial Básico HTML e CSS (pt-br)](https://www.youtube.com/watch?v=4Gq3WW6FwVA)
- [Curso de HTML e CSS para iniciantes (pt-br)](https://www.youtube.com/watch?v=iZ1ucWosOww)
- [Aprenda HTML em 1 hora (en)](https://www.youtube.com/watch?v=qz0aGYrrlhU)
- [Criando uma loja virtual com HTML e CSS puro (pt-br)](https://www.youtube.com/watch?v=eKi3UlBZEXI)
- [Tutorial para iniciantes HTML e CSS (pt-br)](https://www.youtube.com/watch?v=6b_bnNFNLng)
- [Curso completo frontend (pt-br)](https://www.youtube.com/watch?v=j_lSgjAODos&list=PLMy95_4XE08MRsQvaSQnHzyooNevGTNtS)
- [Roadmap para estudo frontend (en)](https://roadmap.sh/frontend)
- [Curso de HTML e CSS (pt-br)](https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n)
- [Curso HTML, CSS e JS (pt-br)](https://www.youtube.com/watch?v=EiZbhsVY2Dk&list=PLwgL9IEA0PxUjbhob9UMdpVq12sGrjgU6)
- [Curso HTML e CSS completo (pt-br)](https://www.youtube.com/watch?v=bCFTv8a59PE&list=PLbIBj8vQhvm00J3f3rD33tRuNLem8EgEA)
- [Documentação oficial para web dev (en)](https://developer.mozilla.org/en-US/)
- [Guia de sobrevivência JavaScript moderno (pt-br)](https://www.youtube.com/watch?v=P9xBhwugj4M)
- [Curso JavaScript moderno (pt-br)](https://www.youtube.com/watch?v=RtfBx90R070&list=PLlAbYrWSYTiPQ1BE8klOtheBC0mtL3hEi)
- [Curso JavaScript - curso em vídeo (pt-br)](https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm)
- [JavaScript assíncrono (pt-br)](https://www.youtube.com/watch?v=7Bs4-rqbCQc)
- [JavaScript ES6 e programação funcional (pt-br)](https://www.youtube.com/watch?v=LQbAozIe1DA)
- [Tutorial JavaScript ES6](https://www.javascripttutorial.net/es6/)
- [Fundamentos do JavaScript funcional (pt-br)](https://www.youtube.com/watch?v=W3f6hiTLipc)
- [Entenda Promises por uma vez por todas (pt-br)](https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2)
- [Documentação oficial TypeScript (en)](https://www.typescriptlang.org/docs/)
- [Typescript para novas pessoas programadoras (en)](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Guia TypeScript para iniciantes (en)](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)
- [Tutorial de javascript moderno (en)](https://javascript.info/)
- [Typescript in 4 hours - use mais como referência, n precisa assistir tudo de uma vez (en)](https://www.youtube.com/watch?v=30LWjhZzg50)
- [Progrmação funcional com JavaScript (en)](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
- [Aprenda programação funcional com JavaScript (en)](https://www.youtube.com/watch?v=R_-nUkpatwM)
- [Curso de Vue3 (pt-br)](https://www.youtube.com/watch?v=wsAQQioPIJs&list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL)
- [Curso Vue.JS 3 (pt-br)](https://www.youtube.com/watch?v=9DRY-aNPta0&list=PLcoYAcR89n-qTYqfWTGxXMnAvCqY3JF8w)
- [Tutorial completo Vue.JS 3 (en)](https://www.youtube.com/watch?v=I_xLMmNeLDY)
- [Curso Nuxt.JS 3 (en)](https://www.youtube.com/watch?v=GBdO5myZNsQ&list=PL4cUxeGkcC9haQlqdCQyYmL_27TesCGPC)
- [Curso Nuxt.JS completo (en)](https://www.youtube.com/watch?v=ww94Jvi8JJo)
