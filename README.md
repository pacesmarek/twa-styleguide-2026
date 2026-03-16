# Cvičení 6 — Astro

Minimální Astro projekt. Pracujeme z Docker kontejneru — není potřeba mít Node.js nainstalovaný lokálně.

*Předpoklad:* nainstalovaný Docker Desktop.

---

## 1) Spuštění dev serveru

```bash
docker compose up dev
```

Co se stane:
- Docker stáhne node:20-alpine (jen poprvé)
- Uvnitř kontejneru se automaticky spustí npm install a npm run dev
- Lokální soubory jsou propojené — změny v editoru se projeví okamžitě

Přístup v prohlížeči:
- Windows / WSL2: http://192.168.155.2:4321/
- Mac / Linux: http://localhost:4321/

---

## 2) Vstup do kontejneru (pro npm příkazy)

Otevři nový terminál a spusť:

```bash
docker compose exec dev sh
```

Teď jsi uvnitř kontejneru. Spouštěj npm příkazy normálně:

```bash
npm install <balicek>    # instalace balíčku
npm run build            # produkční build
npm run preview          # preview buildu
exit                     # opuštění kontejneru
```

*Všechny npm příkazy spouštěj uvnitř kontejneru, ne na hostitelském počítači.*

---

## 3) Zastavení

```bash
docker compose down
```

nebo Ctrl+C v terminálu kde běží `docker compose up dev`.

---

## Struktura projektu

```
src/
  styles/
    tokens.css      # CSS proměnné
    components.css        # komponenty (.card, .btn, ...)
  pages/
    index.astro     # hlavní stránka
astro.config.mjs    # konfigurace Astro
package.json        # závislosti
docker-compose.yml  # Docker konfigurace (dev)
```
