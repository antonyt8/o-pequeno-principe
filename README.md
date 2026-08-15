# 🌟 O Pequeno Príncipe — Experiência Editorial Interativa

Uma experiência web editorial e poética dedicada à obra imortal de **Antoine de Saint-Exupéry**, _O Pequeno Príncipe_ (_Le Petit Prince_).

O projeto reúne uma navegação interativa entre asteroides, personagens emblemáticos, citação de frases marcantes, galeria de aquarelas e um contador de pores do sol inspirado na jornada do Pequeno Príncipe.

---

## 📖 Sobre o Projeto

Este site foi concebido como um tributo visual e literário, combinando design poético moderno com alta performance web.

### ✨ Funcionalidades Principais

- **🏠 Home (B-612)**: Apresentação imersiva com fundo estrelado, citações e visão geral do universo da obra.
- **🗺️ A Jornada (`/jornada`)**: Linha do tempo interativa e itinerário da viagem do príncipe pelos céus até à Terra.
- **🌹 Personagens (`/personagens`)**: Perfis detalhados do Pequeno Príncipe, a Rosa, a Raposa, o Aviador, a Serpente, o Carneiro e o Astrônomo Turco.
- **🪐 Os Planetas (`/planetas`)**: Exploração dos asteroides (Rei, Vaidoso, Bêbado, Homem de Negócios, Acendedor de Candeeiros, Geógrafo).
- **💬 Frases Inesquecíveis (`/frases`)**: Seleção temática das citações mais tocantes da obra.
- **🌅 Pores do Sol (`/poentes`)**: Experiência interativa baseada no amor do príncipe por assistir aos pores do sol quando está triste.
- **🎨 Galeria de Arte (`/galeria`)**: Galeria lightbox interativa com aquarelas e ilustrações clássicas.
- **📚 O Livro (`/livro`)**: Contexto histórico de publicação, impacto cultural e traduções no mundo.
- **✈️ O Autor (`/autor`)**: Biografia e aventuras de Antoine de Saint-Exupéry como pioneiro da aviação e escritor.
- **🌐 Internacionalização (i18n)**: Suporte dinâmico para múltiplos idiomas (Português, Francês, Inglês).

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack SSR com React 19)
- **Roteamento & Estado**: [TanStack Router](https://tanstack.com/router) & [TanStack Query](https://tanstack.com/query)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) & CSS Customizado com fontes _Cormorant Garamond_ e _Lora_
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js**: versão 18.0.0 ou superior ([Download Node.js](https://nodejs.org/))
- **npm** (incluso no Node.js) ou **bun** / **pnpm** / **yarn**

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/pequeno-principe.git
cd pequeno-principe
```

### 2. Instalar as Dependências

```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento será iniciado. Acesse no seu navegador o endereço indicado (por padrão: `http://localhost:3000` ou `http://localhost:5173`).

---

## 📜 Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes comandos:

| Comando           | Descrição                                                             |
| ----------------- | --------------------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento com Hot Module Replacement (HMR) |
| `npm run build`   | Compila a aplicação para produção                                     |
| `npm run preview` | Executa o servidor local de pré-visualização da build de produção     |
| `npm run lint`    | Executa o ESLint para verificar a qualidade do código                 |
| `npm run format`  | Formata o código fonte utilizando o Prettier                          |

---

## 📁 Estrutura de Pastas

```text
pequeno-principe/
├── src/
│   ├── assets/           # Imagens e aquarelas clássicas
│   ├── components/       # Componentes React reutilizáveis (SiteHeader, SiteFooter, etc.)
│   ├── data/             # Dados estruturados sobre personagens, planetas e conteúdo
│   ├── lib/              # Utilitários, i18n e contexto global
│   ├── routes/           # Rotas da aplicação (TanStack Start)
│   │   ├── __root.tsx    # Layout raiz da aplicação
│   │   ├── index.tsx     # Página inicial (Home)
│   │   └── ...           # Outras páginas (/jornada, /personagens, /planetas, etc.)
│   ├── router.tsx        # Configuração do TanStack Router
│   ├── server.ts         # Entry point SSR do servidor
│   └── styles.css        # Estilos globais e utilitários Tailwind
├── public/               # Arquivos estáticos
├── vite.config.ts        # Configuração do Vite e TanStack Start
└── package.json          # Dependências e scripts do projeto
```

## 💖 Motivação & Dedicatória Pessoal

Este projeto foi concebido a partir de uma memória muito especial e de um afeto que atravessa o tempo e a distância. Desenvolvi esta aplicação por amor a uma obra que marcou profundamente a minha vida desde a infância.

*O Pequeno Príncipe* foi um presente inesquecível dado pela minha tia. Apesar de estar distante fisicamente de mim, ela foi minha constante inspiração durante toda a minha infância e crescimento. Criar esta experiência editorial interativa é a minha forma de honrar esse laço, transformar em tecnologia o olhar poético que ela me apresentou e celebrar uma das histórias mais bonitas da literatura universal.

---

## 🌟 Créditos e Licença

Inspirado na obra de **Antoine de Saint-Exupéry** (1900–1944).  
Criado com carinho para celebrar uma das mais belas histórias da literatura universal.

*“O essencial é invisível aos olhos.”*
