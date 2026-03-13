# Arquétipos de Produto

Documento conceitual interno

---

## Visão geral

**Arquétipos de Produto** são modelos estruturais de produtos digitais.

A maioria dos produtos de software não começa realmente do zero.  
Eles tendem a seguir **padrões recorrentes de estrutura, navegação e funcionalidades**.

Em vez de tratar cada novo produto como um caso totalmente único, a Deplova utiliza **arquétipos de produto** como ponto de partida para acelerar o desenvolvimento de MVPs.

Esses arquétipos representam **formas comuns de software** que aparecem repetidamente no mercado.

Ao reconhecer esses padrões, é possível reduzir decisões iniciais e acelerar significativamente o processo de construção.

---

## Ideia central

No desenvolvimento tradicional, cada produto começa com uma fase de exploração estrutural.

```
ideia
  ↓
definir estrutura do produto
  ↓
desenhar navegação
  ↓
definir páginas
  ↓
implementar
```

Com Arquétipos de Produto, parte dessa estrutura já é conhecida.

```
ideia
  ↓
identificar arquétipo de produto
  ↓
adaptar estrutura
  ↓
implementar funcionalidades específicas
```

Isso reduz a ambiguidade no início do projeto e acelera a implementação.

---

## Por que usar arquétipos de produto

Existem três razões principais para utilizar arquétipos.

### 1 — Reduzir decisões estruturais

Muitos produtos possuem estruturas muito semelhantes.

Por exemplo:

- dashboards administrativos
- ferramentas internas
- marketplaces
- plataformas de conteúdo
- landing pages com conversão

Em vez de decidir tudo do zero, o arquétipo já fornece **uma estrutura inicial validada**.

### 2 — Acelerar o design de interface

Arquétipos também ajudam a definir rapidamente:

- estrutura de páginas
- layout base
- navegação principal
- tipos de componentes necessários

Isso reduz o tempo gasto em decisões de UX no início do projeto.

### 3 — Melhorar previsibilidade

Quando produtos seguem padrões estruturais conhecidos, fica mais fácil:

- integrar funcionalidades
- organizar o código
- manter consistência entre projetos

Isso aumenta a previsibilidade do processo de construção.

---

## Arquétipos comuns

A Deplova utiliza alguns arquétipos principais que cobrem a maior parte dos produtos em estágio inicial.

---

### SaaS Dashboard

Um dos formatos mais comuns.

Características típicas:

- autenticação de usuários
- dashboard principal
- navegação lateral
- páginas de configuração
- gestão de dados
- formulários e tabelas

Esse arquétipo é comum em:

- ferramentas SaaS
- plataformas de analytics
- sistemas de gestão

---

### Ferramenta Interna

Ferramentas usadas internamente por equipes ou empresas.

Características:

- interface funcional
- foco em eficiência
- operações sobre dados
- automações simples

Exemplos:

- painéis administrativos
- ferramentas de operação
- sistemas de suporte

---

### Marketplace

Produtos que conectam dois ou mais tipos de usuários.

Características:

- perfis de usuários
- listagens ou catálogos
- páginas de detalhe
- sistema de busca
- interações entre usuários

Esse arquétipo aparece em:

- plataformas de serviços
- plataformas de venda
- diretórios e catálogos

---

### Plataforma de Conteúdo

Produtos focados em publicação ou consumo de conteúdo.

Características:

- páginas de conteúdo
- navegação por categorias
- busca
- leitura otimizada

Exemplos:

- blogs
- plataformas de artigos
- hubs de conteúdo

---

### Landing + Lista de Espera

Arquétipo simples para validar ideias rapidamente.

Características:

- página de apresentação do produto
- formulário de captura de interesse
- lista de espera
- métricas básicas de conversão

Esse tipo de produto é comum nas primeiras fases de validação.

---

## Relação com o pipeline da Deplova

Os arquétipos fazem parte do processo maior de geração de produtos.

O fluxo completo é:

```
Ideia de produto
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

O arquétipo funciona como **um acelerador estrutural** dentro do pipeline, reduzindo as decisões arquiteturais necessárias antes da implementação.

---

## Relação com o Product Skeleton

Os arquétipos não substituem a arquitetura base.

Eles trabalham **em conjunto com o Product Skeleton**.

A distinção é clara:

- o **arquétipo** define a forma do produto — suas páginas, navegação e fluxos
- o **skeleton** fornece a estrutura técnica da aplicação — autenticação, layout, componentes, banco de dados

---

## Relação com a Deplova Guardrails

Os arquétipos também trabalham em conjunto com o design system.

A Deplova Guardrails define:

- organização de layout
- padrões de navegação
- uso de componentes
- fluxo de interação

O arquétipo orienta quais desses padrões aplicar para cada tipo de produto.

---

## Evolução dos arquétipos

Os arquétipos não são fixos.

Eles evoluem conforme novos padrões de produto são identificados.

À medida que mais produtos são construídos usando o sistema, novos arquétipos podem surgir ou os existentes podem se tornar mais sofisticados.

O objetivo é que, com o tempo, a maioria dos produtos em estágio inicial possa ser descrita através de **uma pequena biblioteca de arquétipos bem definidos**.

Isso reduz ainda mais o tempo entre **ideia e produto funcional**.
