---
title: "NestJS: Primeros Pasos desde Cero"
description: "Aprende a instalar NestJS, entender su estructura inicial, generar recursos automáticamente y comprender el flujo de datos que sigue tu API."
pubDate: 2026-03-06
tags: ["NestJS", "Node.js", "Backend", "TypeScript", "API REST"]
---

¿Listo para construir APIs robustas con Node.js? **NestJS** es un framework opinado que te obliga a escribir código organizado y predecible — y eso es exactamente lo que lo hace tan poderoso.

En este post cubrimos los primeros pasos esenciales para arrancar un proyecto desde cero.

---

## 1. Instalación

Para empezar, instala el CLI de NestJS de forma global:

```bash
npm i -g @nestjs/cli
```

Luego, crea tu proyecto con:

```bash
nest new <nombre-proyecto>
```

> **Nota:** Dependiendo del gestor de paquetes que uses (npm, yarn, pnpm), el ejecutable `nest` se instalará en una carpeta `bin` diferente. Asegúrate de que esa carpeta esté en el `PATH` de tu sistema para que el comando sea reconocido correctamente.

---

## 2. Estructura Inicial

NestJS usa **código opinado**, lo que significa que te exige seguir una estructura organizada para que el framework pueda entender y predecir tu código.

### El Módulo Raíz (`AppModule`)

Todo proyecto de NestJS debe tener al menos un módulo. Al crear tu app, se genera automáticamente el archivo `app.module.ts`, que actúa como el **punto de entrada principal** y organiza todos los demás módulos de la aplicación. Piénsalo como el "cerebro" que conoce y conecta todas las piezas del sistema.

---

## 3. Generación de Recursos

En lugar de crear archivos a mano, NestJS incluye un **generador de recursos** que crea el módulo, el controlador y el servicio de un solo golpe:

```bash
nest generate resource <nombre-recurso>
```

Al ejecutarlo, el CLI te preguntará qué tipo de módulo quieres generar. Si vas a construir una **REST API**, selecciona esa opción — incluso te ofrecerá generar los endpoints de un CRUD completo automáticamente.

Una vez terminado, se creará la carpeta:

```
src/<nombre-recurso>/
```

---

## 4. Flujo de Datos en NestJS

Para que tu API funcione correctamente, los datos deben viajar en un orden específico a través de tres capas principales:

### Modelo de Datos

Primero defines la estructura de tus datos. Por ejemplo, para un gestor de tareas crearías:

```
src/task/task.model.ts
```

Aquí colocas **interfaces de TypeScript** y **enums** que maquetan cómo se verán tus datos.

> **Concepto clave — Contratos:** En TypeScript, los enums actúan como contratos. Por ejemplo, usar `TaskStatus.DONE` en lugar de escribir el string `"done"` a mano evita errores de dedo y hace el código mucho más seguro y mantenible.

---

### Servicio (Business Logic)

El siguiente paso es el **servicio**, que vive en:

```
src/task/task.service.ts
```

Aquí reside toda la **lógica de negocio**: cómo se crean, modifican o eliminan los datos. El servicio es el responsable de manipular la información según las reglas del dominio.

> **Concepto clave — Inyección de Dependencias (DI):** NestJS usa el decorador `@Injectable()` para indicar que una clase puede ser "inyectada" en otras. Esto significa que nunca escribes `new TaskService()` manualmente — Nest crea y entrega la instancia cuando se necesita. Esto facilita enormemente las pruebas unitarias.

Para generar IDs únicos, puedes instalar la librería `uuid`:

```bash
npm install uuid
npm install --save-dev @types/uuid
```

---

### Controlador (HTTP Layer)

Finalmente, el **controlador** es quien recibe las peticiones HTTP y devuelve las respuestas:

```
src/task/task.controller.ts
```

NestJS provee decoradores específicos para cada parte:

| Decorador                                  | Uso                                |
| ------------------------------------------ | ---------------------------------- |
| `@Controller('task')`                      | Define el nombre del endpoint base |
| `@Get()`, `@Post()`, `@Put()`, `@Delete()` | Mapean los métodos HTTP            |
| `@Body()`                                  | Extrae el cuerpo de la petición    |
| `@Param()`                                 | Extrae parámetros de la URL        |

---

## Resumen del Flujo

```
HTTP Request
    ↓
Controller  →  recibe y delega la petición
    ↓
Service     →  ejecuta la lógica de negocio
    ↓
Model       →  define la estructura de los datos
    ↓
HTTP Response
```

Con esta base ya tienes todo lo que necesitas para construir tu primera API con NestJS. En próximos posts profundizaremos en validaciones con DTOs, manejo de errores y la conexión a una base de datos.

¡Hasta la próxima!
