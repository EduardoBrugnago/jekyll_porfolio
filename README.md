<div align="center">
  <h1>portfolYOU</h1>
  <i>A beautiful portfolio Jekyll theme that works with GitHub Pages.</i>

  <a href="https://yousinix.github.io/portfolYOU/">Live Demo</a>
  •
  <a href="https://yousinix.github.io/portfolYOU/docs/">Documentation</a>

  <a href="https://yousinix.github.io/portfolYOU"><img src="screenshot.gif"></a>
  <sub><sup>© 2024 portfolYOU, licensed under the <a href="./LICENSE">MIT License</a>.</sup></sub>
</div>

---

## Como rodar localmente / How to run locally

### Pré-requisitos / Prerequisites

- [Ruby](https://www.ruby-lang.org/en/downloads/) (recomendado 3.2+)
- [Bundler](https://bundler.io/) (`gem install bundler`)

### Instalação / Setup

```bash
cd docs
bundle install
```

### Rodando o servidor / Running the server

```bash
cd docs
bundle exec jekyll serve
```

O site estará disponível em `http://localhost:4000`.

### Build de produção / Production build

```bash
cd docs
JEKYLL_ENV=production bundle exec jekyll build
```

Os arquivos gerados ficam em `docs/_site/`.
