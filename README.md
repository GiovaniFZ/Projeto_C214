# Aplicação de pedidos com React + TypeScript + Vite

Uma aplicação web para gerenciamento de pedidos, desenvolvida com React, TypeScript e Vite para uma experiência rápida e interativa.

# Índice
- Descrição
- Pré-requisitos
- Instalação
- Uso
- Scripts Disponíveis
- Estrutura do Projeto
- Contribuição
- Licença

# Descrição

A aplicação de pedidos permite aos usuários realizar e gerenciar pedidos de forma eficiente e intuitiva. Com um design moderno e uma interface fácil de navegar, esta aplicação foi construída para facilitar o fluxo de pedidos em negócios de diferentes tamanhos.

# Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (ou yarn)

# Instalação

- 1- Clone o repositório:
  git clone https://github.com/GiovaniFZ/Projeto_C214

- 2- Navegue até o diretório do projeto:
  cd Projeto_C214

- 3- Instale as dependências
  npm install

# Uso
  Para rodar a aplicação em modo de desenvolvimento:  
  npm run dev

# Scripts Disponíveis
- npm run dev: Executa a aplicação em modo de desenvolvimento.
- npm run build: Cria uma versão otimizada para produção.
- npm run preview: Visualiza a versão de produção localmente.
- npm run lint: Verifica o código com o ESLint.
- npm run test: Executa os testes com cobertura de código.

# Estrutura do Projeto
  - src/: Contém o código-fonte do projeto.
  - components/: Componentes reutilizáveis da aplicação.
  - pages/: Páginas principais.
  - services/: Serviços para integração com APIs.
  - utils/: Utilitários e funções auxiliares.
  - assets/: Arquivos estáticos como imagens e estilos.

# Contribuição
Aplicação criada e elaborada pelos alunos: 
 - Bruno Vinícius
 - Giovani Finazzi
 - Leonardo Pereira

# Licença
  Este projeto é licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.
Currently, two official plugins are available:


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
