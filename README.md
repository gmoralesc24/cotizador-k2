# Cotizador Comercial - K2 Seguridad y Resguardo

Bienvenido al repositorio del Cotizador Web de K2 Seguridad y Resguardo. Esta es una solución desarrollada para agilizar el proceso de cotización por parte del equipo comercial, garantizando consistencia, precisión y rapidez en el cálculo de las tarifas y recargos aplicables.

## 🚀 Enlaces del Proyecto

- **Repositorio en GitHub:** [https://github.com/gmoralesc24/cotizador-k2](https://github.com/gmoralesc24/cotizador-k2)
- **Aplicación en Producción (GitHub Pages):** [https://gmoralesc24.github.io/cotizador-k2/](https://gmoralesc24.github.io/cotizador-k2/)

## 🏗️ Arquitectura y Tecnologías Utilizadas

Para esta versión (MVP), se tomó la decisión estratégica de utilizar tecnologías web nativas, logrando una **Single Page Application (SPA) ultra rápida y sin dependencias**.

*   **HTML5 Semántico:** Para la estructura de la aplicación y el formulario.
*   **Vanilla CSS (CSS Puro):** Diseño corporativo premium implementado desde cero, sin frameworks como Bootstrap o Tailwind. Se utilizaron técnicas modernas como:
    *   *Glassmorphism:* Paneles translúcidos con desenfoque de fondo.
    *   *CSS Variables:* Para facilitar el manejo de la paleta de colores de la marca K2 (Azul oscuro `#0f172a` y Dorado `#f59e0b`).
    *   *Print Media Queries (`@media print`):* Para limpiar la interfaz al momento de generar el PDF nativo, ocultando botones y ajustando los márgenes.
*   **Vanilla JavaScript (ES6+):** Lógica de negocio interactiva ejecutada 100% en el lado del cliente (Navegador). Esto garantiza que no hay tiempos de carga ni necesidad de un servidor backend, logrando una solución "offline-ready" una vez cargada.

## 💼 Reglas de Negocio Implementadas

El sistema calcula los montos basándose en las siguientes reglas parametrizables:

1.  **Tarifas Base:**
    *   Servicio 1: Vigilancia -> S/. 18.00 / hora-hombre.
    *   Servicio 2: Resguardo -> S/. 35.00 / hora-hombre.
    *   *Restricción:* Mínimo 2 agentes por puesto.
2.  **Modificadores (Surcharges):**
    *   **Nocturno:** +25% sobre el valor de las horas que caen en rango de 10pm a 6am.
    *   **Dominical / Feriado:** +35% sobre el total de horas de los días marcados como domingo/feriado.
    *   **Riesgo Alto:** +15% de recargo sobre el subtotal acumulado (Base + Tiempo).
    *   **Armado:** Costo adicional de S/ 800.00 mensuales por cada agente armado.
3.  **Descuentos (Fidelización):**
    *   3 a 6 meses de contrato: -5%.
    *   7 a 12 meses de contrato: -10%.
    *   Más de 12 meses: -15%.
4.  **Impuestos:**
    *   Cálculo del 18% (IGV) obligatorio sobre el Subtotal Neto.

## 🧠 Respuestas Técnicas y de Negocio (Para Dirección/CEO)

**1. ¿Qué decidiste construir y por qué esa forma (web, etc)?**
Decidí construir una aplicación web estática (SPA) utilizando Vanilla JS/CSS.
*   *Negocio:* Permite a los vendedores abrir el cotizador desde cualquier tablet o laptop con acceso al navegador, sin instalar nada.
*   *Tecnología:* Al no usar dependencias pesadas, la web carga en milisegundos, funciona sin servidores de procesamiento backend (reduciendo el costo de infraestructura a $0) y facilita el alojamiento en GitHub Pages.

**2. ¿Qué dejaste fuera del scope y por qué?**
*   *Autenticación (Login) y Base de Datos (Historial en la nube):* En un Producto Mínimo Viable (MVP), el objetivo es validar que el algoritmo calcula correctamente y que los comerciales adoptan la herramienta. Invertir en infraestructura backend ahora sería prematuro.
*   *Envío automático de correos:* Generar el PDF y que el vendedor lo envíe manualmente mantiene el toque personal/humano en la venta corporativa de seguridad.

**3. ¿Cómo usaste IA durante el reto? ¿Dónde te ayudó y dónde tuviste que intervenir?**
*   *Asistencia de la IA:* Diseñó la interfaz corporativa (CSS Glassmorphism), maquetó el HTML y tradujo las reglas de negocio complejas a funciones matemáticas limpias en JavaScript.
*   *Intervención del Developer:* Tuve que refinar la experiencia de usuario en el formulario. Por ejemplo, en lugar de pedir un "Turno nocturno" abstracto, decidí que el formulario pida exactamente: *"Horas nocturnas por turno"*. Esto elimina la ambigüedad y permite que el cálculo matemático sea matemáticamente preciso. También intervine tomando la decisión de cambiar de React (originalmente planeado) a Vanilla JS tras evaluar las restricciones del entorno local (falta de Node.js).

**4. Si tuvieras una semana más, ¿qué construirías para una versión 2?**
*   *Integración con BaaS (Backend as a Service):* Usaría **Supabase** o Firebase para guardar un historial centralizado de todas las cotizaciones.
*   *Dashboard de Analytics:* Para que gerencia sepa cuántas cotizaciones se emiten vs. se cierran.
*   *Panel de Administración:* Una vista segura para que Operaciones pueda modificar las tarifas base (S/.18 a S/.20) desde un panel gráfico, sin tocar código fuente.
*   *Exportación a Excel / CSV:* Para integrar las cotizaciones con los sistemas contables actuales de la empresa.

---
*Desarrollado y estructurado mediante técnicas avanzadas de IA.*
