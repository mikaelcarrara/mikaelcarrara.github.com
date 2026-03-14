# Product Archetypes & Product Grammar

Documento conceitual interno — Deplova

---

# Visão geral

A maioria dos produtos digitais não começa realmente do zero.

Eles seguem **padrões estruturais recorrentes** de navegação, organização de páginas e fluxos de interação.

Esses padrões aparecem repetidamente em diferentes categorias de software:

* dashboards SaaS
* ferramentas internas
* marketplaces
* diretórios
* plataformas de conteúdo
* produtos de validação

Na Deplova, esses padrões são capturados através de **Product Archetypes**.

Arquétipos funcionam como **formas estruturais de produto** que podem ser rapidamente adaptadas a uma nova ideia.

Para tornar o sistema mais flexível e compatível com IA, os arquétipos são organizados dentro de uma **Product Grammar**.

Essa gramática permite compor produtos a partir de três elementos:

```
Archetype
Modules
Features
```

Isso transforma a definição de produto em **uma estrutura declarativa**, que pode ser interpretada tanto por humanos quanto por agentes de IA.

---

# Papel no pipeline da Deplova

Os arquétipos fazem parte da **Product Layer** dentro do pipeline de geração de produtos.

Fluxo simplificado:

```
Idea
↓
Briefing
↓
Product Context
↓
Product Spec
↓
Product Archetype
↓
Module Composition
↓
Skeleton Instantiation
↓
Build
↓
Deploy
```

Nesse fluxo:

* o **Product Spec** descreve o produto
* o **Archetype** define a forma estrutural
* os **Modules** adicionam capacidades comuns
* o **Skeleton** gera a infraestrutura técnica

---

# Product Grammar

A gramática de produto organiza a composição estrutural de software em três níveis.

```
Product Archetype
↓
Structural Modules
↓
Product Features
```

## Archetype

Define a **forma principal do produto**.

Determina:

* estrutura de navegação
* tipos principais de páginas
* layout dominante
* fluxos estruturais

Exemplo:

```
Dashboard
```

---

## Modules

Módulos estruturais reutilizáveis.

Representam capacidades comuns presentes em muitos produtos.

Exemplos:

* autenticação
* perfis
* busca
* comentários
* pagamentos
* notificações

---

## Features

Funcionalidades específicas do produto.

Representam comportamento único ou lógica de negócio.

Exemplos:

* algoritmo de ranking
* recomendação com IA
* scoring customizado
* automações internas

---

# Archetype Library

A biblioteca inicial de arquétipos cobre a maioria dos produtos em estágio inicial.

---

# Dashboard

Formato comum para aplicações SaaS e ferramentas operacionais.

Características:

* navegação lateral
* área principal de conteúdo
* visualização de dados
* múltiplas páginas funcionais

Páginas típicas:

```
dashboard
data views
settings
user management
logs
```

Aplicações comuns:

* SaaS
* analytics tools
* sistemas administrativos

---

# Internal Tool

Aplicações internas focadas em operações.

Características:

* foco em eficiência
* manipulação de dados
* workflows operacionais

Páginas típicas:

```
operations
data tables
task views
logs
configurations
```

Aplicações comuns:

* painéis administrativos
* sistemas de suporte
* ferramentas internas

---

# Marketplace

Produtos que conectam dois ou mais tipos de usuários.

Características:

* catálogo ou listagem
* páginas de detalhe
* interação entre usuários

Páginas típicas:

```
home
listing
detail page
user profile
search results
```

Aplicações comuns:

* plataformas de serviços
* marketplaces digitais
* plataformas de freelancers

---

# Directory

Catálogos organizados de itens ou entidades.

Características:

* listagens estruturadas
* filtros
* páginas de detalhe

Páginas típicas:

```
directory
detail page
categories
search
```

Aplicações comuns:

* diretórios profissionais
* catálogos de startups
* guias de serviços

---

# Content Platform

Produtos focados em publicação e consumo de conteúdo.

Características:

* páginas de conteúdo
* organização por categorias
* navegação editorial

Páginas típicas:

```
home
article
category
author
search
```

Aplicações comuns:

* blogs
* hubs de conteúdo
* plataformas editoriais

---

# Landing + Validation

Arquétipo mínimo para validação de ideias.

Características:

* apresentação do produto
* captura de interesse
* métricas de conversão

Páginas típicas:

```
landing
signup
waitlist
confirmation
```

Aplicações comuns:

* validação de startups
* pré-lançamentos
* experimentos de mercado

---

# Module Library

Módulos estruturais reutilizáveis.

---

## Auth

Sistema de autenticação.

Capacidades:

* login
* registro
* recuperação de senha
* sessões

---

## User Profiles

Perfis de usuário.

Capacidades:

* página de perfil
* avatar
* informações públicas
* histórico de atividade

---

## Search

Sistema de busca.

Capacidades:

* indexação
* filtros
* resultados ordenados

---

## Comments

Sistema de comentários.

Capacidades:

* threads
* respostas
* moderação

---

## Notifications

Sistema de notificações.

Capacidades:

* notificações in-app
* notificações por email
* eventos do sistema

---

## Payments

Sistema de pagamentos.

Capacidades:

* checkout
* assinaturas
* histórico de transações

---

## Messaging

Sistema de comunicação entre usuários.

Capacidades:

* mensagens diretas
* threads
* histórico

---

## Reviews

Sistema de avaliação.

Capacidades:

* notas
* comentários
* reputação

---

# Product Definition Schema

Para uso por agentes de IA, produtos podem ser descritos usando um schema declarativo.

Exemplo:

```yaml
product:

  name: FounderHub

  archetype: directory

  modules:
    - auth
    - user_profiles
    - search
    - comments
    - voting

  features:
    - daily_ranking
    - launch_feed
    - founder_profiles
```

Esse formato permite que agentes de IA:

* gerem estrutura de páginas
* configurem banco de dados
* montem componentes
* preparem APIs

---

# Exemplos de composição

## Exemplo 1 — SaaS de analytics

```
Archetype
Dashboard

Modules
Auth
Projects
Data Tables
Search
Notifications

Features
AI analysis
Custom reports
Export system
```

---

## Exemplo 2 — marketplace de freelancers

```
Archetype
Marketplace

Modules
Auth
Profiles
Search
Messaging
Payments
Reviews

Features
reputation_score
project_matching
```

---

## Exemplo 3 — plataforma de lançamentos de startups

```
Archetype
Content Platform

Modules
Auth
Profiles
Voting
Comments
Directory

Features
daily_launch
ranking_algorithm
```

---

# Evolução da gramática

A Product Grammar evolui conforme novos produtos são construídos.

Com o tempo:

* novos arquétipos podem surgir
* novos módulos podem ser adicionados
* módulos existentes podem ser refinados

O objetivo é que a maioria dos MVPs possa ser descrita através de **uma pequena gramática de produto bem definida**.

Isso reduz drasticamente o tempo entre:

```
idea
↓
product definition
↓
functional MVP
```