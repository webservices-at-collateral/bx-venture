# Bx Venture Capital v3 — Landing Page

Projeto Next.js (App Router) + Tailwind CSS com a hero section "Bx Venture Capital" v3
(layout alinhado à esquerda, com foto de prédio em recorte de seta à direita),
implementada a partir do Figma (node 74:106).

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Deploy na Vercel

### Opção 1 — Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Opção 2 — Painel da Vercel
1. Suba esta pasta para um repositório no GitHub.
2. Acesse https://vercel.com/new
3. Selecione o repositório.
4. Framework Preset: **Next.js** (detectado automaticamente).
5. Clique em **Deploy**.

## Estrutura

```
app/
  layout.js                    # fonte Produkt local via next/font
  page.js                      # renderiza a hero section
  globals.css                  # Tailwind base
components/
  BxVentureCapitalHeroV3.jsx   # a section em si (lockup SVG + parágrafo)
public/
  fonts/produkt-regular.woff2
  images/hero-venture.png     # foto do prédio (recorte em seta, fundo transparente)
```
