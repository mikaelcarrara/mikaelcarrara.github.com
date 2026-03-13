# Pipeline de Geração de Produto

Este documento descreve o **pipeline de geração de produtos utilizado pelo Deplova** para transformar ideias iniciais em aplicações MVP funcionais.

A Deplova estrutura a criação de produtos em um **pipeline em camadas** que combina definição de produto, infraestrutura de design system, arquitetura padronizada e implementação assistida por IA.

O objetivo do pipeline é permitir uma **geração de produtos previsível e repetível**.

---

## Visão geral do pipeline

O pipeline do Deplova converte uma ideia de produto em uma aplicação deployada por meio de uma sequência de etapas bem definidas.

```
Ideia de produto
      ↓
Briefing
      ↓
Contexto do Produto
      ↓
Deplova Guardrails
      ↓
AI Design Prompt
      ↓
Design Tokens
      ↓
Product Archetypes
      ↓
Product Skeleton
      ↓
Build
      ↓
Deploy
```

Cada etapa define um aspecto diferente do produto e reduz a complexidade da próxima etapa.

---

## Etapa 1 — Ideia de produto

Todo projeto começa com uma ideia ou oportunidade de produto.

Nessa etapa o conceito pode ainda ser informal. A ideia normalmente descreve:

- um problema
- um público-alvo
- uma possível solução de produto

O objetivo dessa etapa é simplesmente identificar um conceito de produto viável e que vale a pena explorar.

---

## Etapa 2 — Briefing

O briefing converte a ideia inicial em uma definição de produto mais clara.

Uma conversa estruturada é utilizada para extrair informações-chave sobre o produto.

Tópicos típicos incluem:

- o problema central a ser resolvido
- o usuário-alvo
- possíveis funcionalidades
- resultados esperados
- restrições ou requisitos

O briefing fornece as informações necessárias para produzir o Contexto do Produto.

---

## Etapa 3 — Contexto do Produto

O Contexto do Produto é um documento estruturado que define o escopo do MVP.

Tipicamente inclui:

- descrição do produto
- perfis de usuário
- fluxos de usuário
- funcionalidades principais
- não-objetivos
- critérios de sucesso

O Contexto do Produto funciona como a **fonte da verdade para a etapa de implementação**.

Todas as etapas seguintes dependem da clareza deste documento.

---

## Etapa 4 — Definição do design system

### Deplova Guardrails

O Deplova Guardrails é utilizado para definir o design system do produto.

O Guardrails funciona como um **compilador de design system**.

Por meio de um wizard de configuração, o sistema captura decisões de design, incluindo:

- tipografia
- paleta de cores
- escala de espaçamento
- filosofia de layout
- restrições de componentes
- regras de animação
- requisitos de acessibilidade
- tom e diretrizes de conteúdo

Em vez de documentar essas decisões manualmente, o Guardrails as converte em **definições de sistema estruturadas**.

---

## Etapa 5 — AI Design Prompt

Um dos principais outputs produzidos pelo Deplova Guardrails é um **prompt pronto para uso com IA**.

Este prompt contém todo o contexto do design system que as ferramentas de IA devem seguir durante a geração de interfaces.

O prompt garante que as interfaces geradas respeitem as regras do sistema configurado.

Instruções típicas incluem:

- utilizar apenas a paleta de cores definida
- respeitar a escala de espaçamento
- aplicar o sistema tipográfico
- seguir as restrições de acessibilidade
- manter estruturas de componentes consistentes

Ao injetar esse prompt no início das sessões de IA, o Deplova garante que a geração de UI permaneça **consistente e determinística**.

---

## Etapa 6 — Design Tokens

O Deplova Guardrails também produz **design tokens**.

Esses tokens definem os valores em runtime utilizados pela aplicação.

Categorias típicas de tokens incluem:

- cores
- tipografia
- espaçamento
- grid
- border radius
- animação

Os tokens podem ser integrados ao sistema de governança de tokens do Deplova para oferecer:

- versionamento
- distribuição entre projetos
- outputs compatíveis com frameworks

Os design tokens garantem que o design system seja aplicado de forma consistente em toda a aplicação.

---

## Etapa 7 — Arquétipo de Produto

Os Arquétipos de Produto definem o modelo estrutural do produto.

A maioria dos MVPs se encaixa em uma pequena lista de categorias recorrentes, como:

- SaaS dashboards
- ferramentas internas
- marketplaces
- diretórios
- plataformas de conteúdo

Cada arquétipo define:

- páginas típicas
- funcionalidades esperadas
- estruturas de dados
- fluxos de usuário

Selecionar um arquétipo permite ao sistema instanciar rapidamente uma estrutura de produto, reduzindo significativamente as decisões arquiteturais durante a implementação.

---

## Etapa 8 — Product Skeleton

O Product Skeleton fornece a arquitetura base utilizada em todos os projetos Deplova.

Em vez de gerar uma aplicação inteira do zero, o desenvolvimento começa a partir de **uma fundação pré-construída**.

O skeleton tipicamente inclui:

- estrutura de aplicação Next.js
- sistema de autenticação
- framework de layout
- componentes de UI primitivos
- camada de API
- integração com banco de dados
- configuração de deploy

Essa arquitetura cobre a maior parte da infraestrutura técnica necessária para produtos em estágio inicial.

O skeleton garante que as aplicações sejam construídas sobre **uma fundação estável e consistente**.

---

## Etapa 9 — Implementação de funcionalidades

Nessa etapa o produto é implementado.

O sistema de IA recebe os seguintes inputs:

- Contexto do Produto
- AI Design Prompt
- Arquétipo de Produto
- Product Skeleton

Esses inputs fornecem à IA:

- requisitos do produto
- restrições de design
- modelo estrutural
- arquitetura da aplicação

A IA então foca em implementar as funcionalidades definidas no escopo do MVP.

Como a arquitetura e o design system já estão definidos, a implementação se torna significativamente mais eficiente.

---

## Etapa 10 — Deploy

Uma vez concluída a implementação, o produto é deployado.

A infraestrutura típica inclui:

- Vercel para hospedagem da aplicação
- Supabase para banco de dados e serviços de backend

O output final é uma **aplicação MVP funcional** pronta para testes, iterações e feedback de usuários.

---

## Princípios arquiteturais

O pipeline do Deplova é baseado em alguns princípios fundamentais.

### Geração estruturada

A criação de produto é dividida em etapas explícitas que definem diferentes aspectos do sistema.

### Geração de interfaces determinística

Os design systems são compilados em restrições legíveis por máquina que guiam as ferramentas de IA.

### Arquitetura reutilizável

Product Skeletons e Arquétipos reduzem o trabalho repetido entre projetos.

### Implementação assistida por IA

Ferramentas de IA aceleram a implementação de funcionalidades enquanto operam dentro de limites de sistema predefinidos.

---

## Resumo

O pipeline do Deplova combina:

- definição estruturada de produto
- compilação de design system
- estruturas de produto reutilizáveis
- arquitetura de aplicação padronizada
- implementação de funcionalidades assistida por IA

Juntos, esses componentes criam um **sistema repetível para gerar produtos de software MVP de forma rápida e confiável**.
