# Cvičení 5 — Astro

Minimální Astro projekt.

## Dev (Docker, live reload)

```bash
docker compose up dev
```
→ http://192.168.155.2:4321/

## Dev (lokálně)

```bash
npm install
npm run dev
```
→ http://localhost:4321/

## Produkce (Docker, nginx)

```bash
docker compose --profile prod up --build
```
→ http://192.168.155.2:4322/

## Vstup do kontejneru

```bash
docker compose exec dev sh
```
