Aqui está uma **primeira versão limpa do documento *System Primitives***, alinhada com tudo que você definiu no pipeline.
A ideia desse documento é **definir os blocos fundamentais do sistema** — os conceitos que todo agente ou operador precisa entender.

---

```markdown
# Deplova — System Primitives

Este documento define os **princípios fundamentais e os objetos centrais do sistema Deplova**.

Os *System Primitives* são os blocos básicos que permitem transformar **uma ideia em software funcional** através do pipeline de geração de produto.

Todos os componentes do sistema operam sobre esses primitives.

---

# 1 — Product Spec

O **Product Spec** é a representação estruturada do produto.

Ele descreve:

- entidades do sistema
- páginas da aplicação
- fluxos principais
- funcionalidades do MVP

O Product Spec não define design nem arquitetura técnica.  
Ele define **o que o produto precisa fazer**.

```

Conversation
↓
Transcript
↓
Product Spec

```

O Product Spec é o principal **input de geração do produto**.

---

# 2 — Product Archetype

O **Product Archetype** é o padrão estrutural do produto.

Ele representa um modelo recorrente de aplicação digital, como:

- SaaS
- diretório
- marketplace
- ferramenta interna
- dashboard

Um archetype define a **estrutura típica do produto**.

```

Product Spec
↓
Product Archetype
↓
Modules
↓
Features

```

Formalmente:

```

# Product Archetype

archetype
+
modules
+
features

```

O archetype permite que o sistema reutilize **padrões conhecidos de produto**.

---

# 3 — AI Design Prompt

O **AI Design Prompt** define o contexto de design utilizado pelas ferramentas de IA.

Ele contém:

- design system
- tokens de design
- componentes
- regras de layout
- guardrails de interface

O design prompt garante que a interface gerada seja **consistente e previsível**.

```

AI Design Prompt
↓
Interface Generation

```

Ele não depende do produto específico e pode ser reutilizado entre projetos.

---

# 4 — Product Skeleton

O **Product Skeleton** é a arquitetura base da aplicação.

Ele fornece uma fundação reutilizável contendo:

- estrutura de diretórios
- layout base
- sistema de componentes
- integração com banco
- infraestrutura de API
- configuração de deploy

O skeleton representa **a base técnica da aplicação**.

```

Product Skeleton
↓
Application Instance

```

Ele elimina a necessidade de reconstruir arquitetura em cada projeto.

---

# 5 — Build System

O **Build System** é o mecanismo que transforma a especificação do produto em software funcional.

Ele combina os três inputs principais:

```

Product Spec
+
Product Archetype
+
AI Design Prompt
↓
Skeleton Instantiation
↓
Build
↓
Working Application

```

Durante o build, ferramentas de IA:

- implementam funcionalidades
- geram páginas
- conectam APIs
- integram banco de dados
- estruturam o código da aplicação

---

# Primitive Interaction Model

A geração de um produto ocorre através da interação entre os primitives.

```

Product Spec
↓
Product Archetype

Product Spec
+
Product Archetype
+
AI Design Prompt
↓
Skeleton Instantiation
↓
Build
↓
Deploy

```

Cada primitive contribui com um aspecto específico da aplicação.

---

# Primitive Responsibilities

Resumo das responsabilidades de cada primitive.

| Primitive | Responsabilidade |
|----------|----------------|
| Product Spec | Define o produto |
| Product Archetype | Define a estrutura do produto |
| AI Design Prompt | Define a interface |
| Product Skeleton | Define a arquitetura técnica |
| Build System | Gera o software |

---

# Primitive Philosophy

O sistema Deplova funciona separando **cinco dimensões fundamentais da geração de software**:

```

Product
Structure
Design
Architecture
Execution

```

Essas dimensões correspondem diretamente aos primitives definidos neste documento.

Essa separação permite que o sistema:

- mantenha previsibilidade
- reutilize padrões
- automatize geração de produto
- escale construção de MVPs
```