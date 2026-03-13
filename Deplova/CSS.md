# CSS — Documentação de CSS (Deplova)

## 1) Visão geral

| Item | Descrição |
| --- | --- |
| Escopo | Arquitetura de estilos do front-end (tokens, primitivas, componentes, seções, responsivo e animações) |
| Objetivo 1 | CSS previsível e escalável |
| Objetivo 2 | Layout centralizado em primitivas reutilizáveis |
| Objetivo 3 | Baixo acoplamento entre seção e estrutura |
| Objetivo 4 | Consistência visual orientada por tokens |

| Pasta/Arquivo | Papel |
| --- | --- |
| `css/tokens.css` | Fonte de verdade de variáveis de design |
| `css/base.css` | Reset e tipografia global |
| `css/primitives/` | Primitivas estruturais e composicionais |
| `css/components/` | Componentes de interface reutilizáveis |
| `css/sections/` | Deltas visuais por seção |
| `css/animations.css` | Motion utilitário global |
| `css/responsive.css` | Ajustes complementares por breakpoint |
| `css/style.css` | Composição final via `@import` |

---

## 2) Ordem de carregamento (`css/style.css`)

| Ordem | Import | Função na cascata |
| --- | --- | --- |
| 1 | `tokens.css` | Inicializa variáveis do sistema |
| 2 | `base.css` | Aplica reset e base tipográfica |
| 3 | `primitives/grid.css` | Ativa sistema de grid reutilizável |
| 4 | `primitives/section-shell.css` | Estrutura compartilhada de seções visuais |
| 5 | `primitives/type-scale.css` | Tipografia contextual compartilhada |
| 6 | `components/layout.css` | Container e espaçamentos de seção |
| 7 | `components/section-header.css` | Cabeçalhos de seção |
| 8 | `components/badges.css` | Badges |
| 9 | `components/buttons.css` | Botões |
| 10 | `components/nav.css` | Navegação |
| 11 | `components/timeline.css` | Timeline |
| 12 | `components/card.css` | Cards |
| 13 | `components/demo-window.css` | Janela de priorização |
| 14 | `components/plans.css` | Cards de plano |
| 15 | `sections/hero.css` | Regras locais do hero |
| 16 | `sections/how.css` | Regras locais de “Como funciona” |
| 17 | `sections/objective.css` | Regras locais de objective |
| 18 | `sections/controle.css` | Regras locais de controle/priorização |
| 19 | `components/cta.css` | Regras de CTA |
| 20 | `components/icons.css` | Motion SVG por ícone |
| 21 | `animations.css` | Animações utilitárias |
| 22 | `responsive.css` | Overrides finais responsivos |

---

## 3) Tokens de design (`css/tokens.css`)

| Grupo | Prefixo/Token | Finalidade |
| --- | --- | --- |
| Cores base | `--ink-*` | Base escura e níveis de contraste |
| Cores acento | `--cyan-*` | Destaque visual e ações secundárias |
| Cores primárias | `--rose-*` | Ênfase complementar e gradientes |
| Semânticos de fundo | `--bg-base`, `--bg-surface`, `--bg-raised`, `--bg-hover` | Superfícies e hierarquia de camadas |
| Semânticos de texto | `--text-primary`, `--text-secondary`, `--text-muted` | Hierarquia textual |
| Semânticos de ação | `--accent`, `--accent-bright`, `--accent-dim`, `--primary`, `--primary-bright`, `--confirm`, `--confirm-bright` | Estados e realce |
| Semânticos de borda | `--border-subtle`, `--border-mid` | Delimitação de blocos |
| Tipografia | `--font-display`, `--font-mono`, `--font-body` | Famílias de fonte do sistema (`--font-display`: EB Garamond) |
| Escala de texto | `--text-xs` ... `--text-7xl` | Tamanhos padronizados |
| Escala de espaço | `--space-1` ... `--space-32` | Ritmo e espaçamento |
| Layout global | `--container-max` | Largura máxima de conteúdo |
| Raios | `--radius-sm`, `--radius-md`, `--radius-lg` | Arredondamento |
| Motion | `--ease-*`, `--duration-*` | Curvas e tempos de transição |

---

## 4) Base global (`css/base.css`)

### 4.1 Reset e defaults

