# Especificaciones de Presentación Directiva: Cotizador K2

Este documento contiene el guion, la estructura visual y el contenido exacto para generar tu presentación en herramientas como PowerPoint, Google Slides, Canva, Gamma.app o Tome.

---

## 🎨 Guía de Estilos Global (Design System)
Para mantener un aspecto corporativo, tecnológico y formal (acorde al sector seguridad):
- **Fondo (Background):** Modo oscuro premium. Color principal Azul Marino Profundo (`#0f172a`) con un degradado radial sutil hacia el centro (`#1e293b`).
- **Colores de Acento (Accents):** Dorado/Amarillo Seguridad (`#f59e0b`) para destacar números clave, botones o iconos principales. Verde esmeralda (`#10b981`) para métricas positivas o ahorros.
- **Tipografía (Fonts):** 
  - *Títulos:* **Inter** o **Roboto** (Grosor Bold / 700) en color blanco (`#ffffff`).
  - *Cuerpo de texto:* **Inter** (Grosor Regular / 400) en gris claro (`#cbd5e1`).
- **Estilo Visual:** *Glassmorphism* (cajas con fondos semi-transparentes blancos al 10% de opacidad y bordes muy finos) para las tarjetas de información.

---

## 🖥️ Slide 1: El Reto y la Solución Desarrollada

**Título de la Diapositiva:** Transformación Comercial: Cotizador K2
**Subtítulo:** Velocidad, Precisión y Autonomía para el Equipo de Ventas

**Layout Sugerido:** División 50/50. Izquierda texto y viñetas, derecha un Mockup (imagen).
**Idea de Imagen (Derecha):** Un mockup de una laptop o tablet mostrando la interfaz limpia del cotizador (fondo oscuro, botones dorados). *Sugerencia: Puedes tomar una captura de pantalla real del `index.html` que generamos.*

**Contenido (Izquierda - Viñetas):**
- **El Problema:** Cotizaciones manuales lentas, propensas a errores de cálculo humano y con formatos inconsistentes.
- **La Solución (MVP):** Una aplicación web de cálculo instantáneo (Single Page Application).
- **Características Clave:**
  - ⚡ *Fricción Cero:* Accesible desde cualquier navegador, sin instalación ni dependencias.
  - 🧮 *Precisión Absoluta:* Motor de cálculo en JavaScript que procesa las reglas de negocio en milisegundos (recargos nocturnos, riesgo, domingos).
  - 📄 *Salida Profesional:* Generación nativa de PDF con diseño corporativo listo para enviar al cliente.

**Iconos a usar:** Un rayo (⚡) para velocidad, un escudo (🛡️) para seguridad/consistencia, un engranaje (⚙️) para el motor de cálculo.

---

## 🏗️ Slide 2: Arquitectura y Decisiones de Negocio

**Título de la Diapositiva:** Arquitectura Tecnológica y Decisiones Clave
**Subtítulo:** Eficiencia y escalabilidad desde el Día 1

**Layout Sugerido:** Diagrama de bloques al centro o tres columnas de tarjetas (Cards).

**Contenido (Tarjetas/Columnas):**

1. **Arquitectura Elegida (Front-end Nativo)**
   - *Tecnologías:* HTML5, CSS3, Vanilla JavaScript.
   - *Por qué:* Elimina costos de servidores backend. Permite alojamiento gratuito (Zero Maintenance) en GitHub Pages. Asegura carga inmediata incluso en conexiones móviles lentas.

2. **Decisiones de Diseño (UI/UX)**
   - *Enfoque:* Diseño corporativo *Dark Mode* con estética *Premium*.
   - *Razón:* Transmite seriedad y modernidad al vendedor frente al cliente. Interfaz anti-distracciones que guía al usuario paso a paso (Variables -> Modificadores -> Resultado).

3. **Intervención Estratégica (Uso de IA)**
   - *El aporte de la IA:* Maquetación de la interfaz gráfica y construcción del algoritmo matemático.
   - *Intervención Humana:* Refinamiento de la lógica de negocio para evitar ambigüedades (ej. parametrizar "horas nocturnas exactas" en lugar de "turnos genéricos") asegurando que la facturación sea 100% auditable.

**Idea Gráfica:** Un pequeño gráfico circular o de flujo mostrando: `Inputs (Vendedor) -> Motor JS (Cálculo) -> Output (PDF/Impresión)`.

---

## 🚀 Slide 3: Roadmap y Visión a Futuro (Versión 2.0)

**Título de la Diapositiva:** El Siguiente Nivel: Hacia la Versión 2.0
**Subtítulo:** Escalabilidad, Datos y Centralización

**Layout Sugerido:** Grilla de 4 cuadrantes (2x2) con un icono representativo en cada uno.

**Contenido (Cuadrantes):**

- **[Icono de Nube/Base de Datos] Centralización (BaaS):** 
  Integración con bases de datos en la nube como **Supabase** o **Firebase**. 
  *Beneficio:* Guardar el historial en tiempo real, permitiendo trazar qué vendedor genera más cotizaciones y cuáles se cierran.

- **[Icono de Campana/Mail] Notificaciones y Flujos Automatizados:** 
  Integración con APIs de correo (ej. SendGrid). 
  *Beneficio:* Envío del PDF generado directamente desde la plataforma al correo del cliente y al gerente comercial con un solo clic.

- **[Icono de Excel/Gráfico] Exportación e Inteligencia de Negocio:** 
  Generación de reportes en Excel/CSV. 
  *Beneficio:* Integración fluida de la data de ventas con los sistemas contables actuales (ERP) de la compañía.

- **[Icono de Tuerca/Candado] Panel de Administración (Backoffice):** 
  Una vista segura mediante Login para gerentes.
  *Beneficio:* Capacidad de actualizar los colores corporativos, tarifas base (ej. subir la tarifa de S/18 a S/20) y porcentajes de descuento sin depender de desarrolladores ni tocar código fuente.

**Idea Gráfica (Fondo o Centro):** Una flecha ascendente o un *roadmap* de línea de tiempo apuntando hacia la "Fase 2".

---

*(Puedes copiar y pegar este texto directamente en Gamma.app o Tome.app y la Inteligencia Artificial de esas plataformas te generará las diapositivas con el diseño exacto que he detallado).*
