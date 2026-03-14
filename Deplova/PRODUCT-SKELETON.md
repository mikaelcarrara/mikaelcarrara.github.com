A versão final do **Product Skeleton** precisa refletir a arquitetura que você definiu no pipeline:

```
AI Design Prompt
↓
Product Archetype
↓
Skeleton Instantiation
```

Então o Skeleton não define **produto**, nem **interface**.
Ele define apenas **infraestrutura executável**.

Abaixo está uma versão **limpa, consistente com o pipeline e simples para agentes**.

---

# Product Skeleton

## Visão geral

O **Product Skeleton** é a infraestrutura base utilizada pelo sistema Deplova para gerar aplicações web.

Em vez de iniciar cada produto com uma arquitetura nova, todos os projetos começam a partir de **uma fundação de aplicação reutilizável**.

Essa fundação fornece os sistemas essenciais necessários para executar produtos web modernos.

O Skeleton não define o produto nem a interface.

Esses elementos são definidos anteriormente no pipeline por:

```
AI Design Prompt
Product Archetype
```

O Skeleton apenas fornece **a infraestrutura onde o produto será executado**.

---

# Papel no pipeline

O Product Skeleton é utilizado na etapa de **Skeleton Instantiation**.

Fluxo simplificado:

```
AI Design Prompt
↓
Product Archetype
↓
Skeleton Instantiation
↓
Feature Implementation
↓
Deploy
```

Nesse momento do pipeline o sistema já conhece:

* o tipo de produto (arquétipo)
* a estrutura de páginas
* os módulos do produto
* os padrões de interface

O Skeleton fornece a base técnica para transformar essa definição em **uma aplicação funcional**.

---

# Ideia central

Sem um Skeleton, cada projeto começa com decisões arquiteturais repetidas.

```
novo projeto
↓
definir arquitetura
↓
configurar infraestrutura
↓
começar implementação
```

Com um Product Skeleton:

```
product skeleton
↓
injetar estrutura do produto
↓
implementar funcionalidades
↓
deploy
```

Isso elimina a necessidade de recriar infraestrutura em cada build.

---

# Sistemas incluídos no Skeleton

O Skeleton contém apenas os sistemas fundamentais necessários para executar aplicações web.

Ele não define interface nem estrutura de produto.

---

# Application Runtime

O Skeleton define a estrutura base da aplicação.

Exemplo de organização:

```
app/
components/
features/
lib/
api/
db/
config/
styles/
```

Essa estrutura organiza o código gerado de forma previsível.

---

# Authentication System

O Skeleton inclui um sistema de autenticação pré-configurado.

Capacidades incluem:

```
login
signup
session management
protected routes
```

Isso evita a necessidade de implementar autenticação em cada produto.

---

# Data Layer

A camada de dados fornece acesso estruturado ao banco de dados.

Capacidades típicas:

```
database client
schema organization
data access utilities
```

Isso permite que entidades do produto sejam implementadas rapidamente.

---

# Server Layer

A camada de servidor organiza a lógica de backend da aplicação.

Responsabilidades incluem:

```
API routes
server actions
business logic
external integrations
```

Essa camada conecta a interface do produto ao modelo de dados.

---

# Deployment Infrastructure

O Skeleton inclui configuração padrão de deploy.

Capacidades típicas:

```
build configuration
environment variables
deployment setup
production configuration
```

Isso permite publicar produtos rapidamente.

---

# O que o Skeleton não define

O Product Skeleton não define elementos do produto.

Ele não determina:

```
pages
navigation
layout
components
features
```

Esses elementos são definidos por:

```
AI Design Prompt
Product Archetype
```

---

# Skeleton Instantiation

Durante a etapa de **Skeleton Instantiation**, o sistema combina:

```
Product Skeleton
+
Product Archetype
+
AI Design Prompt
```

O resultado é uma aplicação funcional onde:

* o Skeleton fornece infraestrutura
* o Archetype define a estrutura do produto
* o Design Prompt define a interface

---

# Benefícios do Skeleton

O uso de um Product Skeleton oferece várias vantagens:

* elimina configuração repetida de infraestrutura
* acelera a geração de aplicações
* reduz erros arquiteturais
* torna o processo de build mais previsível

Isso permite que o sistema foque principalmente na **implementação das funcionalidades do produto**.

---

# Evolução do Skeleton

O Product Skeleton evolui ao longo do tempo conforme novos padrões de infraestrutura são identificados.

Possíveis evoluções incluem:

* novas integrações
* novos sistemas de dados
* melhorias de performance
* suporte a novos serviços

O objetivo é manter o Skeleton como **uma infraestrutura estável e confiável para geração rápida de produtos web**.
