---
title: "Generación de Recursos y Flujo de Datos"
description: "Genera módulos, controladores y servicios automáticamente con el CLI de NestJS, y comprende el flujo completo que sigue una petición HTTP."
pubDate: 2026-03-06
tags: ["NestJS", "Node.js", "Backend", "TypeScript"]

series: "nestjs-curso"
seriesTitle: "NestJS: De Cero a API REST"
phase: 1
phaseTitle: "Fundamentos"
step: 2
stepTitle: "Recursos y Flujo de Datos"
order: 2
---

Con el proyecto corriendo, el siguiente paso es crear nuestro primer recurso funcional. NestJS incluye un generador que nos ahorra crear los archivos a mano.

---

## 1. Generación de Recursos con el CLI

En lugar de crear los archivos manualmente, podemos usar el generador de NestJS para crear un módulo, controlador y servicio de un solo golpe:

```bash
nest generate resource nombre-recurso
```

Al ejecutarlo, el CLI preguntará qué tipo de API queremos. Seleccionamos **REST API** y luego si queremos los entry points del CRUD generados automáticamente.

Una vez terminado, creará la carpeta `src/nombre-recurso/` con todos los archivos necesarios.

> **Tip:** También puedes usar la forma corta: `nest g res nombre-recurso`

---

## 2. El Modelo de Datos

Antes de implementar la lógica, definimos la estructura de nuestros datos. Creamos `src/task/task.model.ts`:

```typescript
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
```

> **Concepto clave — Contratos:** Los enums actúan como contratos de valores definidos. Usar `TaskStatus` evita errores silenciosos como escribir `"terminado"` en lugar de `"DONE"`. TypeScript te avisará en tiempo de compilación si usas un valor inválido.

---

## 3. El Servicio (Lógica de Negocio)

El **servicio** es donde vive la lógica de negocio. Es el encargado de manipular los datos. Editamos `src/task/tasks.service.ts`:

```typescript
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
```

> **Concepto clave — Inyección de Dependencias:** El decorador `@Injectable()` le indica a NestJS que esta clase puede ser inyectada en otras. Nunca hacemos `new TaskService()` manualmente — Nest crea la instancia y la entrega cuando se necesite. Esto hace el código extremadamente fácil de testear.

> **Nota:** Para usar `uuid` instala las dependencias:
> ```bash
> npm install uuid
> npm install --save-dev @types/uuid
> ```

---

## 4. El Controlador (Capa HTTP)

El **controlador** recibe las peticiones HTTP y delega la lógica al servicio. Editamos `src/task/tasks.controller.ts`:

```typescript
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.tasksService.createTask(title, description);
  }
}
```

Con esto, `GET /tasks` devuelve todas las tareas y `POST /tasks` crea una nueva.

En la siguiente y última página cubriremos DTOs, validaciones automáticas, manejo de errores y las operaciones de actualización y eliminación para completar el CRUD.
