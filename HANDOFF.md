# Handoff de Design — Templum Landing Pages

## Fontes do Design
- **Figma (Dev Mode):** https://www.figma.com/design/tqlFsplvJIdJ8LeZiStQ2y/-Templum--UI-Design-Hipótese?node-id=3-19&m=dev
- **Protótipo Navegável:** https://www.figma.com/proto/tqlFsplvJIdJ8LeZiStQ2y/
- **Senha Figma:** Supersonic2026
- **Google Drive (assets):** https://drive.google.com/drive/folders/1AQS1pPmfl1NXsqcqlptYDx_7v09JHyuT
- **Vídeo Handoff (Loom):** https://www.loom.com/share/4a38f79462ff4c1ebc741aa40c9a9fdf

## Anotações no Figma
Para visualizar anotações nas telas do Figma: **Shift + Y**

## Tipografia
- **Fonte:** Inter (Google Fonts)
- **Link:** https://fonts.google.com/specimen/Inter
- Tokens de tipografia definidos em `tokens.css`

## Ícones
- Exportar em SVG do Figma para manter qualidade
- Alternativa: Material Icons do Google (https://fonts.google.com/icons)

## Comportamentos Detalhados

### 1. Navbar (Menu de Navegação)
**Objetivo:** Facilitar navegação interna via âncoras.

**Desktop:**
- Posição fixa no topo
- Links: Sobre a Certificação, Como Funciona, Benefícios, Depoimentos, FAQ
- CTA: "Fale com especialista" (botão laranja com seta)
- Scroll down → menu desaparece (slide up)
- Scroll up → menu reaparece (slide down)
- Transição suave (~300ms)
- Referência de comportamento: https://formcarry.com/

**Mobile:**
- Ícone hamburger (3 linhas)
- Ao clicar: abre overlay com menu
- Overlay: fundo escuro semi-transparente
- Menu: card branco com itens de navegação
- Fecha com: ícone X ou clique fora do componente

### 2. Botões
**Estado default:**
- Texto + seta à direita
- Background: `--primary-500` (#FF5724)
- Texto: branco
- Border-radius: `--radius-full` (999px)

**Estado hover:**
- Seta se move para a frente (esquerda) do texto
- Transição suave da posição

### 3. Badge de Seção
- Componente reutilizável presente em todas as seções
- Estrutura: ícone + texto em uppercase
- Variação: cor do badge muda por seção
- Background leve, texto escuro, border-radius arredondado
- Tipografia: uppercase, font-size pequeno, font-weight medium/semibold

### 4. Hero Section
**Background:**
- Pattern SVG aplicado como imagem de fundo
- Cria profundidade visual

**Spinner:**
- Animação contínua em loop (rotação)
- Visível no protótipo navegável

**Imagem Hero:**
- Composição em duas partes:
  - Parte externa: fundo cinza claro (#F6F7F9)
  - Parte interna: imagem com drop-shadow

**Logos de parceiros:**
- Abaixo da hero, em linha horizontal

### 5. Seção "Processo de Certificação" (Motions)
**A seção mais dinâmica do site.**

- Animações exportadas em WebM (recomendado) e GIF (alternativa)
- Arquivos disponíveis em `Motions/WEBM/` e `Motions/GIF/`

**PBQP-H:** PBQP-H-01.webm, PBQP-H-02.webm, PBQP-H-03.webm, PBQP-H-04.webm
**ISO 9001:** ISO-01.webm, ISO-02.webm, ISO-03.webm, ISO-04.webm

**Implementação:**
```html
<video autoplay loop muted playsinline>
  <source src="animacao.webm" type="video/webm">
</video>
```

**Mobile:** Reduzir dimensões do vídeo se a seção ficar muito grande.
O motion é um vídeo em loop, ajuste de tamanho não compromete funcionamento.

### 6. Seção "Velocidade na Certificação"
**Hover interativo:**
- Ao passar o mouse sobre a imagem, aparece uma badge
- A badge acompanha o movimento do cursor
- Efeito interativo de hover (cursor follow)

**Elemento de imagem:**
- Parte externa: fundo cinza claro
- Parte interna: imagem com drop-shadow

### 7. Backgrounds com Pattern
Algumas seções coloridas usam patterns no fundo:
- Hero section: pattern de profundidade
- Seções com fundo colorido: pattern sutil
- Card "Por que escolher": pattern no background do card

Exportar patterns separadamente como SVG/PNG e aplicar como background-image.

### 8. FAQ (Accordion)
- Seção de perguntas frequentes
- Comportamento accordion: clique expande/colapsa resposta
- Apenas uma resposta aberta por vez (ou independente — validar no protótipo)

### 9. Seções com Estrutura Repetida
Várias seções seguem o mesmo padrão de layout.
A estrutura visual se repete, alterando apenas as copys para PBQP-H ou ISO 9001.

## Breakpoints
- **Desktop:** >= 768px (layout em grid/flex horizontal)
- **Mobile:** < 768px (layout em stack vertical)

## Assets Disponíveis
- `02-Tokens.css` — variáveis CSS completas
- `Motions/WEBM/` — 8 vídeos WebM (4 PBQP-H + 4 ISO)
- `Motions/GIF/` — 8 GIFs como fallback
- `img-hero.png`, `img-hero-1.png`, `img-hero-2.png`, `img-hero-3.png` — imagens hero
- `Container.pdf`, `Container-1.pdf` — detalhes de seções
- `LP 01 - PBQP-H - Desktop.pdf` — página PBQP-H completa
- `LP 02 - ISO 9001.pdf` — página ISO 9001 completa
