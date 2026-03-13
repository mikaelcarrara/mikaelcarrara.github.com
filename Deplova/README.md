# Documentação Deplova

Este repositório contém os **documentos conceituais principais** que descrevem como o sistema Deplova funciona.

O Deplova não é apenas um serviço de desenvolvimento.  
É um **pipeline estruturado para transformar ideias de produto em MVPs funcionais**.

Os documentos nesta pasta explicam o sistema em diferentes níveis: visão, processo, modelos de produto e estrutura de implementação.

---

## Visão geral dos documentos

### PITCH.md

**Objetivo:** visão estratégica do Deplova.

Este documento explica:

- o que é o Deplova
- qual problema ele resolve
- como o sistema funciona em alto nível
- a visão de longo prazo

Destinado a **fundadores, colaboradores e parceiros técnicos** que querem entender o conceito rapidamente.

Evita deliberadamente detalhes técnicos aprofundados.

---

### PRODUCT-GENERATION-PIPELINE.md

**Objetivo:** explicar como os produtos são gerados.

Este documento descreve o **ciclo de vida completo de um projeto Deplova**, desde a ideia inicial até o deploy.

Estrutura do pipeline:

```
Ideia
  ↓
Briefing
  ↓
Contexto do Produto
  ↓
Deplova Guardrails
(AI Design Prompt + Design Tokens)
  ↓
Arquétipo de Produto
  ↓
Product Skeleton
  ↓
Implementação de funcionalidades
  ↓
Deploy
```

Este documento explica como o Deplova transforma **inputs estruturados em software funcional**.

---

### PRODUCT-ARCHETYPES.md

**Objetivo:** definir padrões recorrentes de produto.

A maioria dos produtos digitais segue um conjunto pequeno de padrões estruturais.

Em vez de começar cada projeto do zero, o Deplova usa **arquétipos de produto** para acelerar o desenvolvimento.

Exemplos incluem:

- SaaS dashboards
- ferramentas internas
- marketplaces
- plataformas de conteúdo
- landing pages e listas de espera

Cada arquétipo fornece **uma estrutura inicial de navegação, layout e funcionalidades**.

---

### PRODUCT-SKELETON.md

**Objetivo:** definir a arquitetura base de cada projeto.

O Product Skeleton é a **estrutura de código inicial** utilizada em todos os projetos Deplova.

Inclui:

- estrutura de aplicação
- convenções de rotas
- componentes de UI base
- layout primitivos
- integração com design tokens
- configuração do projeto

Essa fundação elimina o trabalho repetitivo de setup e permite que o sistema foque em **implementar funcionalidades de produto rapidamente**.

---

## Como os documentos se conectam

Cada documento descreve uma camada diferente do sistema.

```
PITCH
  ↓
PRODUCT-GENERATION-PIPELINE
  ↓
PRODUCT-ARCHETYPES
  ↓
PRODUCT-SKELETON
```

Juntos, descrevem como o Deplova move um produto de **ideia → MVP deployado**.

---

## Filosofia do sistema

O modelo Deplova é construído sobre um princípio simples:

> O desenvolvimento de produtos em estágio inicial deve ser estruturado, repetível e rápido.

Ao combinar:

- definição estruturada de produto
- compilação de design system via Deplova Guardrails
- arquitetura padronizada via Product Skeleton
- implementação assistida por IA

O Deplova busca reduzir drasticamente o tempo necessário para lançar novos produtos de software.
