Segue o **documento Agent Orchestration corrigido**, com **hierarquia semântica adequada de headings** (1 H1, seções em H2, etapas em H3).
Ele também mantém alinhamento direto com o **Generation Pipeline conceitual** que você já definiu.

---

```markdown
# Agent Orchestration

## Overview

Este documento descreve como **agentes de IA executam operacionalmente as etapas definidas no Generation Pipeline da Deplova**.

Enquanto o documento **Generation Pipeline** define as fases conceituais de geração de produto, este documento explica **como essas fases são executadas na prática por agentes que transformam artefatos de produto**.

O objetivo é permitir que uma **sessão de briefing gravada** evolua automaticamente até **uma aplicação funcional**, com mínima intervenção manual do operador.

---

## Core Principle

O sistema opera sobre um único artefato central:

```

product_definition.json

```

Esse objeto representa a definição do produto e é **progressivamente enriquecido ao longo do pipeline por diferentes agentes**.

Cada etapa executa uma transformação:

```

input artifact
↓
agent transformation
↓
enriched artifact

```

Nenhum documento intermediário precisa ser criado manualmente após o briefing.

---

## High-Level Flow

Fluxo operacional completo do sistema:

```

Audio
↓
Whisper
↓
Transcript
↓
Spec Generator
↓
Archetype Resolver
↓
Module Resolver
↓
Schema Generator
↓
Design Context Injection
↓
Skeleton Instantiation
↓
Application Builder
↓
Deploy

```

Cada etapa é executada por um agente especializado.

---

## Artifact Evolution

Durante o pipeline, o artefato central evolui através de diferentes estados estruturais.

```

Transcript
↓
Product Spec
↓
Structured Product Definition
↓
Archetyped Product
↓
Application Schema
↓
Generated Application

```

Isso permite tratar o produto como **um objeto evolutivo ao longo do processo de geração**.

---

## Pipeline Stages

### Transcript Generation

**Input**

```

recorded briefing session

```

**Agent**

Whisper transcription agent.

**Output**

```

transcript.txt

```

Este documento contém a conversa completa da sessão de briefing.

---

### Spec Generation

**Agent**

Spec Generator

**Input**

```

transcript.txt

````

**Process**

Um modelo de linguagem analisa a transcrição e extrai informações estruturadas sobre o produto.

**Output**

```json
{
  "product": {
    "name": "FounderHub",
    "description": "Platform where founders launch startups and the community votes"
  },
  "users": [
    "founders",
    "community members"
  ],
  "core_actions": [
    "launch startup",
    "vote startups"
  ],
  "features": [
    "startup submissions",
    "community voting",
    "daily ranking"
  ],
  "priorities": [
    "startup launch flow",
    "voting system",
    "ranking page"
  ]
}
````

Esse JSON se torna o **artefato base do pipeline**.

---

### Archetype Resolution

**Agent**

Archetype Resolver

**Input**

```
product_definition.json
```

**Process**

O agente analisa o Product Spec e classifica o produto com base na **biblioteca de Product Archetypes**.

**Output**

```json
{
  "archetype": "content_platform"
}
```

Ou:

```json
{
  "archetype": ["content_platform", "directory"]
}
```

O resultado é anexado ao objeto de definição do produto.

---

### Module Resolution

**Agent**

Module Resolver

**Input**

```
features
core_actions
archetype
```

**Process**

O agente identifica quais **módulos estruturais reutilizáveis** são necessários para o produto.

**Output**

```json
{
  "modules": [
    "auth",
    "profiles",
    "voting",
    "comments"
  ]
}
```

Módulos representam **capacidades funcionais comuns presentes em muitos produtos digitais**.

---

### Schema Generation

**Agent**

Schema Generator

**Input**

```
product_definition.json
```

**Process**

O agente transforma o Product Spec em uma estrutura concreta de aplicação.

São gerados três elementos principais:

```
entities
pages
flows
```

**Output**

```json
{
  "entities": [
    "startup",
    "founder",
    "launch",
    "vote"
  ],
  "pages": [
    "home",
    "launch_feed",
    "startup_detail",
    "submit_launch"
  ],
  "flows": [
    "submit_startup",
    "vote_launch"
  ]
}
```

Esse estágio converte **descrições conceituais de produto em estruturas de software executáveis**.

---

### Design Context Injection

**Agent**

Design Context Injector

**Input**

```
product_definition.json
```

**Process**

O sistema adiciona o **AI Design Prompt**, que contém regras de design baseadas no design system utilizado.

Esse contexto **não é gerado por produto** — ele é um template fixo.

**Output**

```json
{
  "design_system": "underlith",
  "layout_primitives": [
    "full_width",
    "two_columns",
    "three_columns"
  ],
  "components": [
    "cards",
    "tables",
    "forms",
    "lists"
  ]
}
```

Esse bloco fornece **restrições de interface e layout para os agentes de geração**.

---

### Skeleton Instantiation

**Agent**

Skeleton Generator

**Input**

```
product_definition.json
```

**Process**

O agente instancia um **Product Skeleton**, que fornece a infraestrutura base da aplicação.

O skeleton define:

* estrutura de projeto
* arquitetura de componentes
* camada de dados
* sistema de rotas

**Output**

Exemplo de estrutura gerada:

```
/app
/components
/pages
/models
/api
/config
```

Modelos iniciais podem ser gerados automaticamente a partir das entidades:

```
models/startup
models/founder
models/vote
```

---

### Application Builder

**Agent**

Application Builder

Ferramentas como **Claude Code** são utilizadas para implementar a aplicação.

**Input**

```
product_definition.json
+
project skeleton
```

**Process**

O agente executa tarefas como:

```
generate database models
generate APIs
generate UI pages
connect flows
implement modules
```

**Output**

```
functional application
```

---

### Deploy

**Agent**

Deployment Agent

**Process**

```
tests
↓
build
↓
deploy
```

A aplicação é publicada na infraestrutura de produção.

---

## Operator Workflow

Do ponto de vista do operador humano, o fluxo é simples:

```
run briefing session
↓
record meeting
↓
transcribe
↓
generate product spec
↓
run generation pipeline
↓
review result
↓
deploy
```

O operador atua principalmente como **supervisor do processo**.

---

## Relationship with Generation Pipeline

O documento **Generation Pipeline** descreve **as fases conceituais de geração de produto**.

Este documento descreve **como essas fases são executadas operacionalmente por agentes**.

Relação entre os dois:

| Generation Pipeline Stage | Agent                   |
| ------------------------- | ----------------------- |
| Briefing                  | Recording + Whisper     |
| Product Context           | Spec Generator          |
| Product Spec              | Spec Generator          |
| Product Archetype         | Archetype Resolver      |
| AI Design Prompt          | Design Context Injector |
| Skeleton Instantiation    | Skeleton Generator      |
| Build                     | Application Builder     |
| Review                    | Human Operator          |
| Deploy                    | Deployment Agent        |

---

## Summary

A arquitetura de Agent Orchestration permite transformar:

```
uma sessão de briefing
```

em

```
uma aplicação funcional
```

através de uma sequência de **agentes que enriquecem progressivamente a definição do produto**.

O produto evolui como um único artefato estruturado:

```
Transcript
↓
Product Spec
↓
Product Definition
↓
Application Schema
↓
Generated Application
```

Esse modelo permite **reduzir drasticamente o trabalho manual na criação de novos produtos digitais**.

```