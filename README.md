# Portfolio Personal - Jean Marco Miranda

Un portafolio web moderno, minimalista y de alto rendimiento construido con **Astro 5** y **Tailwind CSS v4**. Diseñado para destacar proyectos y habilidades con una experiencia de usuario fluida y un diseño visualmente atractivo.

## 🚀 Características Principales

- **Rendimiento Excepcional**: Construido sobre Astro para una carga ultrarrápida (Zero-JS by default).
- **Diseño Responsivo**: Adaptable a todos los dispositivos (Móvil, Tablet, Desktop).
- **Modo Oscuro/Claro**: Soporte nativo de temas con persistencia y transición suave.
- **Micro-interacciones y Animaciones**: Uso de animaciones CSS nativas para una experiencia premium.
- **Componentes Modulares**: Arquitectura limpia basada en componentes reutilizables.
- **Iconografía Moderna**: Integración con Lucide Icons y Simple Icons.

## 🛠️ Stack Tecnológico

- **Core**: [Astro 5.x](https://astro.build/) - Framework web para contenido estático.
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework.
- **Iconos**: `lucide-astro` y `simple-icons`.
- **Despliegue**: Optimizado para [Vercel](https://vercel.com/) (Adapter configurado).
- **Runtime**: [Bun](https://bun.sh/) (recomendado) o Node.js.

## 📂 Estructura del Proyecto

```text
/
├── public/               # Archivos estáticos
├── src/
│   ├── assets/           # Imágenes y assets del proyecto
│   ├── components/       # Componentes reutilizables
│   │   ├── layout/       # Componentes de estructura (Header, Footer)
│   │   ├── sections/     # Secciones principales (Hero, About, Projects, Contact)
│   │   └── ui/           # Elementos UI (ThemeToggle, Botones)
│   ├── data/             # Datos estáticos (proyectos, config)
│   ├── layouts/          # Layouts base de las páginas
│   ├── pages/            # Rutas y páginas del sitio (index.astro)
│   └── styles/           # Estilos globales CSS
└── astro.config.mjs      # Configuración de Astro
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto. Este proyecto usa **Bun** como gestor de paquetes.

| Comando | Acción |
| :--- | :--- |
| `bun install` | Instala las dependencias del proyecto |
| `bun dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `bun build` | Compila el sitio para producción en `./dist/` |
| `bun preview` | Previsualiza la build de producción localmente |

## 🔧 Personalización

### Datos Personales
Puedes editar la información principal directamente en los componentes de sección ubicados en `src/components/sections/`:
- `Hero.astro`: Información de cabecera y fotos.
- `AboutMe.astro`: Biografía detallada.
- `Contact.astro`: Enlaces y medios de contacto.

### Proyectos
Los proyectos se gestionan desde `src/data/projects.js` (si aplica) o directamente en el componente `Projects.astro`, permitiendo añadir o modificar trabajos fácilmente.

## 📄 Licencia

Este proyecto es de uso libre para fines personales y educativos.

---
Hecho con 🚀 y Astro por Jean Marco Miranda.
