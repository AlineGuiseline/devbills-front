# DevBills Front

Este repositório contém o front-end de uma aplicação construída com **React.js**, **TypeScript**, **Zod**, **nivo** e **Radix UI**.

![DevBills front](/public/DevBills-front.png)

### 🛠️ Tecnologias Utilizadas

- **React.js:** Biblioteca para criação de interfaces web.
- **TypeScript:** Suporte à tipagem estática para maior segurança e escalabilidade.
- **Zod:** Biblioteca para validação de dados.
- **nivo:** Biblioteca para criação de gráficos dinâmicos.
- **Radix UI:** Biblioteca de componentes.

### 🚀 Instalação e Execução

1. Clone o repositório
```
git clone https://github.com/AlineGuiseline/devbills-front.git
cd devbills-front
```

2. Instale as dependências

```
npm install
```

3. Execute o projeto

```
npm run dev
```

Obs.: A API estará disponível em http://localhost:5173

### ❗ Comunicado importante
É crucial estar com o [servidor](https://github.com/AlineGuiseline/devbills-api) rodando antes de executar esta interface para que as informações salvas na API sejam visualizadas aqui.

### 📦 **Estrutura do Projeto**

```plaintext
project-root/
├── public/                # Contém o favicon
├── src/
   ├── components/         # Componentes visuais do projeto
   ├── hooks/              # Lógica de conexão com a API
      └──  index.tsx/
      └──  useFetchAPI/
   ├── screens/            # Telas do projeto
      └── home/
        └── index.tsx
        └── styles.ts
   ├── services/           # Tipagem das funções de conexão com a API
        └── api-types.ts
        └── api.ts
   ├── styles/             # Estilo global e temas
      └── global.ts
      └── theme.ts
   ├── utils/              # Funções utilitárias para a aplicação
      └── format-currency.ts
      └── format.date.ts
   ├── validators/         # Lógica de validação do formulário
      └── schemas.ts
      └── types.ts
├── .prettierrc            # Configuração do Prettier
├── eslint.config          # Configuração do ESLint
├── index.html             # Base do projeto
└── tsconfig.json          # Configuração TypeScript
```

### 📌 Conclusão
Esta interface fornece a visualização de um dashboard para controle financeiro, com inputs, modais e gráficos (de pizza e de barras).

Se houver qualquer problema ou dúvida, fique à vontade para entrar em contato comigo, seja a partir de uma issue no repositório ou me contactando pelo [LinkedIn](https://www.linkedin.com/in/alineguiseline/)!
