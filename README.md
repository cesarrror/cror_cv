# César Ortiz — Portfolio Setup

## Stack
- **Next.js 15** (App Router)
- **HeroUI v3** + **Tailwind CSS v4**
- **next-themes** (dark/light toggle)
- **Motion** (animaciones — siguiente paso)
- **Lenis** (smooth scroll — siguiente paso)

---

## Instalación

### 1. Instalar dependencias base

```bash
npm install
```

### 2. Instalar HeroUI v3

```bash
npm i @heroui/styles @heroui/react
```

### 3. Instalar next-themes (para el toggle dark/light)

```bash
npm i next-themes
```

### 4. Instalar styled-jsx (para los estilos scoped del Navbar)

> Next.js ya incluye styled-jsx, no requiere instalación extra.

### 5. Instalar librerías de animación (cuando llegues a las secciones)

```bash
npm i motion lenis
```

---

## Archivos generados

```
src/
├── app/
│   ├── globals.css          ← Tokens de diseño + Tailwind + HeroUI
│   ├── layout.tsx           ← Root layout con ThemeProvider
│   └── page.tsx             ← Página principal (placeholder)
│
├── components/
│   ├── layout/
│   │   └── Navbar.tsx       ← Navbar completo con scroll spy
│   ├── providers/
│   │   └── ThemeProvider.tsx ← Wrapper de next-themes
│   └── ui/
│       └── ThemeToggle.tsx  ← Toggle dark/light animado
│
next.config.ts
tsconfig.json
```

---

## Tokens de diseño (globals.css)

| Variable | Light | Dark |
|---|---|---|
| `--bg-primary` | `#ffffff` | `#111111` |
| `--bg-card` | `#f5f5f7` | `#2c2c2e` |
| `--text-primary` | `#1c1c1e` | `#f5f5f7` |
| `--text-secondary` | `#6e6e73` | `#8e8e93` |
| `--accent` | `#2563eb` | `#3b82f6` |

---

## Fuentes

- **Syne** — display/títulos (logo, headings)
- **DM Sans** — cuerpo (texto, links, labels)

Se cargan via Google Fonts en `globals.css`.
