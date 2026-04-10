# Browser Travel Solutions - Frontend (Rental Test)

Este es un proyecto de prueba técnica para Browser Travel Solutions, hecho con Next.js, React, TypeScript, Redux y TailwindCSS.

La aplicación simula un flujo básico de alquiler de vehículos, desde la búsqueda hasta la confirmación final.

---

## Flujo de la aplicación

1. **Búsqueda**
El usuario puede buscar vehículos disponibles según criterios básicos.

2. **Visualización de resultados**
Se muestra un listado de vehículos con información relevante.

3. **Selección de vehículo**
El usuario puede elegir un vehículo para continuar el proceso.

4. **Resumen final**
Se muestra un resumen final con los datos del vehículo seleccionado.

---

## Cómo ejecutar el proyecto

Requisitos: Node.js 18 o superior.

1. Instala dependencias:

``` bash
npm install
```

2. Inicia el proyecto en desarrollo:

``` bash
npm run dev
```

3. Abre en el navegador:

``` bash
http://localhost:3000
```

4. (Opcional) Build de producción:

``` bash
npm run build && npm run start
```

---

## Arquitectura del Proyecto

El proyecto está organizado para mantener el código ordenado y fácil de escalar:

```text
modules/
 └── vehicles/
      ├── domain/           # Entidades (Vehicle, Models) y Puertos (Interfaces Repository)
      ├── application/      # Casos de uso específicos (Ej. ObtenerVehiculosUseCase)
      ├── infrastructure/   # Implementaciones reales/mocks (Ej. API Repository)
      └── presentation/     # Componentes visuales, Redux Store de domino y Slices
```

- **Domain:** Completamente agnóstico a dependencias externas.
- **Application:** Reglas y casos de uso, se encarga de usar el Dominio e invocar los adaptadores.
- **Infrastructure:** Punto de conexión con el "mundo real" (APIs ext, librerías, Bases de Datos). Provee al app un Mock Repository (`mock-vehicles.repository.impl.ts`).
- **Presentation:** Punto en donde React JS y los Hooks hacen sus tareas.

---

## Decisiones Técnicas

A continuación se explican algunas de las decisiones de stack más importantes de este proyecto técnico:

- Se usa **Next.js (App Router)** para optimizar rutas y renderizar rápidamente.
- **Redux Toolkit** para manejar el estado global de la app.
- **TailwindCSS**  para estilos rápidos y consistentes.
- Se trabaja con datos mockeados, pero la estructura permite conectar una API real fácilmente.
- El código está separado por responsabilidades para hacerlo más fácil de mantener.

---

## Integración con Pasarela de Pago (Conceptual)

Para integrar una pasarela de pagos en el tiempo futuro (por ejemplo: **Stripe**, **PayPal** o **MercadoPago**) respetando y exaltando esta arquitectura, la implementación (sin ver ni usar código en UI) iría de la siguiente forma:

Para integrar una pasarela de pago (como Stripe, PayPal o MercadoPago), el flujo se conectaría en el paso de confirmación del alquiler.

La aplicación enviaría la intención de pago desde el frontend a un servicio encargado de procesar pagos. Este servicio se comunicaría con la pasarela elegida y devolvería un resultado de éxito o error.

Según la respuesta:

* Si el pago es exitoso, se continúa al resumen final del alquiler.
* Si el pago falla, se muestra un mensaje de error y se permite reintentar.

La aplicación está pensada para que la pasarela de pago sea intercambiable sin afectar la interfaz ni el flujo principal del usuario

---

## Posibles Mejoras A Futuro

- Agregar pruebas automáticas (unit tests).
- Mantener datos entre recargas de página.
- Mejorar filtros y parámetros en la URL.

---

##  Autor

Prueba técnica analizada, estructurada y desarrollada por: 
[Gabriel Cervantes](https://www.linkedin.com/in/gabriel-cervantes-hurtado).
