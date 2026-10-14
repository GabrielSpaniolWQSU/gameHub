# GameHub

Trabalho de faculdade feito em Angular. O projeto simula um catálogo de jogos com uma interface simples e dados guardados em memória, sem backend ou banco de dados.

## Funcionalidades

- Página inicial com jogos em destaque, total de jogos e total de jogos gratuitos.
- Catálogo com oito jogos iniciais, busca por nome e filtro por categoria.
- Detalhes pela rota `/jogos/:id` e mensagem para ID inexistente.
- Cadastro com validação de nome, preço não negativo e avaliação entre 0 e 5.
- Página sobre e redirecionamento de endereços desconhecidos para o início.
- Layout adaptável para celular e imagens dos jogos salvas no projeto.

Os preços e as avaliações são fictícios. Novos cadastros são perdidos ao recarregar a página, conforme a proposta de armazenamento em memória.

## Tecnologias e conteúdos

Angular 21, TypeScript, HTML e CSS. Componentes standalone, interface `Jogo`, injeção de dependência, service compartilhado, Angular Router, `routerLink`, `router-outlet`, interpolação, property binding, event binding, `[(ngModel)]`, `@if`, `@for` e `@switch`.

## Como executar

Instale Node.js 22.12 ou superior (linha 22), ou Node.js 24.

```bash
npm install
npm start
```

Abra `http://localhost:4200`. Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos gerados ficam em `dist/gamehub/browser`. Em hospedagem, configure o redirecionamento das rotas para `index.html`.

## Organização

- `src/app/components`: menu e cartão de jogo.
- `src/app/pages`: início, catálogo, detalhes, cadastro e sobre.
- `src/app/models/jogo.model.ts`: interface dos dados.
- `src/app/services/jogo.service.ts`: lista e métodos de consulta e cadastro.
- `src/app/app.routes.ts`: rotas da aplicação.
- `public/imagens`: imagens dos jogos e imagem padrão para novos cadastros.

## Antes de entregar

Preencha seu nome e a disciplina em `src/app/pages/sobre/sobre.ts`. Envie o projeto para seu repositório no GitHub e entregue o link. Não inclua `node_modules`, `dist` ou `.angular` (já estão no `.gitignore`).

## Imagens

As imagens dos jogos vêm da Steam e dos sites oficiais de Minecraft, Fortnite e Valorant. As fontes estão registradas em `public/imagens/fontes.json`. Elas são utilizadas para ilustrar o catálogo acadêmico e pertencem aos respectivos titulares.
