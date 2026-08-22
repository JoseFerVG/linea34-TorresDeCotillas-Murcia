# 🚌 Movibus Línea 34 - Las Torres de Cotillas / Murcia

[![PWA Ready](https://img.shields.io/badge/PWA-100%25%20Offline-success?style=flat-square&color=bde74e&labelColor=04362d)](https://github.com/)
[![Región de Murcia](https://img.shields.io/badge/Movibus-Regi%C3%B3n%20de%20Murcia-06483c?style=flat-square)](https://www.interbusmurcia.es)
[![Versión](https://img.shields.io/badge/Horarios%20Oficiales-Versi%C3%B3n%202-0a5c4e?style=flat-square)](./linea-34-version-2.pdf)

Aplicación web progresiva (**PWA**) mobile-first, diseñada con la identidad gráfica oficial de **Movibus (Región de Murcia)** para consultar los horarios, el próximo autobús en tiempo real y el recorrido completo de la **Línea 34: Las Torres de Cotillas – Murcia**.

---

## ✨ Características Principales

* ⏱️ **Próximo Autobús & Cuenta Atrás en Tiempo Real:** Cálculo automático de la siguiente salida y tiempo restante exacto en función de la hora y el día actual.
* 🔄 **Cambio Rápido de Sentido:**
  * **Ida:** *Las Torres de Cotillas ➔ Murcia*
  * **Vuelta:** *Murcia ➔ Las Torres de Cotillas*
* 🧭 **Planificador de Trayecto:** Selecciona tu parada de origen y destino para calcular la duración exacta del viaje, paradas intermedias y hora estimada de llegada.
* 📍 **Estimación por Parada & Favoritas:** Calcula el paso estimado en cualquiera de las 22 paradas de la línea con opción de guardar tu parada habitual.
* 🚍 **Rastreador de Autobús en Ruta (*Live In-Transit*):** Visualización del progreso del autobús activo sobre la línea y mapa.
* 🗺️ **Mapa Interactivo (Leaflet & OpenStreetMap):** Traza completa del recorrido y botón de *Localizar mi parada más cercana* por GPS.
* 🔔 **Sistema de Alarmas con Tono Acústico:** Avisos acústicos y notificaciones a 5, 10, 15 o 30 minutos antes de la salida.
* 🎫 **Guía de Tarifas y Bonos:** Información sobre billete sencillo, Bono 10 con descuento del 60%, Unibono Estudiante y Familias Numerosas.
* 📲 **100% Offline (PWA):** Instalable en la pantalla de inicio de Android e iOS sin necesidad de conexión a internet constante.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico & Accesibilidad (WCAG AAA)**
* **CSS3 Moderno:** Variables CSS, diseño responsive mobile-first, soporte *Safe-Area* para notches e islas dinámicas, y modo claro/oscuro.
* **JavaScript ES6+ Reactivo:** Motor de cálculo horario en cliente sin dependencias pesadas.
* **Web Audio API:** Tono acústico sintetizado para avisos.
* **Leaflet.js & CARTO Voyager:** Mapas vectoriales de alta resolución.
* **Service Worker & Web App Manifest:** Soporte PWA offline.

---

## 📄 Fuente Oficial de Datos

Horarios y paradas extraídos del documento oficial de transporte interurbano de la Dirección General de Movilidad y Litoral de la Región de Murcia (*Versión 2 - 01/septiembre/2022*), operado por **Interbus Murcia**.
