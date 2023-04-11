# Plataforma PEA Pescarte

[![lint](https://github.com/peapescarte/plataforma/actions/workflows/lint.yml/badge.svg)](https://github.com/peapescarte/plataforma/actions/workflows/lint.yml)

[![test](https://github.com/peapescarte/plataforma/actions/workflows/test.yml/badge.svg)](https://github.com/peapescarte/plataforma/actions/workflows/test.yml)

## Ambiente de Desenvolvimento local

| Requisitos                      | versão     |
| ------------------------------- | ---------- |
| [nodejs](https://nodejs.org/en) | `v18.14.2` |

Caso você tenha [Nix](https://nixos.org/) instalado, este repositório fornecesse um flake nix para criar um shell personalizado o qual já inclui a dependência `nodejs`.

Basta executar, dentro do repositório:

```sh dark
nix develop
```

Caso tenha [Nix](https://nixos.org/) e [direnv](https://direnv.net/) instalados, basta executar:

```sh dark
direnv allow
```

Dentro do repositório para ter acesso ao shell com as dependências!

### Executando pela primeira vez

Recupere as depências do projeto com:

```sh dark
npm install
```

Para levantar o servidor:

```sh dark
npm run dev
```

Para executar os testes automatizados, execute:

```sh dark
npm run test
```

Caso queria formatar ou analisar a estrutra do código:

```sh dark
npm run format && npm run lint
```

## Gostaria de contribuir com o projeto?

Leia nosso [documento de guia para contribuição](./CONTRIBUTING.md)