| Seletor | Categoria | Efeito principal |
| --- | --- | --- |
| `*` | Reset | Remove margem e padding padrão |
| `*::before` | Reset | Herda normalização de box model |
| `*::after` | Reset | Herda normalização de box model |
| `html` | Documento | Ativa rolagem suave e base de fonte |
| `body` | Documento | Define fundo, cor, fonte, peso e antialiasing |
| `img` | Mídia | Renderiza como bloco e respeita limite de largura |
| `svg` | Mídia | Renderiza como bloco e respeita limite de largura |
| `a` | Link | Herda cor e remove decoração padrão |
| `ul` | Lista | Remove bullets nativos |
| `ol` | Lista | Remove numeração nativa |

### 4.2 Tipografia utilitária global

| Seletor | Papel | Observação |
| --- | --- | --- |
| `.label` | Token de rótulo em caixa alta | Usa `font-mono`, tracking alto e cor de acento |
| `.label--muted` | Variação de label | Reduz contraste para contexto secundário |
| `.headline` | Base de títulos display | Controla line-height e letter-spacing |
| `.headline--xl` | Escala extra grande | `clamp()` responsivo para hero |
| `.headline--lg` | Escala grande | `clamp()` para títulos de seção |
| `.headline--md` | Escala média | `clamp()` para subtítulos |
| `.text-accent` | Ênfase simples | Itálico com cor de acento |
| `.text-accent-gradient` | Ênfase com gradiente | Itálico com recorte de gradiente no texto |
| `.divider` | Divisor horizontal | Borda superior sutil entre blocos |

---

## 5) Primitivas

### 5.1 Grid (`css/primitives/grid.css`)

| Primitiva | Função | Customização |
| --- | --- | --- |
| `.grid` | Ativa grid + gap padrão | `--grid-gap` |
| `.grid-2` | Estrutura 2 colunas | `--grid-2-cols`, `--grid-2-md-cols` |
| `.grid-3` | Estrutura 3 colunas | `--grid-3-cols`, `--grid-3-md-cols` |

| Breakpoint | Regra |
| --- | --- |
| `max-width: 1024px` | `.grid-2` usa `--grid-2-md-cols` (fallback 1) e `.grid-3` usa `--grid-3-md-cols` (fallback 2) |
| `max-width: 640px` | `.grid-2` e `.grid-3` viram 1 coluna |

### 5.2 Section shell (`css/primitives/section-shell.css`)

| Bloco | Seletores | Papel |
| --- | --- | --- |
| Shell visual | `.objective-section`, `.cta-section` | Padding, centralização e contenção |
| Pseudo central | `.objective-section::before`, `.cta-section::before` | Base de glow/efeito radial |
| Conteúdo interno | `.objective__inner`, `.cta-section__inner` | Stack vertical centralizado com z-index |

### 5.3 Type scale contextual (`css/primitives/type-scale.css`)

| Grupo | Seletores | Papel |
| --- | --- | --- |
| Descrição longa | `.hero__sub`, `.controle__desc`, `.cta-section__desc` | Tamanho, cor e ritmo de leitura |
| Headline primária | `.how-intro__headline`, `.controle__headline` | Cor principal de título |

---

## 6) Componentes

### 6.1 Layout (`css/components/layout.css`)

| Seletor | Papel |
| --- | --- |
| `.container` | Centraliza conteúdo e aplica gutters laterais |
| `.section` | Bloco vertical padrão |
| `.section--tight` | Bloco vertical compacto |

### 6.2 Section Header (`css/components/section-header.css`)

| Seletor | Papel |
| --- | --- |
| `.section-header` | Stack de cabeçalho de seção |
| `.section-header--center` | Alinhamento central |
| `.section-header__desc` | Texto descritivo padrão de seção |

### 6.3 Badge (`css/components/badges.css`)

| Seletor | Papel |
| --- | --- |
| `.badge` | Componente de badge com chip e tipografia mono |
| `.badge::before` | Dot de status animado |
| `.badge--no-dot::before` | Variante sem dot |

### 6.4 Buttons (`css/components/buttons.css`)

| Grupo | Seletor | Papel |
| --- | --- | --- |
| Base | `.btn` | Estrutura, tipografia e transição |
| Base | `.btn--sm` | Tamanho compacto |
| Variante | `.btn--primary` | Botão principal com gradiente |
| Variante | `.btn--outline` | Botão de contorno |
| Estrutura interna | `.btn__inner` | Área interna do botão primário |
| Interação | `.btn__arrow`, `.btn:hover .btn__arrow` | Microanimação da seta |
| Hero CTA | `.btn__inner--hero`, `.btn__text`, `.btn__title`, `.btn__subtitle` | Composição textual em duas linhas |

