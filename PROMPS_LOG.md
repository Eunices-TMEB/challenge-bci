## Fase 1: Node/Express
**Objetivo:** Inicialización de servidor y endpoint GET.
**Prompt:** Actúa como un Senior Full Stack Engineer. Crea un proyecto Node.js con Express y TypeScript desde cero en este directorio. Configura ⁠tsconfig.json⁠ para un entorno Node moderno.
Estructura el proyecto en carpetas: ⁠src/controllers⁠, ⁠src/services⁠, ⁠src/interfaces⁠. Define una interfaz ⁠Element⁠ con: { id: number, name: string, type: string, value: number }.
Crea un servicio que devuelva un array estático de objetos ⁠Element⁠. Crea un controlador que use este servicio y exponga el endpoint ⁠GET /api/v1/elements⁠. Asegúrate de incluir los paquetes necesarios en ⁠package.json⁠ y configura un script de inicio usando ⁠ts-node-dev⁠ o ⁠nodemon⁠.
**Resultado:** API REST funcional en la raíz del workspace con datos estáticos de elementos y CORS para Angular.

## Fase 2: Angular
**Objetivo:** Consumo de datos y UI.
**Prompt:** Crea un proyecto Angular v18+ usando Standalone Components. Crea un servicio ⁠ElementService⁠ usando ⁠HttpClient⁠ que apunte a ⁠http://localhost:3001/api/v1/elements⁠ (configura ⁠provideHttpClient()⁠ en ⁠app.config.ts⁠). Crea un componente ⁠TableComponent⁠ para listar los elementos. En el componente: utiliza ⁠inject(ElementService)⁠ para obtener los datos. Usa un ⁠Signal⁠ o ⁠Observable⁠ con el pipe ⁠async⁠ para gestionar el estado. Renderiza los datos en una tabla HTML básica. Añade un manejo de errores básico para el servicio y un estado de 'loading'.
Asegúrate de configurar CORS en el backend de Express para permitir peticiones desde ⁠http://localhost:4200⁠.
**Resultado:** Frontend en `frontend/` que consume la API y muestra los elementos en una tabla con estados de loading y error.

## Fase 3: NestJS
**Objetivo:** Migración a BFF y DTOs.
**Prompt:** Actúa como un Senior Backend Engineer. Crea un proyecto NestJS en este directorio que actúe como un BFF (Backend For Frontend). Genera un módulo llamado ⁠elements⁠ (controller, service, module). Define una interfaz o clase ⁠ElementDTO⁠ para el modelo de datos. En el servicio, implementa el mismo array de elementos que tenías en Express, pero asegúrate de tiparlo correctamente usando ⁠ElementDTO⁠. Implementa el endpoint ⁠GET /api/v1/elements⁠ en el controlador. Añade ⁠ValidationPipe⁠ en ⁠main.ts⁠ y asegúrate de que el módulo sea altamente modular.
Explica cómo este enfoque de NestJS mejora la escalabilidad frente al Express inicial.
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
