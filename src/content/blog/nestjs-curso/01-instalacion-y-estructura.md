---
title: "Instalación y Estructura del Proyecto"
description: "Instala NestJS, crea tu primer proyecto y comprende su estructura de archivos inicial y el concepto del módulo raíz."
pubDate: 2026-03-06
tags: ["NestJS", "Node.js", "Backend", "TypeScript"]

series: "nestjs-curso"
seriesTitle: "NestJS: De Cero a API REST"
phase: 1
phaseTitle: "Fundamentos"
step: 1
stepTitle: "Instalación y Estructura"
order: 1
---

NestJS es un framework para Node.js que te obliga a seguir una estructura organizada. Ese enfoque opinado que al principio puede sentirse rígido es, en realidad, lo que hace que el código sea fácil de mantener y escalar.

En esta primera página cubrimos cómo arrancar desde cero: instalación, estructura inicial y el concepto fundamental del módulo raíz.

---

## 1. Instalación

Lo primero es instalar el CLI de NestJS de forma global:

```bash
npm i -g @nestjs/cli
```

Con eso ya podemos crear nuestro proyecto:

```bash
nest new nombre-proyecto
```

> **Nota:** Dependiendo del manejador de paquetes que uses, el CLI se instalará en su respectiva carpeta `bin`. Es importante que esta esté en el `PATH` del sistema para que el comando `nest` sea reconocido.

---

## 2. Estructura Inicial

NestJS usa código **opinado**, lo que significa que el sistema te obliga a seguir una estructura organizada para poder predecir y entender el código.

Una vez creado el proyecto, verás esta estructura base en `src/`:

```
src/
├── app.controller.ts    ← Controlador raíz
├── app.controller.spec.ts
├── app.module.ts        ← Módulo raíz (el "cerebro")
├── app.service.ts       ← Servicio raíz
└── main.ts              ← Punto de entrada
```

### Concepto clave: El Módulo Raíz (AppModule)

Todo proyecto de NestJS tiene que tener al menos un módulo. Al crear la app, se genera `app.module.ts`, el cual funciona como punto de entrada y organiza todos los demás módulos de la aplicación. Es el "cerebro" que conoce y conecta todas las piezas.

```typescript
// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

> **Concepto clave — Decoradores:** El `@Module()` es un decorador de TypeScript. NestJS usa decoradores extensivamente para describir el rol de cada clase. Es la forma en que el framework "lee" tu código y entiende cómo conectar las piezas.

---

## 3. Levantar el Servidor

Para correr el proyecto en modo desarrollo:

```bash
npm run start:dev
```

Esto inicia el servidor en `http://localhost:3000` con hot-reload. Cada cambio que hagas en el código se reflejará automáticamente sin reiniciar manualmente.

En la próxima página veremos cómo generar recursos completos (módulos, controladores y servicios) de forma automática con el CLI.