### 6.5 Nav (`css/components/nav.css`)

| Seletor | Papel |
| --- | --- |
| `.nav` | Barra fixa com blur e borda |
| `.nav__inner` | Distribuição horizontal do conteúdo |
| `.nav__right` | Agrupamento links + CTA |
| `.nav__logo` | Bloco de marca |
| `.nav__links` | Lista de links |
| `.nav__link` | Estilo/interação de cada link |

### 6.6 Timeline (`css/components/timeline.css`)

| Grupo | Seletor | Papel |
| --- | --- | --- |
| Estrutura | `.timeline`, `.timeline::before` | Eixo vertical da timeline |
| Item | `.timeline-step` | Linha da etapa em grid interno |
| Marcador | `.timeline-step__marker`, `.timeline-step__dot` | Dot e estado hover |
| Conteúdo | `.timeline-step__time`, `__title`, `__desc` | Metadados e descrição da etapa |

### 6.7 Card (`css/components/card.css`)

| Seletor | Papel | Observação |
| --- | --- | --- |
| `.cards-grid` | Ajusta gap do grid primitivo | Layout estrutural vem de `.grid .grid-3` no HTML |
| `.content-card` | Card base | Hover com leve elevação |
| `.content-card__title` | Título do card | Variante `--persona` usa fonte display |
| `.content-card__desc` | Descrição do card | Variante `--persona` muda contraste |

### 6.8 Demo Window (`css/components/demo-window.css`)

| Grupo | Seletor | Papel no componente | Observações |
| --- | --- | --- | --- |
| Estrutura | `.demo-window` | Casca principal da vitrine | Define largura, fundo, borda, raio e sombra |
| Estrutura | `.demo-window__bar` | Barra superior da janela | Container dos dots e URL simulada |
| Estrutura | `.demo-window__body` | Corpo do conteúdo | Empilha lista de features com spacing vertical |
| Estrutura | `.demo-window__footer` | Rodapé de resumo | Exibe contagem selecionada e total de pontos |

| Grupo | Seletor | Papel no componente | Estado/variação |
| --- | --- | --- | --- |
| Item de feature | `.demo-feature` | Card base de cada funcionalidade | Estado padrão não selecionado |
| Item de feature | `.demo-feature--selected` | Destaca item selecionado | Borda e fundo com acento |
| Item de feature | `.demo-feature__sel` | Caixa de seleção visual | Exibe check e estilo ativo |
| Item de feature | `.demo-feature__sel--empty` | Caixa desmarcada | Variante vazia da seleção |
| Item de feature | `.demo-feature__content` | Wrapper textual do item | Garante expansão e corte corretos |
| Item de feature | `.demo-feature__header` | Linha de título + tags | Distribui nome e chips com wrap |
| Item de feature | `.demo-feature__name` | Nome da funcionalidade | Cor muda conforme seleção |
| Item de feature | `.demo-feature__tags` | Grupo de tags | Organiza chips de prioridade/ROI |
| Item de feature | `.demo-feature__tag` | Chip base de metadado | Tipografia mono e fundo discreto |
| Item de feature | `.demo-feature__tag--high` | Chip de destaque | Variante de alta prioridade |
| Item de feature | `.demo-feature__story` | Descrição resumida da história | Texto secundário com line-height menor |

| Grupo | Seletor | Papel no componente | Observações |
| --- | --- | --- | --- |
| Auxiliar | `.terminal-dot--r` | Dot vermelho da barra | Simula UI de janela |
| Auxiliar | `.terminal-dot--y` | Dot amarelo da barra | Simula UI de janela |
| Auxiliar | `.terminal-dot--g` | Dot verde da barra | Usa token de confirmação |
| Auxiliar | `.demo-window__url` | URL textual da interface | Trecho `<em>` realça o contexto |
| Auxiliar | `.demo-window__count` | Contador de seleção | Texto de estado do rodapé |
| Auxiliar | `.demo-window__pts` | Total de pontos do sprint | Métrica destacada com cor de acento |

### 6.9 Plans (`css/components/plans.css`)

| Grupo | Seletor | Papel |
| --- | --- | --- |
| Grid | `.plans-grid` | Ajuste de gap + largura máxima + tuning de colunas no md |
| Card | `.plan-card`, `.plan-card--featured`, `.plan-card__tag` | Estrutura e destaque do plano recomendado |
| Preço | `.plan-card__price`, `__currency`, `__currency--featured`, `__amount` | Bloco visual de preço |
| Features | `.plan-card__features`, `__feature`, `__check` | Lista de benefícios |

