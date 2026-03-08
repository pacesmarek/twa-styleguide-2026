# TWA Styleguide 2026

Sdílený design system pro projekty TWA. Obsahuje design tokeny, CSS komponenty a živou showcase stránku.

> **Aktivní repo:** [twa-styleguide-source-2026](https://github.com/pacesmarek/twa-styleguide-source-2026)

---

## 1) Dockerizace (Node/npm + Astro v kontejneru)

Předpoklad: nainstalovaný Docker Desktop.

```bash
# 1. Naklonuj repo
git clone https://github.com/pacesmarek/twa-styleguide-source-2026.git
cd twa-styleguide-source-2026

# 2. Spusť dev kontejner (Node + Astro, live reload)
docker compose up styleguide-dev
```

Co se stane:
- Docker stáhne `node:20-alpine`
- Uvnitř kontejneru spustí `npm ci && npm run dev --host`
- Lokální soubory jsou mountnuté → změny se projeví okamžitě

Vstup do kontejneru (pro ruční npm příkazy):
```bash
docker compose exec styleguide-dev sh
```

> **WSL2:** Použij IP místo localhost, např. `http://192.168.155.2:4322/twa-styleguide-source-2026/`

---

## 2) Lokální vývoj s hot reload (bez Dockeru)

Předpoklad: Node.js 18+ nainstalovaný lokálně.

```bash
# 1. Naklonuj repo
git clone https://github.com/pacesmarek/twa-styleguide-source-2026.git
cd twa-styleguide-source-2026

# 2. Nainstaluj závislosti
npm install

# 3. Spusť dev server s hot reload
npm run dev
```

→ http://localhost:4321/twa-styleguide-source-2026/

Soubory ke změnám:
- `src/styles/tokens.css` — design tokeny
- `src/styles/base.css` — CSS komponenty
- `src/pages/index.astro` — showcase stránka

```bash
npm run build    # produkční build do dist/
npm run preview  # preview buildu lokálně
```

---

## 3) Vložení styleguide jako submodule do jiného projektu

```bash
# 1. Přejdi do cílového projektu
cd tvuj-astro-projekt

# 2. Přidej styleguide jako submodule
git submodule add https://github.com/pacesmarek/twa-styleguide-source-2026.git styleguide

# 3. Commitni submodule
git add .gitmodules styleguide
git commit -m "Add styleguide submodule"
```

Importuj CSS v Astro layoutu (`<style is:global>`):
```css
@import '../../styleguide/src/styles/tokens.css';
@import '../../styleguide/src/styles/base.css';
```

> Cesta závisí na umístění souboru — upravuj počet `../` podle potřeby.

Při klonování projektu se submodulem:
```bash
git clone --recurse-submodules https://github.com/pacesmarek/tvuj-projekt.git
# nebo pokud už naklonováno:
git submodule update --init --recursive
```

Aktualizace submodulu na nejnovější commit:
```bash
git submodule update --remote styleguide
git add styleguide
git commit -m "Update styleguide submodule"
```

---

## Docker — přehled služeb

| Service | Příkaz | Port | Popis |
|---|---|---|---|
| `styleguide-dev` | `docker compose up styleguide-dev` | 4322 | Dev server, live reload |
| `styleguide` | `docker compose --profile prod up --build` | 4321 | Nginx, hotový build |

Vstup do kontejneru:
```bash
docker compose exec styleguide-dev sh               # dev (Node + npm)
docker compose --profile prod exec styleguide sh    # prod (pouze nginx)
```

---

## Živá showcase

https://pacesmarek.github.io/twa-styleguide-source-2026/
