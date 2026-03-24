# Arquitetura Técnica — Templum Landing Pages

## Stack Tecnológico

| Camada       | Tecnologia             | Motivo                                      |
|-------------|------------------------|---------------------------------------------|
| Framework   | React 18               | Componentização, reatividade, ecossistema   |
| Estilização | CSS Modules + tokens   | Escopo local, sem conflitos, design tokens  |
| Roteamento  | React Router DOM v6    | Duas páginas (PBQP-H e ISO 9001)           |
| Build       | Vite                   | Build rápido, HMR, otimização de assets     |
| Fontes      | Google Fonts (Inter)   | Fonte do projeto definida pelo design       |
| Ícones      | SVG inline / Material  | Flexibilidade + performance                 |
| Animações   | CSS + WebM videos      | Motions exportados do Figma                 |
| Formulários | Fetch API → Webhook    | POST direto para Make (Integromat)          |

## Decisões Arquiteturais

### 1. Duas Páginas, Mesmos Componentes
As páginas PBQP-H e ISO 9001 compartilham 100% dos componentes.
A diferença está nos **dados** passados como props:
- `src/data/pbqph.js` — textos, imagens e motions para PBQP-H
- `src/data/iso9001.js` — textos, imagens e motions para ISO 9001

Cada página (`PbqpH.jsx`, `Iso9001.jsx`) importa os dados e monta as seções.

### 2. CSS Modules + Design Tokens
- `tokens.css` é importado no `global.css` e disponível globalmente via variáveis CSS
- Cada componente tem seu `.module.css` com escopo local
- Responsividade via media queries dentro dos modules
- Breakpoints: `768px` (mobile → desktop)

### 3. Padrão de Componentes
```
ComponentName/
├── ComponentName.jsx       # Lógica e markup
├── ComponentName.module.css # Estilos com escopo
└── index.js                # Re-export
```

### 4. Hooks Customizados

#### `useScrollDirection`
- Retorna `'up'` ou `'down'`
- Usado pelo Navbar para show/hide
- Threshold configurável para evitar jitter

#### `useCursorFollow`
- Retorna posição `{ x, y }` relativa ao elemento
- Ativado/desativado via `isActive`
- Usado na seção de Velocidade para badge que segue o cursor

#### `useWebhook`
- Recebe URL do webhook Make
- Retorna `{ submit, loading, error, success }`
- Validação básica dos campos antes do envio

### 5. Assets e Motions
- Imagens hero: PNG exportadas do Figma
- Patterns de background: SVG exportados
- Motions: WebM (principal) com fallback GIF
- Organização: `assets/motions/pbqph/` e `assets/motions/iso/`

### 6. Performance
- WebM preferencial sobre GIF (melhor compressão)
- Lazy loading em imagens abaixo do fold
- Fonts: `display=swap` para evitar FOIT
- Vídeos: `autoplay loop muted playsinline` (sem download extra)

## Estrutura de Dados (exemplo)

```javascript
// src/data/pbqph.js
export const pbqphData = {
  meta: {
    title: "Certificação PBQP-H | Templum",
    description: "..."
  },
  hero: {
    badge: "PBQP-H",
    headline: "Certifique sua construtora no PBQP-H e receba 200% do valor investido de volta.",
    cta: "Fale com especialista",
    image: "/assets/images/img-hero.png",
    partners: [...],
  },
  stats: [...],
  whyChoose: {
    badge: "POR QUE ESCOLHER A TEMPLUM",
    title: "A consultoria completa para obter a certificação PBQP-H da sua empresa em até 40 dias.",
    cards: [...]
  },
  process: {
    motions: [
      { src: "/assets/motions/pbqph/PBQP-H-01.webm", fallback: "...gif" },
      // ...
    ]
  },
  // ... demais seções
}
```

## Variáveis de Ambiente
```
VITE_WEBHOOK_URL_PBQPH=https://hook.us1.make.com/...
VITE_WEBHOOK_URL_ISO=https://hook.us1.make.com/...
```

## Deploy
A definir. Projeto preparado para deploy em qualquer plataforma estática (Vercel, Netlify, etc.)
por ser um SPA React sem backend.