### 6.10 CTA (`css/components/cta.css`)

| Seletor | Papel |
| --- | --- |
| `.cta-section::before` | Glow radial da seção |
| `.cta-section__desc` | Largura máxima da descrição |
| `.cta-section__punchline` | Texto de ênfase final |

### 6.11 Icons (`css/components/icons.css`)

| Item | Descrição |
| --- | --- |
| Escopo | Animações SVG para Entregáveis e Para quem |
| Conteúdo | Tokens locais, muitos `@keyframes`, classes de estado e loop |
| Característica | Arquivo intencionalmente denso por ser camada de motion gráfico |

---

## 7) Seções (`css/sections/*`)

| Seção | Seletores principais | Papel |
| --- | --- | --- |
| Hero | `.hero`, `#bg-canvas`, `.hero__content`, `.hero__headline`, `.hero__sub` | Estrutura visual de abertura, glow e espaçamentos locais |
| Como funciona | `.how-grid`, `.how-intro`, `.how-intro__desc` | Composição com grid primitivo + intro sticky |
| Objective | `.objective-section::before`, `.objective__inner`, `.objective__list`, `.objective__item` | Hero-like section de validação com chips |
| Controle/Priorização | `.section-controle`, `.controle-grid`, `.controle__text`, `.controle__desc`, `.controle__visual` | Seção de texto + demo window com tuning local |

| Seção | Tuning de grid por variável |
| --- | --- |
| `.how-grid` | `--grid-gap`, `--grid-2-md-cols`, `align-items: start` |
| `.controle-grid` | `--grid-gap`, `--grid-2-md-cols`, `align-items: center` |

---

## 8) Responsivo (`css/responsive.css`)

| Breakpoint | Regra | Efeito |
| --- | --- | --- |
| `max-width: 1024px` | `.hero__bg-num { display: none; }` | Remove elemento decorativo do hero |
| `max-width: 1024px` | `.how-intro { position: static; }` | Desativa sticky em telas menores |
| `max-width: 640px` | `.container { padding-inline: var(--space-5); }` | Reduz gutter lateral |
| `max-width: 640px` | `.nav__links { display: none; }` | Simplifica navegação no mobile |

| Observação | Valor |
| --- | --- |
| Colunas responsivas de grid | Centralizadas em `css/primitives/grid.css` |

---

## 9) Animações globais (`css/animations.css`)

| Item | Descrição |
| --- | --- |
| Escopo | Classes utilitárias de entrada/transição (ex.: `animate-*`, delays) |
| Papel | Controlar motion global de UI fora dos SVGs especializados |

---

## 10) Mapeamento de grids no HTML

| Contexto | Classe no HTML | Primitiva aplicada |
| --- | --- | --- |
| Como funciona | `how-grid grid grid-2` | `grid` + `grid-2` |
| Priorização | `controle-grid grid grid-2` | `grid` + `grid-2` |
| Entregáveis/Para quem | `cards-grid grid grid-3` | `grid` + `grid-3` |
| Planos | `plans-grid grid grid-2` | `grid` + `grid-2` |

| Princípio | Descrição |
| --- | --- |
| Semântica local | Classe de domínio mantém contexto (`how-grid`, `plans-grid` etc.) |
| Estrutura global | Primitivas (`.grid`, `.grid-2`, `.grid-3`) controlam layout |
| Ajuste fino | Variáveis locais evitam duplicar regras estruturais |

---

## 11) Convenções de evolução

| Regra | Diretriz |
| --- | --- |
| Colunas novas | Usar sempre `.grid` + `.grid-2` ou `.grid-3` |
| Grid em seção | Evitar `display:grid` local quando houver primitiva |
| Tokens | Usar tokens para cor, spacing, tipografia e motion |
| Escopo de seção | Usar classes de seção apenas para deltas visuais/contextuais |
| Ordem de import | Preservar sequência de `style.css` para estabilidade de cascata |

---

## 12) Checklist de manutenção

| Mudança desejada | Onde revisar primeiro |
| --- | --- |
| Ajuste global de espaçamento | `css/tokens.css` |
| Alterar comportamento de colunas | `css/primitives/grid.css` |
| Ajustar cabeçalho de seção | `css/components/section-header.css` |
| Ajustar hero/controle/objective | `css/sections/*` correspondente |
| Ajuste de breakpoint | `grid.css` (estrutura) ou `responsive.css` (complemento) |
