# Product Skeleton

Documento interno de arquitetura

---

## Visão geral

O **Product Skeleton** é a arquitetura base utilizada pelo Deplova para acelerar o desenvolvimento de MVPs.

Em vez de gerar aplicações inteiras do zero, todo projeto começa a partir de **uma estrutura de aplicação pré-construída**, que já inclui os sistemas mais comuns necessários em produtos web modernos.

Isso permite que o processo de construção foque apenas em **lógica e funcionalidades específicas do produto**, reduzindo drasticamente o tempo e a complexidade de desenvolvimento.

O Product Skeleton normalmente fornece **70–80% da estrutura necessária para um MVP** antes mesmo de qualquer implementação específica do produto começar.

---

## Ideia central

No desenvolvimento tradicional, muitas vezes se começa com um repositório vazio.

```
novo projeto
  ↓
definir arquitetura
  ↓
construir fundação
  ↓
implementar funcionalidades
```

O Product Skeleton remove os dois primeiros passos.

```
product skeleton
  ↓
injetar contexto do produto
  ↓
implementar funcionalidades
  ↓
deploy
```

Em vez de gerar a arquitetura repetidamente, a Deplova utiliza **uma fundação de aplicação estável**, que evolui ao longo do tempo.

---

## Por que o Product Skeleton existe

Existem três razões principais para usar uma arquitetura baseada em skeleton.

### 1 — Eliminar setup repetido

A maioria dos produtos em estágio inicial precisa das mesmas capacidades básicas:

- autenticação
- layout de dashboard
- navegação
- integração com banco de dados
- formulários
- estrutura de API
- configuração de deploy

Sem um skeleton, esses sistemas precisam ser recriados em cada projeto.

O skeleton centraliza essas capacidades em **uma fundação reutilizável**.

### 2 — Aumentar a velocidade de construção

Gerar arquitetura do zero aumenta:

- tempo de geração
- probabilidade de erros
- esforço de debugging

Quando a arquitetura já existe, a implementação pode focar apenas na **lógica de funcionalidades**.

Isso reduz significativamente os ciclos de iteração.

### 3 — Melhorar a previsibilidade

Começar de uma estrutura conhecida garante que:

- a arquitetura da aplicação permaneça consistente
- as funcionalidades geradas se integrem de forma limpa
- o deploy funcione de forma confiável

Previsibilidade é fundamental para comprimir o tempo de desenvolvimento.

---

## Estrutura típica do skeleton

Um repositório típico de Product Skeleton possui a seguinte estrutura.

```
deplova-skeleton/

  app/
  components/
  features/
  hooks/
  lib/
  api/
  db/
  styles/
  layout/
```

Cada diretório tem um papel específico dentro da arquitetura da aplicação.

---

## Sistemas principais incluídos no skeleton

O skeleton fornece vários sistemas pré-construídos necessários para a maioria dos MVPs.

### Autenticação

A autenticação vem pré-configurada usando Supabase.

Capacidades incluem:

- login
- cadastro
- gerenciamento de sessão
- rotas protegidas

Isso evita reconstruir fluxos de autenticação em cada projeto.

### Sistema de layout

O sistema de layout fornece a fundação estrutural da interface.

Inclui:

- shell de navegação
- layout de dashboard
- sistema de containers responsivos
- estrutura base de páginas

Todas as funcionalidades se encaixam dentro dessa estrutura.

### Sistema de componentes

O skeleton inclui uma biblioteca base de componentes de interface reutilizáveis.

Componentes típicos incluem:

- Button
- Input
- Card
- Modal
- Table
- controles de formulário
- componentes de navegação

Esses componentes são integrados com os design tokens produzidos pelo Deplova Guardrails.

### Sistema de formulários

Formulários são um padrão de interação central na maioria dos produtos.

O skeleton fornece um sistema padronizado para lidar com formulários, incluindo:

- validação
- envio de dados
- estados de erro
- estilização consistente

### Camada de banco de dados

A camada de banco de dados fornece uma interface consistente para o modelo de dados da aplicação.

Normalmente inclui:

- integração com Supabase
- utilitários de cliente de banco
- organização de schema
- suporte a migrações

### Camada de API

A camada de API fornece um local estruturado para lógica de backend.

Responsabilidades incluem:

- server actions
- rotas de API
- lógica de integração
- conexão com serviços externos

Isso garante que o código backend permaneça organizado de forma previsível.

### Configuração de deploy

O skeleton inclui configuração de deploy para a infraestrutura padrão.

Configurações típicas incluem:

- setup de projeto na Vercel
- estrutura de variáveis de ambiente
- configuração de build
- parâmetros de deploy em produção

---

## Integração com o processo de construção

O Product Skeleton é combinado com outros inputs do sistema na etapa de implementação.

```
Contexto do Produto
      +
AI Design Prompt
      +
Arquétipo de Produto
      +
Product Skeleton
      ↓
Implementação de funcionalidades
      ↓
Deploy
```

Em vez de gerar uma aplicação inteira, o sistema implementa apenas **as funcionalidades definidas no escopo do produto**.

---

## Papel do operador

O operador prepara os inputs do sistema antes do início da implementação.

Isso inclui:

- definir o Contexto do Produto
- confirmar o escopo do MVP
- garantir que o skeleton seja adequado para o produto

O operador não constrói o produto manualmente, mas garante que o sistema tenha **as restrições e informações corretas**.

---

## Impacto esperado

O Product Skeleton reduz drasticamente o overhead de desenvolvimento.

Benefícios típicos incluem:

- implementação inicial mais rápida
- menos erros arquiteturais
- debugging mais simples
- deploys mais previsíveis

Sem um skeleton, builds exigem decisões estruturais repetidas.

Com um skeleton, o sistema pode focar exclusivamente na **funcionalidade do produto**.

---

## Evolução no longo prazo

O Product Skeleton não é estático.

Ele evolui ao longo do tempo conforme novos padrões e capacidades são adicionados.

À medida que mais produtos são construídos com o sistema, o skeleton se torna cada vez mais poderoso, cobrindo uma parcela maior das necessidades comuns de produtos em estágio inicial.

O objetivo de longo prazo é que o skeleton represente **a arquitetura padrão para a maioria dos produtos de classe MVP**.
