# Portfólio — Wesley

Portfólio pessoal one-page construído com Next.js 16 (App Router + Turbopack), React 19 e Tailwind CSS 4. Site estático, multilíngue e sem dependências de runtime além do próprio Next.

## Idiomas

O site é trilíngue, com inglês como padrão:

| Idioma | URL |
| --- | --- |
| 🇺🇸 Inglês (padrão) | `/` |
| 🇧🇷 Português | `/pt-BR` |
| 🇪🇸 Espanhol | `/es` |

- `/en` redireciona para `/` (URL canônica sem prefixo).
- Idiomas não suportados (ex.: `/fr`) retornam 404.
- O roteamento de idioma é feito pelo `proxy.ts` na raiz (o sucessor do `middleware.ts` no Next 16): URLs sem prefixo recebem rewrite interno para o conteúdo EN.
- Cada idioma tem `<html lang>`, `<title>`, description e `hreflang` próprios, e as três versões são pré-renderizadas no build (`generateStaticParams`).

## Estrutura

```
app/
├── [lang]/
│   ├── layout.tsx          # root layout (fontes, metadata por idioma)
│   ├── page.tsx            # home — carrega o dicionário e monta as seções
│   ├── dictionaries.ts     # carregamento dos dicionários (server-only)
│   ├── dictionary.ts       # tipos compartilhados dos dicionários
│   └── dictionaries/
│       ├── en.json         # todo o conteúdo em inglês
│       ├── pt-BR.json      # português
│       └── es.json         # espanhol
├── components/             # Header, Hero, Marquee, Projects, About, Contact, Footer…
└── globals.css             # estilos globais (tema escuro, gradiente, animações)
proxy.ts                    # roteamento de idioma (rewrite/redirect)
```

Todo o texto visível vem dos dicionários JSON — os componentes recebem a fatia relevante via props. Para alterar conteúdo, edite os três arquivos em `app/[lang]/dictionaries/`.

## Rodando localmente

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:3000
```

```bash
npm run build     # build de produção
npm start         # serve o build
npm run lint      # eslint
```

## Stack

- **Framework:** Next.js 16 (App Router, Server Components, Turbopack)
- **UI:** React 19, Tailwind CSS 4, CSS custom em `globals.css`
- **Fontes:** Space Grotesk e Inter via `next/font`
- **i18n:** dicionários JSON + rotas `[lang]` + proxy, sem biblioteca externa
