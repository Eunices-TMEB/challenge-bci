## Fase 1: Node/Express
**Objetivo:** Inicialización de servidor y endpoint GET.
**Prompt:** Crear proyecto Node.js con Express y TypeScript, estructura en controllers/services/interfaces, endpoint GET /api/v1/elements.
**Resultado:** API REST funcional en la raíz del workspace con datos estáticos de elementos y CORS para Angular.

## Fase 2: Angular
**Objetivo:** Consumo de datos y UI.
**Prompt:** Crear proyecto Angular v18+ con Standalone Components, ElementService con HttpClient, TableComponent con Signals/Observable y CORS en Express.
**Resultado:** Frontend en `frontend/` que consume la API y muestra los elementos en una tabla con estados de loading y error.

## Fase 3: NestJS
**Objetivo:** Migración a BFF y DTOs.
**Prompt:** Crear proyecto NestJS como BFF con módulo `elements`, `ElementDto`, `ValidationPipe` y endpoint GET /api/v1/elements.
**Resultado:** BFF modular en `bff/` con arquitectura por módulos, tipado mediante DTOs y validación global.

### ¿Cómo mejora NestJS la escalabilidad frente a Express?

| Aspecto | Express (Fase 1) | NestJS BFF (Fase 3) |
|---------|------------------|---------------------|
| **Arquitectura** | Estructura manual en carpetas; el desarrollador define convenciones. | Módulos autocontenidos (`ElementsModule`) con inyección de dependencias nativa. Cada dominio se aísla y se registra en `AppModule`. |
| **Escalabilidad** | Al crecer, los controladores y servicios se acoplan en `index.ts` o rutas globales. | Nuevos dominios se añaden como módulos independientes sin tocar código existente (Open/Closed Principle). |
| **Tipado y validación** | Interfaces TypeScript sin validación en runtime. | `ElementDto` con `class-validator` + `ValidationPipe` global: los datos se validan automáticamente en cada request. |
| **Testabilidad** | Dependencias instanciadas manualmente (`new ElementService()`). | DI de NestJS permite mockear `ElementsService` en tests unitarios sin acoplamiento. |
| **Rol BFF** | API monolítica que expone datos directamente al frontend. | Capa intermedia preparada para agregar transformación de DTOs, agregación de microservicios, autenticación y caché sin modificar el frontend. |

**Conclusión:** NestJS no solo organiza mejor el código, sino que establece un contrato explícito (DTOs), validación en runtime y una arquitectura modular que facilita añadir nuevos endpoints, integrar servicios externos y escalar el equipo de desarrollo sin degradar la mantenibilidad.
