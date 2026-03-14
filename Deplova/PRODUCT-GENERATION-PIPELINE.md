# Pipeline de Geração de Produto

Este documento descreve o **pipeline de geração de produtos utilizado pelo Deplova** para transformar ideias iniciais em aplicações MVP funcionais.

A Deplova estrutura a criação de produtos como um **pipeline em camadas**, combinando definição estruturada de produto, infraestrutura de design system, arquitetura reutilizável e implementação assistida por IA.

O objetivo desse pipeline é permitir uma **geração de produtos previsível, consistente e repetível**.

---

# Visão geral do pipeline

O pipeline da Deplova converte uma ideia de produto em uma aplicação funcional por meio de uma sequência de etapas bem definidas.

```

Ideia
Identificação de um conceito de produto ou oportunidade.

↓
Briefing
Conversa estruturada para extrair problema, usuários e funcionalidades iniciais.

↓
Product Context
Documento estruturado que define escopo, usuários, fluxos e objetivos do MVP.

↓
Product Spec
Especificação técnica do produto, incluindo páginas, entidades e estrutura do sistema.

↓

AI Design Prompt

Contexto do design system e regras de geração de interface utilizadas pelas ferramentas de IA para produzir interfaces consistentes.

↓

Product Archetype

Modelo estrutural do produto selecionado com base em padrões recorrentes (ex: SaaS, diretório, marketplace).
Inclui a composição estrutural do produto (archetype + modules + features).

↓

Skeleton Instantiation

Instanciação de uma aplicação funcional a partir do Product Skeleton, combinando:

- infraestrutura base da aplicação
- estrutura definida pelo Product Archetype
- interface gerada a partir do AI Design Prompt.

↓
Build
Implementação das funcionalidades do MVP assistida por ferramentas de IA.

↓
Review
Supervisão humana para validar funcionalidade, consistência e aderência ao escopo.

↓
Deploy
Publicação da aplicação em infraestrutura de produção.

```

Cada etapa define um aspecto específico do produto e reduz a complexidade da etapa seguinte.

O resultado final é um **MVP funcional deployado**, pronto para testes e iteração.

---

# Arquitetura em Camadas

O pipeline da Deplova pode ser entendido como três camadas principais que se combinam para gerar o produto final.

```

Product Layer
↓
Design Layer
↓
Execution Layer

```

Cada camada define um aspecto diferente do sistema.

---

## Product Layer

A Product Layer define **o que está sendo construído**.

Ela descreve o produto em termos de problema, usuários, funcionalidades e estrutura.

Componentes dessa camada:

- Ideia
- Briefing
- Product Context
- Product Spec
- Product Archetype

Essa camada transforma um conceito inicial em uma **definição estruturada de produto**.

---

## Design Layer

A Design Layer define **como a interface do produto deve ser gerada**.

Ela contém as regras do design system que guiam a geração de interfaces por ferramentas de IA.

Componentes dessa camada:

- AI Design Prompt
- Design tokens
- Sistema tipográfico
- Grid e espaçamento
- Regras de acessibilidade
- Padrões de componentes

Essa camada garante que a interface gerada seja **consistente e determinística**.

---

## Execution Layer

A Execution Layer define **como o produto é implementado e entregue**.

Ela contém a infraestrutura técnica e o ambiente onde a aplicação é construída.

Componentes dessa camada:

- Product Skeleton
- Implementação assistida por IA
- Supervisão humana
- Deploy

Essa camada transforma a definição do produto em **software executável**.

---

# Etapas do Pipeline

## Etapa 1 — Ideia

Todo projeto começa com uma ideia ou oportunidade de produto.

Nesta etapa o conceito ainda pode ser informal. Normalmente a ideia descreve:

- um problema
- um público-alvo
- uma possível solução

O objetivo desta etapa é simplesmente identificar **um conceito de produto que vale a pena explorar**.

---

## Etapa 2 — Briefing

O briefing converte a ideia inicial em uma definição mais clara de produto.

Uma conversa estruturada é utilizada para extrair informações essenciais.

Tópicos comuns incluem:

- o problema central
- o usuário-alvo
- possíveis funcionalidades
- objetivos do produto
- restrições ou requisitos

A sessão é gravada e utilizada como input para as próximas etapas.

---

## Etapa 3 — Product Context

O Product Context é um documento estruturado que define o escopo do MVP.

Ele normalmente inclui:

- descrição do produto
- perfis de usuário
- fluxos de usuário
- funcionalidades principais
- não-objetivos
- critérios de sucesso

Esse documento se torna a **principal fonte de verdade para a implementação**.

---

## Etapa 4 — Product Spec

O Product Spec traduz o contexto do produto em uma **especificação implementável**.

Enquanto o Product Context descreve o produto conceitualmente, o Product Spec define sua estrutura técnica.

Normalmente inclui:

- páginas do produto
- componentes principais
- entidades de dados
- relações entre entidades
- endpoints ou operações principais

Esse documento fornece à implementação uma **estrutura clara do sistema**.

---

## Etapa 5 — AI Design Prompt

O AI Design Prompt contém o contexto do design system que as ferramentas de IA devem seguir ao gerar interfaces.

Ele garante que as interfaces produzidas respeitem as regras visuais e estruturais do sistema.

### Regras típicas

- utilizar apenas a paleta de cores definida
- respeitar a escala de espaçamento
- aplicar o sistema tipográfico
- seguir padrões de acessibilidade
- manter estruturas consistentes de componentes

### Tokens incluídos

- cores
- tipografia
- espaçamento
- grid
- border radius
- animação

---

## Etapa 6 — Product Archetype

Os Arquétipos de Produto definem modelos estruturais recorrentes.

A maioria dos MVPs se encaixa em algumas categorias comuns, como:

- SaaS dashboards
- ferramentas internas
- marketplaces
- diretórios
- plataformas de conteúdo

Cada arquétipo define:

- páginas típicas
- fluxos de usuário
- estruturas de dados comuns
- funcionalidades esperadas

Selecionar um arquétipo reduz significativamente as decisões arquiteturais durante a implementação.

---

## Etapa 7 — Skeleton Instantiation

O Product Skeleton fornece a arquitetura base utilizada em todos os projetos Deplova.

Em vez de iniciar cada aplicação do zero, o desenvolvimento parte de uma fundação pré-construída.

O skeleton normalmente inclui:

- estrutura de aplicação Next.js
- sistema de autenticação
- framework de layout
- componentes de UI primitivos
- camada de API
- integração com banco de dados
- configuração de deploy

---

## Etapa 8 — Implementação (Build)

Nesta etapa o produto é implementado.

A IA recebe como inputs:

- Product Context
- Product Spec
- AI Design Prompt
- Product Archetype
- Product Skeleton

A IA então implementa as funcionalidades definidas no escopo do MVP.

---

## Etapa 9 — Review

Após a implementação inicial, o sistema passa por uma etapa de revisão.

Supervisão humana valida:

- funcionamento do produto
- aderência ao escopo
- consistência da interface
- eventuais correções necessárias

---

## Etapa 10 — Deploy

Uma vez concluída a revisão, o produto é deployado.

Infraestrutura típica:

- Vercel para hospedagem da aplicação
- Supabase para banco de dados e backend

O resultado final é uma **aplicação MVP funcional disponível online**.

---

# Resumo

O pipeline da Deplova combina:

- definição estruturada de produto
- regras explícitas de design system
- modelos reutilizáveis de produto
- arquitetura de aplicação padronizada
- implementação assistida por IA

Juntos, esses elementos formam um **sistema repetível para gerar produtos de software MVP de forma rápida e confiável**.
```

---

💡 **Sugestão pequena mas poderosa para esse documento**

Se quiser deixar ele ainda mais **“engenharia de sistema”**, dá para adicionar um pequeno bloco no topo:

```
Estimated execution time

Discovery → ~1h  
Backlog generation → ~1h  
Build → ~48h  
Review + Deploy → ~1h
```

Isso conecta diretamente o **pipeline técnico** com a promessa operacional da Deplova.

Se quiser, no próximo passo podemos também projetar o **schema do Product Spec**, que provavelmente será **o coração técnico do sistema**.
