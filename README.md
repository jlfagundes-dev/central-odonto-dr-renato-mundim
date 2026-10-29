# Central Odonto — Dr. Renato Mundim Costa

Site institucional da Central Odonto, clínica odontológica do Dr. Renato Mundim
Costa, em Cristalina, Goiás.

O projeto apresenta a clínica, os tratamentos oferecidos, informações sobre o
profissional e canais de contato para agendamento pelo WhatsApp.

## Tecnologias

- React 19
- TypeScript
- TanStack Start
- TanStack Router com roteamento baseado em arquivos
- Vite
- Tailwind CSS
- Componentes acessíveis baseados em Radix UI
- Vitest e Testing Library

## Requisitos

- Node.js 20 ou superior
- npm 10 ou Bun

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Por padrão, o Vite disponibiliza a aplicação em `http://localhost:3000`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Executa uma prévia da build |
| `npm test` | Executa os testes |
| `npm run lint` | Verifica o código com ESLint |
| `npm run format` | Formata os arquivos com Prettier |

## Estrutura do projeto

```text
src/
├── assets/          Imagens usadas pela página
├── components/ui/   Componentes reutilizáveis de interface
├── hooks/           Hooks React compartilhados
├── lib/             Utilitários e tratamento de erros
├── routes/          Rotas do TanStack Start
├── test/            Configuração dos testes
├── routeTree.gen.ts Árvore de rotas gerada automaticamente
├── router.tsx       Configuração do roteador
└── styles.css       Tokens de design e estilos globais
public/              Arquivos públicos, favicon e robots.txt
```

O arquivo `src/routeTree.gen.ts` é gerado pelo plugin do TanStack Router e não
deve ser editado manualmente.

## Conteúdo e identidade visual

As imagens da clínica ficam em `src/assets/`. O conteúdo textual, endereço,
telefone e link de agendamento estão definidos na rota principal em
`src/routes/index.tsx`.

Antes de publicar, revise os dados de contato e substitua o número de WhatsApp
de demonstração pelo número oficial da clínica.

## Licença

Este repositório contém o código e os materiais desenvolvidos para a Central
Odonto. A reutilização de imagens, logotipo e textos depende da autorização dos
respectivos titulares.
