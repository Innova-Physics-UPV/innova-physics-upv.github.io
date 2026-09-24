# Web Innova Physics UPV

Web de [Innova Physics UPV](https://innova-physics-upv.github.io/), hecha con
[Astro](https://astro.build/) y desplegada en GitHub Pages.

**En producción:** https://innova-physics-upv.github.io/

## Estado

Ahora mismo está publicada **solo la home**. El resto de páginas están
empezadas pero sin terminar, así que viven en `src/pages/_wip/`: Astro no
crea rutas para carpetas que empiezan por `_`, de modo que el trabajo se
conserva sin que las páginas sean accesibles.

Para publicar una, basta con sacarla de `_wip/`:

```sh
git mv src/pages/_wip/Partners.astro src/pages/Partners.astro
```

…y volver a añadir su enlace en `src/Components/Header.astro` y
`src/Components/Footer.astro`.

## Poner en marcha el proyecto

Hace falta Node 18.20.8+, 20.3+ o 22+ (CI usa la 22).

```sh
npm install
npm run dev        # http://localhost:4321
```

| Comando           | Qué hace                              |
| :---------------- | :------------------------------------ |
| `npm install`     | Instala dependencias                  |
| `npm run dev`     | Servidor local en `localhost:4321`    |
| `npm run build`   | Compila el sitio a `./dist/`          |
| `npm run preview` | Previsualiza el build antes de subirlo |

## Estructura

```text
public/                 Assets servidos tal cual desde la raíz del sitio
├── partners/           Logos de partners (.svg)
├── curves*.webp        Las curvas del fondo
└── Alfabet/            Tipografía de marca

src/
├── pages/
│   ├── index.astro     La home (única ruta publicada)
│   └── _wip/           Páginas sin terminar, no se enrutan
├── Layout/layout.astro Esqueleto de página: head, fondo, header y footer
├── Components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── Home/           Secciones de la home
├── styles/globals.css  Design tokens y clases compartidas
└── consts.ts           URLs compartidas (formulario, dossier)
```

Todo lo que esté en `public/` se sirve desde la raíz: `public/partners/etsit.svg`
queda en `/partners/etsit.svg`.

### Sobre `globals.css`

Ahí están los *design tokens* (tipografías, escala, colores, espaciado) y las
utilidades que se repiten entre componentes: `.contenedor`, `.btn`, las rejillas,
el sistema de curvas del fondo (`.bg-wrapper` / `.bg-image-percent`) y los
títulos con flecha. Si algo se usa en más de un sitio, va aquí; si es de un
componente concreto, en su `<style>`.

## Despliegue

Cada push a `main` dispara `.github/workflows/astro.yml`, que hace `npm ci`,
`npm run build` y publica `./dist/` en GitHub Pages. No hay que subir nada a
mano ni commitear el build.

## Ramas

| Rama       | Qué es                                                        |
| :--------- | :------------------------------------------------------------ |
| `main`     | Lo que está publicado                                          |
| `ip3-web`  | Rama de trabajo de esta versión                                |
| `ip2-web`  | La web anterior (Next.js), guardada tal cual por si hace falta |

Las ramas `Home`, `Partners`, `Get-Involved` y `web-v3` ya están integradas en
`ip3-web`; `testing` y `prueba` son de la versión antigua.

## Pendiente

- Terminar las páginas de `src/pages/_wip/`.
- Falta subir el dossier a `public/dossier.pdf` (ya está enlazado desde la
  página de Partners, que aún no está publicada).
- Los botones «Partner with Us» y «Apply to ELIAC» no llevan a ningún sitio
  todavía; están marcados con un `TODO` en el código.
- `@astrojs/svelte` está instalado pero no se usa ningún componente Svelte.
  Si no va a hacer falta, se puede quitar.
