---
title: "NestJS: Primeros Pasos desde Cero"
description: "Aprende a instalar NestJS, entender su estructura inicial, generar recursos automáticamente y comprender el flujo de datos que sigue tu API."
pubDate: 2026-03-06
tags: ["NestJS", "Node.js", "Backend", "TypeScript", "API REST"]
---

NestJS es un framework para trabajar con Node.js que te obliga a seguir una estructura organizada. Eso al principio puede sentirse un poco rígido, pero una vez que lo entiendes te das cuenta de que es justo lo que hace que el código sea fácil de mantener y de escalar.

En este post voy a cubrir los primeros pasos para arrancar un proyecto desde cero.

---

## 1. Instalación

Lo primero es instalar el CLI de NestJS de forma global:

```bash
npm i -g @nestjs/cli
```

Con eso ya podemos crear nuestro proyecto usando:

```bash
nest new <nombre-proyecto>
```

> **Nota:** Dependiendo del manejador de paquetes que usemos, el CLI se instalará en su respectiva carpeta `bin`. Es importante que esta esté agregada al `PATH` de nuestro sistema para que el comando `nest` sea reconocido.

---

## 2. Estructura Inicial

NestJS usa código **opinado**, lo que significa que para que el sistema pueda entender y predecir el código, te obliga a seguir una estructura organizada.

### Concepto clave: El Módulo Raíz (AppModule)

Todo proyecto de NestJS tiene que tener por lo menos un módulo. Al crear nuestra app inicial, se genera el módulo `app.module.ts`, el cual funciona como punto de entrada y será el que organice a los demás módulos de la aplicación. Sería como el "cerebro" que sabe y maneja las piezas que están conectadas a él.

---

## 3. Generación de Recursos

En lugar de crear los archivos a mano, en NestJS podemos usar el generador que nos trae para crear nuestro primer módulo, controlador y servicio de un solo golpe:

```bash
nest generate resource <nombre-recurso>
```

Al ejecutarlo nos mostrará qué tipo de módulo queremos. Lo más común es **REST API** si es lo que pensamos desarrollar. En caso de seleccionarla, nos permitirá generar los entry points para un CRUD automáticamente en caso de que queramos ahorrarnos esos pasos.

Una vez termine, creará la carpeta `src/<nombre-recurso>` en nuestra raíz.

---

## 4. Flujo de NestJS

Para que nuestra API funcione, necesitamos configurar los archivos para que los datos viajen en un orden específico.

### Modelo de Datos

En la mayoría de los casos, primero definiremos el o los modelos de datos que vamos a estar manejando en nuestro módulo. Por ejemplo, para un manejador de tareas crearemos `src/task/task.model.ts`, en el cual colocaremos interfaces de TypeScript o enums para maquetar la estructura que tendrán nuestros datos:

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

> **Concepto clave — Contratos:** En TypeScript, los enums actúan como contratos de valores definidos. Usando `TaskStatus` evitamos errores de dedo, como por ejemplo escribir `"terminado"` en lugar de `"DONE"`.

### Servicio

El siguiente archivo en nuestro flujo es el **servicio**, en este caso `src/task/task.service.ts`. Aquí es donde vivirá la lógica de negocio que usaremos para este módulo. El servicio será el encargado de manipular los datos a como sea necesario:

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

> **Concepto clave — Inyección de Dependencias (DI):** En Nest esto lo manejamos con el decorador `@Injectable()`. Esto le indica a Nest que esta clase puede ser "inyectada" en otras clases, como en nuestro controlador. Es decir, nosotros nunca hacemos un `new TaskService()` para crear una instancia — Nest la crea y la entrega cuando se necesite. Esto hace el código muy fácil de testear.

> **Nota:** Para usar `uuid` es necesario instalar la librería y sus tipos correspondientes:
> ```bash
> npm install uuid
> npm install --save-dev @types/uuid
> ```

### Controlador

El siguiente paso en nuestro flujo es el **controlador**, el cual será el encargado de recibir las peticiones HTTP (GET, POST, PUT, etc.) y devolverá una respuesta en función de lo que se solicite.

