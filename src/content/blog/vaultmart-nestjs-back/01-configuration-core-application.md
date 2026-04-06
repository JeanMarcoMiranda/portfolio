---
title: "Configuración del Core de la Aplicación"
description: "Arrancamos Vaultmart configurando NestJS desde cero: instalación, librerías, arquitectura de carpetas, conexión a PostgreSQL con TypeORM y el punto de entrada de nuestra API."
pubDate: 2026-04-06
tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "SaaS", "Backend"]

series: "vaultmart-saas"
seriesTitle: "Vaultmart: Construyendo un SaaS con NestJS"
phase: 1
phaseTitle: "Bases del Proyecto — Arquitectura y Multitenancy"
step: 1
stepTitle: "Configuración del Core de la Aplicación"
order: 1
---

Vamos a desarrollar un proyecto backend en NestJS para un minimarket y tratar de convertirlo en un SaaS. Acompáñame a lo largo de este post donde explico todo el proceso de desarrollo de esta aplicación, enfocándonos netamente en la parte del backend.

En este primer paso sentamos las bases: instalación, librerías, arquitectura de carpetas, conexión a PostgreSQL y el punto de entrada de nuestra API.

---

## 1. Instalación del CLI y Creación del Proyecto

El primer paso es crear el proyecto con NestJS. En caso de no tener instalado el CLI, usamos el siguiente comando:

```bash
npm i -g @nestjs/cli
```

Luego de instalarlo, creamos el proyecto que desarrollaremos:

```bash
nest new vaultmart-back
```

---

## 2. Librerías Iniciales

Las librerías que instalaremos desde el inicio son las siguientes:

- `@nestjs/typeorm` y `typeorm`: Nos servirán para interactuar con la base de datos mediante objetos ORM.
- `pg`: Es el driver nativo que usaremos para trabajar con PostgreSQL.
- `class-validator` y `class-transformer`: Nos sirven para validar los datos que envían los usuarios mediante DTOs, asegurándonos de que estos calcen con lo que el servidor espera recibir.
- `@nestjs/config`: Nos sirve para manejar de mejor manera las variables de entorno mediante nuestro archivo `.env`.

El comando para instalarlas todas de una sola vez:

```bash
npm install @nestjs/typeorm typeorm pg class-validator class-transformer @nestjs/config
```

---

## 3. Arquitectura de Carpetas

Para este proyecto usaremos las mejores prácticas de **Domain Driven Design (DDD)** de una manera simplificada. Estructuraremos nuestras carpetas dentro de `src` de la siguiente manera:

```
src/
├── common/             # Decoradores, filtros y middlewares globales
│   ├── decorators/
│   ├── dto/
│   └── middleware/
├── config/             # Configuraciones de TypeORM, JWT, etc.
├── modules/            # Aquí vivirá la lógica de negocio (Dominios)
│   ├── auth/
│   ├── tenants/        # El primer módulo que crearemos
│   └── users/
├── app.module.ts       # Módulo raíz que orquesta todo
└── main.ts
```

---

## 4. Configuración de la Base de Datos y Variables de Entorno

Crearemos un archivo `.env` en la raíz del proyecto para no tener hardcodeadas las credenciales de la base de datos:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_password
DB_NAME=vaultmart_db
```

El siguiente paso es configurar nuestro `AppModule`:

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
})
export class AppModule {}
```

Lo que hacemos aquí es usar `ConfigModule` con `isGlobal: true` para que este módulo se cargue de forma global y podamos acceder a nuestras variables de entorno desde cualquier módulo de la aplicación.

Lo siguiente es importar `TypeOrmModule` y usar `forRootAsync` para que se configure de manera asíncrona. Dentro de su configuración, importamos `ConfigModule` para cargar las variables de entorno con todos los datos necesarios para conectarnos a la base de datos.

> **Nota:** `autoLoadEntities` registra automáticamente en TypeORM las entidades que vayamos definiendo en nuestros módulos. Por su parte, `synchronize: true` crea las tablas en la base de datos de manera automática, pero esto solo debería usarse en desarrollo. En producción lo recomendable es utilizar migraciones para no arriesgarnos a perder datos.

---

## 5. Punto de Entrada de Nuestra API

Aquí modificaremos `main.ts` para hacer que nuestra API sea segura y valide los datos de entrada de manera automática:

```typescript
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
```

Usamos `app.setGlobalPrefix()` para que todos los endpoints queden bajo `/api/v1`. Luego configuramos `app.useGlobalPipes()` con un `ValidationPipe` al que le activamos tres opciones:

- `whitelist: true` — elimina cualquier campo del body que no esté definido en el DTO.
- `forbidNonWhitelisted: true` — en lugar de ignorar los campos no permitidos, lanza un error para avisarle al cliente que está enviando algo que no debería.
- `transform: true` — realiza la transformación de tipos de manera automática, por ejemplo convierte un string `"3000"` al número `3000` si el DTO lo espera así.

En el siguiente paso crearemos nuestro primer módulo de dominio: el de tenants, que es la pieza central de nuestra arquitectura multitenancy.
