```markdown
# README.md para Organizador de Tareas Diarias

# Organizador de Tareas Diarias Interactivo

## Autor

* **Nombre:** Isai Guilbert Gordillo
* **GitHub:** [https://github.com/Isai1622](https://github.com/Isai1622)
* **Accede mediante este link: https://organizador-de-tareas-diarias-html-css-js.vercel.app

## Descripción del Proyecto

Este "Organizador de Tareas Diarias" es una aplicación web frontend diseñada para ayudar a los usuarios a gestionar sus actividades y quehaceres de manera eficiente. Permite añadir nuevas tareas, especificar fechas límite opcionales, marcarlas como completadas, filtrarlas y eliminarlas. Toda la información se almacena localmente en el navegador del usuario utilizando la API `localStorage`, lo que significa que no se requiere un backend o conexión a internet para su funcionamiento básico una vez cargada la página.

El proyecto está construido con HTML5 semántico, estilizado con Tailwind CSS para un diseño moderno y responsivo, y la lógica interactiva está implementada con JavaScript (ES6+). Es una demostración práctica de habilidades de desarrollo frontend, ideal para un portafolio.

## Características Principales

* **Añadir Tareas:** Formulario simple para ingresar el texto de la tarea y una fecha límite opcional.
* **Visualización Clara:** Las tareas se muestran en una lista fácil de leer.
* **Marcar como Completada/Pendiente:** Con un solo clic se puede cambiar el estado de una tarea, lo que se refleja visualmente (texto tachado, cambio de color).
* **Eliminar Tareas:** Opción para eliminar tareas individualmente.
* **Filtrar Tareas:** Se pueden visualizar todas las tareas, solo las pendientes o solo las completadas.
* **Indicador de Fechas Vencidas:** Las tareas pendientes con fecha límite pasada se resaltan.
* **Persistencia de Datos:** Las tareas se guardan en `localStorage` del navegador, por lo que persisten incluso después de cerrar la pestaña o el navegador.
* **Limpiar Todas las Tareas:** Opción para eliminar todas las tareas con un modal de confirmación.
* **Diseño Responsivo:** La interfaz se adapta a diferentes tamaños de pantalla (móvil, tablet, escritorio) gracias a Tailwind CSS.
* **Interfaz Atractiva:** Uso de iconos (Font Awesome) y un esquema de colores moderno para una experiencia de usuario agradable.

## Lenguajes y Tecnologías Utilizadas

* **HTML5:** Para la estructura semántica de la aplicación.
* **CSS3:**
    * **Tailwind CSS:** Framework CSS de utilidad para un desarrollo rápido y responsivo (cargado vía CDN).
* **JavaScript (ES6+):** Para toda la lógica de la aplicación, manipulación del DOM e interacción con `localStorage`.
* **Font Awesome:** Para los iconos (cargado vía CDN).
* **Google Fonts ('Inter'):** Para la tipografía principal.

## Cómo Utilizar / Ejecutar

1.  **Descargar los Archivos:**
    * Guarda los archivos `index.html` y `script.js` en una misma carpeta en tu computadora.
2.  **Abrir en el Navegador:**
    * Simplemente abre el archivo `index.html` con tu navegador web preferido (Google Chrome, Firefox, Edge, Safari, etc.).
    * No se requiere ningún servidor web local ni pasos de compilación, ya que es una aplicación puramente frontend.

## Estructura del Proyecto

* `index.html`: Contiene la estructura HTML de la página y enlaza los estilos de Tailwind CSS, Font Awesome, Google Fonts y el archivo JavaScript.
* `script.js`: Contiene todo el código JavaScript que maneja la lógica de la aplicación (añadir, mostrar, completar, eliminar tareas, filtros y `localStorage`).
* `README.md`: Este archivo de documentación.

## Posibles Mejoras Futuras

* **Edición de Tareas:** Permitir modificar el texto o la fecha de una tarea existente.
* **Prioridades de Tareas:** Añadir un sistema para marcar tareas con diferentes niveles de prioridad (alta, media, baja).
* **Sub-tareas:** Posibilidad de anidar tareas.
* **Recordatorios/Notificaciones:** Integrar notificaciones del navegador para fechas límite (requeriría permisos del usuario).
* **Drag and Drop:** Para reordenar tareas.
* **Temas/Personalización:** Permitir al usuario cambiar el esquema de colores.
* **Sincronización (Backend):** Para una versión más avanzada, se podría añadir un backend para sincronizar tareas entre dispositivos.
* **Mejoras en Accesibilidad (a11y):** Revisión y optimización para asegurar una mejor experiencia para usuarios con tecnologías de asistencia.
