# Catálogo de Componentes — Templum Landing Pages

## Componentes UI (Atômicos)

### Badge
**Arquivo:** `src/components/ui/Badge/Badge.jsx`
**Uso:** Identificador visual de cada seção da landing page.

| Prop      | Tipo   | Descrição                          |
|-----------|--------|------------------------------------|
| icon      | node   | Ícone à esquerda (SVG/Material)    |
| label     | string | Texto do badge (uppercase)         |
| variant   | string | Cor do badge (default, primary, dark) |

**Estados:**
- Default: fundo claro `--support-badge`, texto escuro
- Primary: fundo `--primary-50`, texto `--primary-600`
- Dark: fundo escuro, texto claro

---

### Button
**Arquivo:** `src/components/ui/Button/Button.jsx`

| Prop      | Tipo     | Descrição                          |
|-----------|----------|------------------------------------|
| children  | node     | Texto do botão                     |
| onClick   | function | Handler de clique                  |
| href      | string   | Se for link (renderiza <a>)        |
| variant   | string   | primary, outline, ghost            |
| size      | string   | sm, md, lg                         |
| fullWidth | boolean  | Ocupa largura total                |

**Estados:**
- **Default:** bg `--primary-500`, texto branco, seta à direita
- **Hover:** seta se move para a esquerda (frente) do texto, transição 300ms
- **Focus:** outline de acessibilidade
- **Disabled:** opacidade reduzida

---

### Spinner
**Arquivo:** `src/components/ui/Spinner/Spinner.jsx`

| Prop | Tipo   | Descrição                 |
|------|--------|---------------------------|
| size | number | Tamanho em px (default 48)|

**Comportamento:** Rotação contínua em loop (CSS animation infinite)

---

### Card
**Arquivo:** `src/components/ui/Card/Card.jsx`

| Prop     | Tipo   | Descrição                          |
|----------|--------|------------------------------------|
| icon     | node   | Ícone no topo do card              |
| children | node   | Conteúdo do card                   |
| variant  | string | default, pattern (com bg pattern)  |

---

### Accordion
**Arquivo:** `src/components/ui/Accordion/Accordion.jsx`

| Prop  | Tipo  | Descrição                              |
|-------|-------|----------------------------------------|
| items | array | Array de { question, answer }          |

**Comportamento:**
- Clique expande/colapsa item
- Ícone de seta/chevron rotaciona
- Transição suave de altura

---

## Componentes de Layout

### Navbar
**Arquivo:** `src/components/layout/Navbar/Navbar.jsx`

| Prop  | Tipo  | Descrição                    |
|-------|-------|------------------------------|
| links | array | Array de { label, href }     |

**Comportamento:**
- `position: sticky; top: 0`
- Hook `useScrollDirection` controla visibilidade
- `transform: translateY(-100%)` quando scroll down
- `transform: translateY(0)` quando scroll up
- `transition: transform 300ms ease`

---

### MobileMenu
**Arquivo:** `src/components/layout/MobileMenu/MobileMenu.jsx`

| Prop    | Tipo     | Descrição              |
|---------|----------|------------------------|
| isOpen  | boolean  | Controla visibilidade  |
| onClose | function | Callback para fechar   |
| links   | array    | Itens de navegação     |

**Comportamento:**
- Overlay escuro (`rgba(0,0,0,0.5)`)
- Card branco desliza da direita (ou aparece)
- Fecha: botão X ou clique no overlay
- Itens separados por linhas pontilhadas
- CTA "Fale com especialista" no final

---

### Container
**Arquivo:** `src/components/layout/Container/Container.jsx`

| Prop     | Tipo   | Descrição                    |
|----------|--------|------------------------------|
| children | node   | Conteúdo                     |
| size     | string | sm (720px), md (1024px), lg (1200px) |

---

### Footer
**Arquivo:** `src/components/layout/Footer/Footer.jsx`

Seção final com CTA de conversão + informações da empresa.

---

## Componentes de Seção

Cada seção é um componente que recebe dados via props (vindo de `src/data/`).

| Seção               | Arquivo                | Props principais          |
|---------------------|------------------------|---------------------------|
| HeroSection         | sections/Hero.jsx      | headline, cta, image, partners |
| StatsSection        | sections/Stats.jsx     | items (array de stats)    |
| WhyChooseSection    | sections/WhyChoose.jsx | badge, title, cards       |
| ProcessSection      | sections/Process.jsx   | items (com motions)       |
| GuaranteeSection    | sections/Guarantee.jsx | title, description        |
| SpeedSection        | sections/Speed.jsx     | image, badge, cards       |
| AuthoritySection    | sections/Authority.jsx | stats, description        |
| ReasonsSection      | sections/Reasons.jsx   | cards                     |
| RecognitionSection  | sections/Recognition.jsx | testimonial, seal        |
| BenefitsSection     | sections/Benefits.jsx  | items                     |
| OnlineSection       | sections/Online.jsx    | description, stats        |
| StepsSection        | sections/Steps.jsx     | steps (array de 7 passos) |
| ValidationSection   | sections/Validation.jsx | stats, cta               |
| FaqSection          | sections/Faq.jsx       | items (accordion)         |
| CtaFinalSection     | sections/CtaFinal.jsx  | headline, cta             |
