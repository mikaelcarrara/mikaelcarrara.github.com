# CLAUDE-DEPLOVA

## Como o Claude Code se integra ao Pipeline da Deplova

---

## Visão geral

O Claude Code e o pipeline da Deplova são **complementares, não redundantes**. Eles operam em camadas diferentes do processo de criação de produto.

O pipeline da Deplova resolve *o que e como construir*. O Claude Code resolve *quem executa a construção*.

---

## O que é o Claude Code

O Claude Code é uma ferramenta de codificação agêntica da Anthropic que roda no terminal, em IDEs e no navegador. Ele lê código, edita arquivos, executa comandos, faz commits e abre pull requests — tudo em linguagem natural.

É uma ferramenta de **implementação**. Ele é eficiente quando recebe contexto claro sobre o que deve ser construído. Sem esse contexto, a qualidade do output depende da qualidade do prompt improvisado pelo usuário.

---

## O que o Claude Code não faz

O Claude Code não define produto, não compila design systems, não escolhe arquétipos e não gera design tokens. Ele recebe contexto e implementa. Por isso, a qualidade do que ele produz é diretamente proporcional à qualidade do contexto que recebe.

É exatamente aqui que o pipeline da Deplova entra.

---

## Onde o Claude Code se encaixa no pipeline

| Etapa | Descrição | Claude Code resolve? |
|---|---|---|
| 1 — Ideia de produto | Identificação do conceito | ❌ |
| 2 — Briefing | Definição estruturada do produto | ❌ |
| 3 — Contexto do Produto | Documento de escopo do MVP | ❌ |
| 4 — Deplova Guardrails | Compilação do design system | ❌ |
| 5 — AI Design Prompt | Prompt de design para IA | ⚠️ Consome, não produz |
| 6 — Design Tokens | Valores de runtime do design system | ❌ |
| 7 — Arquétipo de Produto | Modelo estrutural do produto | ⚠️ Pode usar, não define |
| 8 — Product Skeleton | Arquitetura base da aplicação | ⚠️ Pode usar, não constrói |
| **9 — Build** | **Implementação das funcionalidades** | ✅ É aqui que ele brilha |
| 10 — Deploy | Publicação da aplicação | ⚠️ Apoio parcial |

---

## Como o pipeline potencializa o Claude Code

As etapas 1 a 8 do pipeline produzem exatamente os inputs que a Etapa 9 precisa:

- **Contexto do Produto** → define o escopo e os requisitos
- **AI Design Prompt** → garante consistência visual e de componentes
- **Arquétipo de Produto** → define o modelo estrutural
- **Product Skeleton** → fornece a arquitetura base

Ao passar esses documentos para o Claude Code, a implementação se torna significativamente mais eficiente e determinística. Em vez de construir do zero a partir de um prompt vago, o Claude Code opera dentro de limites bem definidos — exatamente como o pipeline foi projetado para funcionar.

---

## Uso recomendado

Ao iniciar uma sessão de implementação com o Claude Code, injete os seguintes documentos como contexto:

1. `product-context.md` — o Contexto do Produto gerado na Etapa 3
2. `ai-design-prompt.md` — o AI Design Prompt gerado pelo Guardrails
3. referência ao arquétipo selecionado
4. referência ao Product Skeleton em uso

Com esses inputs, o Claude Code tem tudo que precisa para implementar as funcionalidades do MVP de forma consistente com o design system e a arquitetura definidos.

---

## Resumo

O pipeline da Deplova não é substituído pelo Claude Code — ele é o que torna o Claude Code realmente eficiente. Sem o pipeline, o Claude Code é uma ferramenta poderosa sem direção clara. Com o pipeline, ele se torna um executor preciso dentro de um sistema bem definido.

```
Pipeline da Deplova → contexto estruturado → Claude Code → produto consistente
```
