# Incept 48 — Do papel ao ar em 48 horas.

> **Documento de Alinhamento Interno (v1.0)**  
> **Público-alvo:** Sócios e time fundador  
> **Objetivo:** Garantir que todos os stakeholders estejam olhando para a mesma direção.

---

## 01 — Visão Geral
### O que é a Incept 48?

Uma **fábrica de MVPs** onde a IA faz o discovery e o build. O cliente fala, prioriza, e o **Claude Code** escreve, testa e faz deploy do produto.

Um operador humano supervisiona. **Nenhum desenvolvedor executa manualmente.** A maioria das agências leva 6 semanas para entregar um MVP; a Incept 48 elimina cerimônias desnecessárias e comprime o valor em apenas dois dias.

| Característica | Modelo Tradicional | Incept 48 |
| :--- | :--- | :--- |
| **Discovery** | 2 semanas de reuniões | **1h de conversa gravada** |
| **Proposta** | 1 semana + aprovação | **Backlog gerado por IA em 1h** |
| **Execução** | 3 semanas de sprint | **Build de 48h com Claude Code** |
| **Mão de obra** | Dev humano executa tudo | **Operador humano supervisiona** |
| **Escalabilidade** | Custo marginal alto | **Custo marginal próximo de zero** |

---

## 02 — Operação
### O Fluxo Completo

Da contratação ao deploy — o que acontece internamente em cada etapa:

1.  **Hora 0: Sessão Gravada**  
    Reunião de 60 min via Zoom/Meet, gravada automaticamente. Sem formulários ou decks.
2.  **Hora 1: Transcrição e Estruturação**  
    Whisper transcreve o áudio e a Claude API gera o backlog estruturado em JSON.
3.  **Hora 2: Briefing Entregue**  
    Cliente acessa o dashboard com backlog, score de ROI e interface de priorização.
4.  **Hora 4: Início do Build**  
    Claude Code recebe o contexto completo e começa a escrever o produto autonomamente.
5.  **Hora 48: Deploy e Entrega**  
    Claude Code testa, corrige e faz deploy via Vercel ou Railway.

#### Detalhamento Técnico do Build (Hora 4 - 48)
- **Supervisão:** O operador monitora commits e revisa PRs.
- **Autonomia:** O Claude Code não apenas escreve código; ele testa, identifica erros e itera sobre a solução.
- **Previsibilidade:** O escopo é travado na Hora 2, garantindo que o build seja focado e rápido.

### Fluxo do Operador / Dev-Acompanhador

Do lado interno, existe um **dev/acompanhador** responsável por orquestrar o Claude Code. Ele não escreve features na unha; ele configura contexto, guardrails e acompanha a execução.

1. **Configuração de contexto de produto e design**  
   O dev/acompanhador parte da transcrição, backlog e protótipo para montar o contexto de trabalho do Claude: visão de produto, princípios de UX, linguagem de marca, restrições técnicas e prioridades de negócio.

2. **Definição de guardrails**  
   No cockpit interno (Incept42), o operador define limites explícitos: o que o Claude pode ou não alterar, padrões de arquitetura aceitos, contratos de API, políticas de segurança e dados que nunca podem ser expostos.

3. **Orquestração de agentes e ferramentas**  
   O Incept42 conecta o Claude Code ao repositório, CI/CD e infraestrutura. O operador escolhe templates de prompt (build, testes, refactor, migrações) e ativa ou pausa fases do pipeline.

4. **Acompanhamento e intervenção mínima**  
   Durante as 48 horas, o dev/acompanhador acompanha diffs, PRs e logs. Ele intervém apenas para corrigir rota (por exemplo, recortar escopo, pedir refactor ou ajustar uma decisão de UX crítica).

5. **Aprendizado contínuo dos templates**  
   As decisões tomadas pelo operador alimentam os templates de contexto e guardrails. A cada projeto, o Incept42 fica melhor em traduzir briefing de negócio em instruções acionáveis para o Claude Code.

---

## 03 — Experiência do Cliente
### O que o cliente vê

O cliente não interage com código ou planilhas complexas. Ele utiliza um **Dashboard Central** e recebe quatro notificações cruciais:

*   **E1 (Hora 1):** "Seu briefing está pronto" (Backlog + ROI).
*   **E2 (Hora 4):** "Build iniciado" (Escopo confirmado + Contato do operador).
*   **E3 (Hora 48):** "Seu produto está no ar" (URL + Credenciais + Repositório).
*   **E4 (Dia 3):** "Suporte ativo" (Checklist de próximos passos).

---

## 04 — Arquitetura Técnica
### Camadas do Sistema

A Incept 48 opera como um pipeline de automação:

- **Captura:** Cal.com (Agendamento) + Zoom/Meet (Gravação).
- **Processamento:** Whisper API (Transcrição) + Claude API (JSON Backlog).
- **Interface:** Next.js + Supabase (Dashboard do Cliente).
- **Execução:** Claude Code (Build autônomo).
- **Infraestrutura:** Vercel (Frontend) + Railway/Supabase (Backend).

---

## 05 — Negócio
### Por que o modelo funciona?

1.  **Margem:** O custo marginal de um build é próximo de zero. Vendemos confiança e velocidade, não horas de desenvolvimento.
2.  **Escala:** O custo de entregar o décimo MVP é idêntico ao primeiro. O gargalo é aquisição, não execução.
3.  **Padronização:** A stack é fixa (Next.js + Supabase), tornando o suporte previsível e o onboarding inexistente.

#### Planos
- **Discovery (R$ 2.400):** Reunião gravada, Backlog por IA, Score ROI e Report PDF.
- **MVP 48h (R$ 14.800):** Tudo do Discovery + Protótipo, Build Completo, Deploy e 30 dias de suporte.

---

## 06 — Próximos Passos
### Roadmap de Implementação

- [ ] Configurar Cal.com com confirmação automática.
- [ ] Validar prompt da Claude API para geração de JSON.
- [ ] Desenvolver Dashboard básico em Next.js para priorização.
- [ ] Criar template de contexto padrão para o Claude Code.
- [ ] Estruturar repositório boilerplate (Next.js + Supabase).

---
*Documento interno · Uso restrito · Incept 48*
