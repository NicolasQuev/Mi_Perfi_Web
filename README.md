# Perfil Web · Anderson Benites

Landing page personal bilingüe (ES/EN) para promocionar mi perfil profesional en LinkedIn
y otras plataformas.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion · Zod

---

## Empezar

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.
cdf
| Comando         | Qué hace                                  |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Servidor de desarrollo                    |
| `npm run build` | Build de producción                       |
| `npm start`     | Sirve el build de producción              |
| `npm run lint`  | ESLint                                    |
| `npx tsc --noEmit` | Comprobación de tipos                  |

---

## Dónde vive el contenido

**`src/content/profile.ts`** es la única fuente de verdad. Ahí están el nombre,
titulares, sobre mí, métricas, redes, skills, proyectos, experiencia y formación,
tomados del CV. Ningún componente necesita tocarse: la página entera se
reconstruye a partir de ese archivo.

Cada texto visible se escribe en los dos idiomas:

```ts
{ es: "Desarrollador Full Stack", en: "Full Stack Developer" }
```

Los textos de la interfaz (botones, etiquetas, mensajes de error) viven en
`src/content/ui-copy.ts`.

### Pendientes de ajustar

1. **`proficiency` de cada skill**: son estimaciones, el CV no declara niveles.
2. **`repositoryUrl` / `liveUrl` de los proyectos**: sin enlaces la tarjeta
   simplemente no muestra botones. Añade los que puedas compartir.
3. El CV se sirve desde `public/CV-Anderson-Benites-Yupanqui.pdf`; si lo
   reemplazas por una versión nueva, mantén el mismo nombre o actualiza
   `resumeUrl`.

---

## Variables de entorno

Copia `.env.example` a `.env.local` y complétalo:

| Variable              | Para qué sirve                                          |
| --------------------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`| Origen público; se usa en metadatos, OpenGraph y sitemap |
| `RESEND_API_KEY`      | Clave de [Resend](https://resend.com) para enviar correo |
| `CONTACT_FROM_EMAIL`  | Remitente verificado en Resend                          |
| `CONTACT_TO_EMAIL`    | Dónde quieres recibir los mensajes                      |

Sin estas tres últimas el formulario responde `delivery_failed` y no envía nada;
el resto del sitio funciona con normalidad.

---

## Arquitectura

Organización **por funcionalidad**, no por tipo de archivo, para que cada sección
sea autónoma y fácil de mover o eliminar.

```
src/
  app/                  Rutas: layout, página, API de contacto, sitemap, robots
  content/              Datos del perfil y textos de interfaz (tipados)
  i18n/                 Idioma: store, provider y hook de traducción
  features/
    navigation/         Header, scrollspy, progreso de scroll, selector de idioma
    hero/               Portada con efecto typewriter y métricas
    about/              Sobre mí y tarjeta de principios
    skills/             Categorías con barras de dominio animadas
    projects/           Tarjetas y filtro por tecnología
    experience/         Línea de tiempo laboral
    education/          Estudios y certificaciones
    contact/            Formulario (dominio, servicios y componentes)
    footer/             Pie de página
  shared/               Componentes y utilidades reutilizables entre features
```

Reglas que sigue el proyecto:

- Las `features` no se importan entre sí; comparten a través de `shared` y `content`.
- La validación del formulario se define **una vez** en
  `features/contact/domain/contactMessage.ts` y la usan cliente y servidor.
- El envío de correo se consume a través de un puerto (`EmailNotifier`), así que
  cambiar de proveedor no toca la ruta de la API.

---

## Seguridad del formulario

- Validación en el servidor: nunca se confía en el cliente.
- Rate limiting por IP (3 envíos cada 10 minutos, en memoria por instancia).
- Campo honeypot: a los bots se les responde éxito y no se envía nada.
- El contenido del visitante se escapa antes de insertarlo en el HTML del correo.
- Los mensajes nunca se registran en los logs (son datos personales).
- Los errores internos no se filtran al cliente: se devuelven códigos
  (`invalid_input`, `rate_limited`, `delivery_failed`) que la interfaz traduce.

> El rate limiter vive en memoria. Si despliegas en varias instancias, sustitúyelo
> por un almacén compartido (Redis / Upstash) para que el límite sea exacto.

---

## Accesibilidad

- Navegación por teclado con enlace "saltar al contenido" y foco visible.
- Etiquetas, `aria-invalid` y `aria-describedby` en todos los campos.
- Se respeta `prefers-reduced-motion`: sin typewriter ni animaciones de entrada.
- Sin JavaScript el contenido sigue siendo visible (respaldo con `<noscript>`).

---

## Despliegue

Pensado para Vercel: importa el repositorio, define las variables de entorno y
listo. El sitio es estático salvo `/api/contact`, que se ejecuta bajo demanda.
