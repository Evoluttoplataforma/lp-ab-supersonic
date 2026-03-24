---
name: templum-landing
description: >
  Projeto de landing pages da Templum — consultoria de certificações (PBQP-H e ISO 9001).
  Duas páginas com layout idêntico, variando apenas copy, imagens e animações.
  Stack: React + CSS Modules. Dados de formulário enviados via webhook para Make (Integromat).
  Use esta skill sempre que for trabalhar no projeto Templum, implementar novas seções,
  ajustar componentes, corrigir bugs visuais, ou modificar comportamentos das landing pages.
---

# Templum Landing Pages

## Visão Geral do Projeto

A Templum é uma consultoria digital de certificações para construtoras no Brasil.
Este projeto contém **duas landing pages** com estrutura visual idêntica:

1. **PBQP-H** — Certificação para o Programa Brasileiro de Qualidade e Produtividade do Habitat
2. **ISO 9001** — Certificação de gestão de qualidade

As páginas compartilham o mesmo design system, componentes e layout.
As diferenças são apenas: textos (copy), imagens hero, e animações (motions) da seção de processo.

## Arquitetura

```
templum-landing/
├── SKILL.md                    # Esta documentação (contexto para Claude Code)
├── ARCHITECTURE.md             # Arquitetura técnica detalhada
├── HANDOFF.md                  # Especificações do design (comportamentos, animações)
├── COMPONENTS.md               # Catálogo de componentes e seus estados
├── package.json
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── ui/                 # Componentes atômicos (Badge, Button, Spinner)
    │   ├── layout/             # Layout (Navbar, Footer, Container, MobileMenu)
    │   └── sections/           # Seções da landing page (Hero, Features, FAQ, etc.)
    ├── pages/
    │   ├── PbqpH.jsx           # Página PBQP-H (monta seções com dados PBQP-H)
    │   └── Iso9001.jsx         # Página ISO 9001 (monta seções com dados ISO)
    ├── hooks/
    │   ├── useScrollDirection.js    # Detecta direção do scroll (menu show/hide)
    │   ├── useCursorFollow.js       # Badge que segue o cursor (hover em imagens)
    │   └── useWebhook.js            # Envio de dados para webhook Make
    ├── assets/
    │   ├── images/             # Imagens hero, fotos, patterns
    │   ├── motions/            # WebM e GIF das animações de processo
    │   └── icons/              # SVGs exportados do Figma
    ├── styles/
    │   ├── tokens.css          # Design tokens (cores, tipografia, espaçamentos)
    │   ├── global.css          # Reset + estilos globais
    │   └── *.module.css        # CSS Modules por componente
    ├── utils/
    │   └── smoothScroll.js     # Utilitário de scroll suave para âncoras
    ├── data/
    │   ├── pbqph.js            # Dados/copy da página PBQP-H
    │   └── iso9001.js          # Dados/copy da página ISO 9001
    └── App.jsx                 # Router principal
```

## Design System

### Tokens
Todas as variáveis de estilo estão em `src/styles/tokens.css`. Fonte do arquivo: `02-Tokens.css` do Google Drive.

### Cores Principais
- **Primary (laranja):** `--primary-500: #FF5724` (CTA, destaques, badges coloridos)
- **Support Default (escuro):** `--support-default: #200801` (textos headings)
- **Support Background:** `--support-background: #FFF9F3` (fundos quentes)
- **Neutral:** escala de cinzas de `--neutral-10: #FFF` até `--neutral-900: #212730`

### Tipografia
- Fonte: **Inter** (Google Fonts)
- Headings: `font-weight: 700-800`, sizes `32px-72px`
- Body: `font-weight: 400-500`, sizes `14px-18px`

### Ícones
- Exportados em SVG do Figma, ou usar **Material Icons** do Google

## Comportamentos Críticos

### Menu/Navbar
- Fixo no topo (`position: sticky`)
- **Scroll para baixo → menu desaparece** (translateY negativo)
- **Scroll para cima → menu reaparece** (translateY zero)
- Referência: https://formcarry.com/
- Links são **âncoras internas** para seções da página

### Menu Mobile
- Ícone hamburger abre overlay com navegação
- Fecha com: botão X, clique fora do componente
- Itens: Sobre a Certificação, Como Funciona, Benefícios, Depoimentos, FAQ
- CTA: "Fale com especialista" (botão laranja)

### Botões (hover)
- No hover, a seta se move para a frente do botão (animação de posição)

### Hero Section
- Pattern SVG no background para profundidade visual
- Spinner com animação contínua em loop
- Imagens hero compostas (fundo cinza + imagem com drop-shadow)

### Seção "Processo de Certificação" (Motions)
- Seção mais dinâmica do site
- Usa vídeos WebM (preferencial) ou GIF como fallback
- `<video autoplay loop muted playsinline>`
- 4 animações por página (PBQP-H-01 a 04, ISO-01 a 04)

### Hover em Imagens (seção Velocidade)
- Badge aparece e acompanha o cursor ao passar o mouse

## Webhook (Make/Integromat)
- Formulários enviam dados via POST para webhook do Make
- Campos esperados: nome, email, telefone, empresa (a confirmar com dados reais)

## Estrutura das Páginas

Ambas as páginas seguem esta ordem de seções:

1. **Navbar** — menu fixo com âncoras
2. **Hero** — headline + CTA + imagem + spinner + logos parceiros
3. **Stats** — números/métricas da Templum
4. **Por que escolher** — 3 cards com ícones (badge de seção)
5. **Processo** — blocos com motions/vídeos WebM
6. **Garantia** — certificação ou dobro do dinheiro de volta
7. **Velocidade** — imagem com hover badge + cards
8. **Autoridade** — +2.000 empresas certificadas
9. **3 Motivos** — cards de motivos para certificar
10. **Reconhecimento** — selo reconhecido pelo mercado + depoimento
11. **Benefícios** — benefícios de escolher a Templum
12. **Online** — consultoria 100% online
13. **7 Passos** — processo de como implementamos
14. **Validação** — +2.000 empresas validam
15. **FAQ** — perguntas frequentes (accordion)
16. **CTA Final** — seção de conversão final
17. **Footer**

## Como Contribuir

1. Leia este SKILL.md para entender o contexto
2. Consulte ARCHITECTURE.md para decisões técnicas
3. Consulte HANDOFF.md para especificações visuais
4. Consulte COMPONENTS.md para estados dos componentes
5. Use os tokens CSS definidos — nunca hardcode cores ou espaçamentos
6. Componentes reutilizáveis ficam em `src/components/ui/`
7. Dados/copy específicos de cada página ficam em `src/data/`
