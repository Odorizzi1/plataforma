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

Atualmente estamos implementando de forma concorrente a parte pública, que está tendo seus conteúdos ainda definidos e também a parte do *Módulo de Pesquisa*, onde já temos o layout e o design system pronto no Figma.

## Como contribuir?

Serão abertas issues de diferente escopos, como:

- implementar um componente do DesignSystem
- implementar uma tela do layout do Figma
- corrigir bugs de alguma tela existente
- fazer integração com a API

Em adição as issues, existem dois projetos do GitHub com as tarefas atuais, distribuídas num quadro estilo [Kaban](https://www.alura.com.br/artigos/metodo-kanban). 

Um projeto é específico para os componentes do Design System e o outro é um projeto para tarefas gerais da plataforma, incluindo correção de bugs e implementação de telas.

### Setup do projeto

#### Requisitos

- [NodeJS](https://nodejs.org/en)
- [Nix](https://nixos.org/) (opcional)

#### Primeira vez rodando

Para instalar as dependências:

```sh dark
$ npm install
```

E para levantar o projeto:

```sh dark
$ npm run dev
```

### Passos para pegar uma tarefa

Após encontrar uma tarefa do seu interesse, adicione um comentário na issue da mesma, informando que irá trabalhar nela!

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
