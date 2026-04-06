---
title: "DTOs, Validaciones y CRUD Completo"
description: "Implementa Data Transfer Objects, validaciones automáticas con class-validator, manejo de errores HTTP y las operaciones de actualización y eliminación."
pubDate: 2026-03-06
tags: ["NestJS", "Node.js", "Backend", "TypeScript"]

series: "nestjs-curso"
seriesTitle: "NestJS: De Cero a API REST"
phase: 2
phaseTitle: "Validación y CRUD"
step: 1
stepTitle: "DTOs, Validaciones y CRUD Completo"
order: 3
---

Con el modelo, servicio y controlador en su lugar, es hora de blindar nuestra API con validaciones y completar todas las operaciones del CRUD.

---

## 1. Data Transfer Objects (DTOs)

Los DTOs definen cómo se envían los datos a través de la red. No tienen lógica de negocio: son un **contrato de entrada** que describe exactamente qué campos se esperan en cada petición.

Creamos `src/task/dto/create-task.dto.ts`:

```typescript
export class CreateTaskDto {
  title: string;
  description: string;
}
```

Actualizamos el controlador para usarlo:

```typescript
@Post()
createTask(@Body() createTaskDto: CreateTaskDto): Task {
  return this.tasksService.createTask(createTaskDto);
}
```

Y el servicio:

```typescript
createTask(createTaskDto: CreateTaskDto): Task {
  const { title, description } = createTaskDto;
  const task: Task = {
    id: uuid(),
    title,
    description,
    status: TaskStatus.OPEN,
  };
  this.tasks.push(task);
  return task;
}
```

---

## 2. Validaciones Automáticas

Para que el DTO funcione como una barrera real, instalamos las validaciones:

```bash
npm install class-validator class-transformer
```

Decoramos el DTO con las reglas de validación:

```typescript
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
```

Luego activamos el `ValidationPipe` globalmente en `src/main.ts`:

```typescript
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

> **Concepto clave — ValidationPipe:** Intercepta cada petición, verifica las reglas del DTO (`@IsNotEmpty`, etc.) y si algo falla, responde automáticamente con un **Error 400 (Bad Request)** sin que escribamos un solo `if`.

---

## 3. Manejo de Errores con HttpException

¿Qué pasa si buscamos una tarea por ID que no existe? Agregamos `getTaskById` al servicio:

```typescript
import { NotFoundException } from '@nestjs/common';

getTaskById(id: string): Task {
  const found = this.tasks.find((task) => task.id === id);

  if (!found) {
    throw new NotFoundException(`Tarea con ID "${id}" no encontrada`);
  }

  return found;
}
```

> **Concepto clave — HttpException:** Clases como `NotFoundException`, `BadRequestException` o `UnauthorizedException` formatean la respuesta JSON automáticamente con el código HTTP correcto. Solo hacemos `throw` y NestJS hace el resto.

---

## 4. Operaciones de Eliminación y Actualización

Para completar el CRUD, agregamos al servicio:

```typescript
deleteTask(id: string): void {
  const found = this.getTaskById(id); // Reutiliza la lógica de error
  this.tasks = this.tasks.filter((task) => task.id !== found.id);
}

updateTaskStatus(id: string, status: TaskStatus): Task {
  const task = this.getTaskById(id);
  task.status = status;
  return task;
}
```

Y en el controlador:

```typescript
@Get('/:id')
getTaskById(@Param('id') id: string): Task {
  return this.tasksService.getTaskById(id);
}

@Delete('/:id')
deleteTask(@Param('id') id: string): void {
  this.tasksService.deleteTask(id);
}

@Patch('/:id/status')
updateTaskStatus(
  @Param('id') id: string,
  @Body('status') status: TaskStatus,
): Task {
  return this.tasksService.updateTaskStatus(id, status);
}
```

---

## Resumen del Flujo Completo

```
HTTP Request
    ↓
Controller  →  recibe la petición, valida con DTO
    ↓
Service     →  ejecuta la lógica de negocio
    ↓
Model       →  define la estructura de los datos
    ↓
HTTP Response
```

¡Con esto tienes un CRUD completo con NestJS! Cubrimos instalación, estructura, generación de recursos, DTOs, validaciones automáticas, manejo de errores y todas las operaciones CRUD.