Para esto NestJS nos provee de diferentes decoradores: `@Controller('tasks')` se coloca sobre una clase y recibe como parámetro el nombre que tendrá nuestro endpoint. Dentro de esta clase colocamos decoradores para cada método HTTP como `@Get()`, `@Post()`, etc. Y usamos `@Body()` para los parámetros que recibirá dentro de un método específico:

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

---

## 5. Data Transfer Objects (DTO)

Los DTO son objetos que definen en nuestro proyecto cómo se enviarán los datos a través de la red. No tienen nada que ver con la lógica del negocio, simplemente funcionan como un **contrato de entrada**.

Definimos de manera precisa cómo recibiremos los datos, incluso el nombre exacto que tendrán los parámetros. No es necesario que estos coincidan con alguna tabla o modelo de nuestra base de datos.

Aquí tenemos la implementación del DTO para nuestro ejemplo de una tarea:

```typescript
export class CreateTaskDto {
  title: string;
  description: string;
}
```

Una vez tenemos esta clase, podemos referenciarla como parámetro para nuestro endpoint en lugar de estar colocando uno por uno cada parámetro. También deberemos modificar nuestro servicio:

```typescript
@Post()
createTask(@Body() createTaskDto: CreateTaskDto): Task {
  return this.tasksService.createTask(createTaskDto);
}
```

---

## 6. Validaciones Automáticas

Para que nuestros DTO realmente funcionen como una barrera de entrada para nuestros endpoints, necesitamos validarlos una vez que se reciba alguna petición. Para ello instalamos las siguientes dependencias:

```bash
npm install class-validator class-transformer
```

Estas dos librerías nos permiten acceder a diferentes decoradores para agregarlos a nuestros DTO:

```typescript
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
```

El siguiente paso es hacerle saber a NestJS que tiene que verificar estas reglas para cada petición. Para ello debemos activar el `ValidationPipe` a nivel global en `src/main.ts`:

```typescript
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // <-- Activa la magia
  await app.listen(3000);
}
bootstrap();
```

> **Concepto clave — ValidationPipe:** En NestJS un pipe es un transformador o un validador. El `ValidationPipe` intercepta las peticiones, mira las reglas del DTO que está utilizando (`IsNotEmpty`, etc.) y si algo falta, responde automáticamente con un **Error 400 (Bad Request)** sin que escribamos un solo `if`.

---

## 7. Manejo de Errores con HttpException

¿Qué pasa si intentamos buscar una tarea por ID y no existe? Lo ideal sería responder correctamente, es decir, indicarle al cliente de manera clara el error que se ha generado y si es posible qué es lo que el servidor espera recibir.

Para ello agregamos el método `getTaskById` a nuestro `TaskService`:

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

> **Concepto clave — HttpException:** NestJS nos brinda diferentes tipos de excepciones integradas como `NotFoundException`, `BadRequestException` o `UnauthorizedException`. Cuando usamos el keyword `throw` junto a una de estas, Nest se encarga de formatear la respuesta JSON para que el cliente reciba un mensaje claro con el código de estado HTTP correcto.

---

## 8. Operaciones de Eliminación y Actualización

Para completar nuestro CRUD, agregaremos el borrado y la actualización del estado. Para ello agregamos las siguientes funciones a nuestro `TaskService`:

```typescript
deleteTask(id: string): void {
  const found = this.getTaskById(id); // Reutilizamos la lógica de error
  this.tasks = this.tasks.filter((task) => task.id !== found.id);
}

updateTaskStatus(id: string, status: TaskStatus): Task {
  const task = this.getTaskById(id);
  task.status = status;
  return task;
}
```

Luego agregamos los métodos HTTP correspondientes en nuestro `TaskController`:

```typescript
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

## Resumen del Flujo

```
HTTP Request
    ↓
Controller  →  recibe la petición y la delega
    ↓
Service     →  ejecuta la lógica de negocio
    ↓
Model       →  define la estructura de los datos
    ↓
HTTP Response
```

Con esto ya tenemos un CRUD completo con NestJS: instalación, estructura, DTOs, validaciones, manejo de errores y operaciones de lectura, creación, actualización y borrado.
