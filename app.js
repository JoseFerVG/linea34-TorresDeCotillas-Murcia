/**
 * ==========================================================================
 * MOVIBUS LÍNEA 34 - LAS TORRES DE COTILLAS / MURCIA
 * High-End Mobile Application Engine (Production Grade)
 * 100% SVG Vector Icons & Production Transit Logic
 * ==========================================================================
 */

// ==========================================
// 1. SVG ICON SYSTEM (Zero Emojis, 100% Vectors)
// ==========================================

const SVG_ICONS = {
  bus: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/></svg>',
  clock: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.1.8-1.2-4.5-2.7V7z"/></svg>',
  pin: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
  pinTarget: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>',
  star: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>',
  starFilled: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
  calendar: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z"/></svg>',
  weekend: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>',
  sun: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>',
  bell: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>',
  building: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>',
  bolt: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>',
  compass: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.5-13.5l-6 2.5-2.5 6 6-2.5 2.5-6zm-4.5 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>',
  pdf: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zm4.5 2H15v-3h-1.5v3zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/></svg>',
  share: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>',
  swap: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>',
  warning: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',
  tip: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>',
  phone: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>',
  globe: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
  install: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4.2-5.79l1.79-1.79-1.41-1.41-2.18 2.18-1.18-1.18-1.41 1.41 2.59 2.59 1.8-1.8z"/></svg>',
  faq: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>',
  check: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
  arrowRight: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.71 11.99 12.85 3.14l-1.42 1.42L16.86 10H5v3z"/></svg>',
  caretDown: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>',
  close: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  moon: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>',
  map: '<svg class="svg-inline-icon" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>'
};

// ==========================================
// 2. TIMETABLE & STOP DATA (OFFICIAL PDF V2)
// ==========================================

const LINE_DATA = {
  id: '34',
  name: 'Torres de Cotillas – Murcia',
  operator: 'Interbus Murcia / Movibus Región de Murcia',
  phone: '618 640 733',
  website: 'https://www.interbusmurcia.es',
  version: 'Versión 2 (01/septiembre/2022)',
  pdfFile: 'linea-34-version-2.pdf',
  
  directions: {
    ida: {
      id: 'ida',
      name: 'Ida',
      origin: 'Las Torres de Cotillas',
      destination: 'Murcia',
      subtitle: 'Torres de Cotillas hacia Murcia',
      schedules: {
        laborables: [
          { time: '07:00', special: true, note: 'Pasa por Cabezo Cortado y Extranjería' },
          { time: '09:00', special: false },
          { time: '11:00', special: false },
          { time: '13:00', special: false },
          { time: '15:00', special: false },
          { time: '17:00', special: false },
          { time: '19:00', special: false }
        ],
        sabados: [
          { time: '07:00', special: false },
          { time: '11:00', special: false },
          { time: '15:00', special: false },
          { time: '19:00', special: false }
        ],
        festivos: [
          { time: '09:00', special: false },
          { time: '13:00', special: false },
          { time: '17:00', special: false },
          { time: '20:00', special: false }
        ]
      },
      stops: [
        { id: 'ida-1', name: 'La Florida 2 (Par)', town: 'Las Torres de Cotillas', offsetMin: 0, coords: [38.0380, -1.2492], isHeader: true, zone: 'Torres Centro' },
        { id: 'ida-2', name: 'La Florida 1 (Par)', town: 'Las Torres de Cotillas', offsetMin: 1, coords: [38.0348, -1.2486], zone: 'Torres Norte' },
        { id: 'ida-3', name: 'Gasolinera II', town: 'Las Torres de Cotillas', offsetMin: 3, coords: [38.0315, -1.2472], zone: 'Av. Juan Carlos I' },
        { id: 'ida-4', name: 'Calle Mula II', town: 'Las Torres de Cotillas', offsetMin: 5, coords: [38.0285, -1.2450], zone: 'Centro Urbano' },
        { id: 'ida-5', name: 'La Iglesia II', town: 'Las Torres de Cotillas', offsetMin: 7, coords: [38.0270, -1.2430], zone: 'Plaza Mayor' },
        { id: 'ida-6', name: 'Las Monjas II', town: 'Las Torres de Cotillas', offsetMin: 9, coords: [38.0245, -1.2415], zone: 'Las Monjas' },
        { id: 'ida-7', name: 'Intermarché II', town: 'Las Torres de Cotillas', offsetMin: 11, coords: [38.0220, -1.2380], zone: 'Zona Comercial' },
        { id: 'ida-8', name: 'Los Pulpites II', town: 'Las Torres de Cotillas', offsetMin: 13, coords: [38.0195, -1.2340], zone: 'Los Pulpites' },
        { id: 'ida-9', name: 'Parque de las Palmeras II', town: 'Las Torres de Cotillas', offsetMin: 15, coords: [38.0175, -1.2300], zone: 'Las Palmeras' },
        { id: 'ida-10', name: 'Media Legua II', town: 'Las Torres de Cotillas', offsetMin: 18, coords: [38.0135, -1.2180], zone: 'Media Legua' },
        { id: 'ida-11', name: 'Myrtea', town: 'Murcia (Espinardo)', offsetMin: 26, coords: [38.0162, -1.1610], landmark: 'Centro Comercial Myrtea / Espinardo' },
        { id: 'ida-12', name: 'Cabezo Cortado II', town: 'Murcia', offsetMin: 29, coords: [38.0215, -1.1475], specialOnly: true, note: 'Solo expedición 07:00 (Laborables)' },
        { id: 'ida-13', name: 'Extranjería II', town: 'Murcia', offsetMin: 31, coords: [38.0198, -1.1442], specialOnly: true, note: 'Solo expedición 07:00 (Laborables)' },
        { id: 'ida-14', name: 'Cruce del Puntal II', town: 'Murcia (El Puntal)', offsetMin: 33, coords: [38.0102, -1.1435], landmark: 'El Puntal / Juan Carlos I' },
        { id: 'ida-15', name: 'Nuevos Juzgados', town: 'Murcia', offsetMin: 35, coords: [38.0035, -1.1390], landmark: 'Ciudad de la Justicia / Ronda Norte' },
        { id: 'ida-16', name: 'Biblioteca-Pabellón II', town: 'Murcia', offsetMin: 37, coords: [37.9985, -1.1360], landmark: 'Biblioteca Regional / Pabellón P. Asturias' },
        { id: 'ida-17', name: 'Barnés II', town: 'Murcia', offsetMin: 39, coords: [37.9945, -1.1335], landmark: 'Polideportivo Barnés / Tranvía L1' },
        { id: 'ida-18', name: 'Primo de Rivera II', town: 'Murcia', offsetMin: 41, coords: [37.9912, -1.1348], landmark: 'Plaza Díez de Revenga' },
        { id: 'ida-19', name: 'San Antón II', town: 'Murcia', offsetMin: 43, coords: [37.9890, -1.1385], landmark: 'Barrio San Antón' },
        { id: 'ida-20', name: 'Plaza San Agustín', town: 'Murcia', offsetMin: 45, coords: [37.9875, -1.1392], landmark: 'San Andrés / C. de Jesús' },
        { id: 'ida-21', name: 'Jardín de Floridablanca (Cines)', town: 'Murcia (El Carmen)', offsetMin: 49, coords: [37.9795, -1.1302], landmark: 'Barrio del Carmen / Cines Rex' },
        { id: 'ida-22', name: 'Estación Murcia (Andén 10)', town: 'Murcia (San Andrés)', offsetMin: 52, coords: [37.9868, -1.1400], isTerminal: true, landmark: 'Estación Central de Autobuses' }
      ]
    },
    vuelta: {
      id: 'vuelta',
      name: 'Vuelta',
      origin: 'Murcia',
      destination: 'Las Torres de Cotillas',
      subtitle: 'Murcia hacia las Torres de Cotillas',
      schedules: {
        laborables: [
          { time: '08:00', special: true, note: 'Pasa por Cabezo Cortado y Extranjería' },
          { time: '10:00', special: false },
          { time: '12:00', special: false },
          { time: '14:00', special: true, note: 'Pasa por Cabezo Cortado y Extranjería' },
          { time: '16:00', special: false },
          { time: '18:00', special: false },
          { time: '21:00', special: false }
        ],
        sabados: [
          { time: '09:00', special: false },
          { time: '13:00', special: false },
          { time: '17:00', special: false },
          { time: '21:00', special: false }
        ],
        festivos: [
          { time: '11:00', special: false },
          { time: '15:00', special: false },
          { time: '19:00', special: false },
          { time: '21:00', special: false }
        ]
      },
      warning: 'La hora de paso por la parada del Jardín de Floridablanca, dirección Las Torres de Cotillas, será de aproximadamente 15 minutos antes de su hora de salida desde la Estación de Autobuses de Murcia.',
      stops: [
        { id: 'vue-1', name: 'Jardín de Floridablanca (Cines)', town: 'Murcia (El Carmen)', offsetMin: -15, coords: [37.9795, -1.1302], isEarlyPreStop: true, note: 'Paso aprox. 15 min antes de salir de Estación' },
        { id: 'vue-2', name: 'Estación Murcia (Andén 10)', town: 'Murcia (San Andrés)', offsetMin: 0, coords: [37.9868, -1.1400], isHeader: true, landmark: 'Salida Oficial Cabecera' },
        { id: 'vue-3', name: 'San Antón I', town: 'Murcia', offsetMin: 3, coords: [37.9892, -1.1382] },
        { id: 'vue-4', name: 'Primo de Rivera I', town: 'Murcia', offsetMin: 5, coords: [37.9915, -1.1345] },
        { id: 'vue-5', name: 'Plaza Circular, 14', town: 'Murcia', offsetMin: 8, coords: [37.9922, -1.1307], landmark: 'La Circular / Conexión Tranvía L1' },
        { id: 'vue-6', name: 'Barnés I', town: 'Murcia', offsetMin: 10, coords: [37.9948, -1.1332], landmark: 'Polideportivo Barnés' },
        { id: 'vue-7', name: 'Biblioteca-Pabellón I', town: 'Murcia', offsetMin: 12, coords: [37.9988, -1.1358], landmark: 'Biblioteca Regional' },
        { id: 'vue-8', name: 'Gasolinera la HITA', town: 'Murcia', offsetMin: 14, coords: [38.0040, -1.1395] },
        { id: 'vue-9', name: 'Cruce del Puntal I', town: 'Murcia (El Puntal)', offsetMin: 16, coords: [38.0105, -1.1432] },
        { id: 'vue-10', name: 'Extranjería I', town: 'Murcia', offsetMin: 19, coords: [38.0198, -1.1442], specialOnly: true, note: 'Solo 08:00 y 14:00 (Laborables)' },
        { id: 'vue-11', name: 'Cabezo Cortado II', town: 'Murcia', offsetMin: 21, coords: [38.0215, -1.1475], specialOnly: true, note: 'Solo 08:00 y 14:00 (Laborables)' },
        { id: 'vue-12', name: 'Gasolinera Petropay', town: 'Espinardo', offsetMin: 24, coords: [38.0150, -1.1680] },
        { id: 'vue-13', name: 'Media Legua I', town: 'Las Torres de Cotillas', offsetMin: 28, coords: [38.0135, -1.2175] },
        { id: 'vue-14', name: 'Parque de las Palmeras I', town: 'Las Torres de Cotillas', offsetMin: 31, coords: [38.0175, -1.2295] },
        { id: 'vue-15', name: 'Los Pulpites I', town: 'Las Torres de Cotillas', offsetMin: 33, coords: [38.0195, -1.2335] },
        { id: 'vue-16', name: 'Intermarché I', town: 'Las Torres de Cotillas', offsetMin: 35, coords: [38.0220, -1.2375] },
        { id: 'vue-17', name: 'Las Monjas I', town: 'Las Torres de Cotillas', offsetMin: 37, coords: [38.0245, -1.2410] },
        { id: 'vue-18', name: 'La Iglesia I', town: 'Las Torres de Cotillas', offsetMin: 39, coords: [38.0270, -1.2425] },
        { id: 'vue-19', name: 'Calle Mula I', town: 'Las Torres de Cotillas', offsetMin: 41, coords: [38.0285, -1.2445] },
        { id: 'vue-20', name: 'Gasolinera I', town: 'Las Torres de Cotillas', offsetMin: 43, coords: [38.0315, -1.2468] },
        { id: 'vue-21', name: 'La Florida 1 (Impar)', town: 'Las Torres de Cotillas', offsetMin: 45, coords: [38.0348, -1.2482] },
        { id: 'vue-22', name: 'La Florida 2 (Impar)', town: 'Las Torres de Cotillas', offsetMin: 47, coords: [38.0380, -1.2488], isTerminal: true }
      ]
    }
  }
};

// ==========================================
// 3. REACTIVE STATE
// ==========================================

const state = {
  currentDirection: localStorage.getItem('movibus_direction') || 'ida',
  selectedDayType: 'auto',
  selectedStopId: localStorage.getItem('movibus_fav_stop') || null,
  favoriteStopId: localStorage.getItem('movibus_fav_stop') || null,
  activeTab: 'horarios',
  isSimulating: false,
  simulatedTime: null,
  theme: localStorage.getItem('movibus_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  searchTerm: '',
  mapInstance: null,
  mapMarkers: [],
  mapPolyline: null,
  busMarker: null,
  plannerOrigin: null,
  plannerDest: null
};

// ==========================================
// 4. AUDIO SYSTEM (WEB AUDIO SYNTH CHIME)
// ==========================================

function playTransitChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    // Dual-tone Ding-Dong transit chime
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, ctx.currentTime);
    gain1.gain.setValueAtTime(0.2, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.6);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(880, ctx.currentTime + 0.2);
    gain2.gain.setValueAtTime(0.25, ctx.currentTime + 0.2);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(ctx.currentTime + 0.2);
    osc2.stop(ctx.currentTime + 0.9);

    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 150]);
    }
  } catch (e) {
    console.log('Audio chime not permitted without user gesture');
  }
}

// ==========================================
// 5. TIMING & ENGINE CALCULATIONS
// ==========================================

function getEffectiveDate() {
  if (state.isSimulating && state.simulatedTime) {
    const [h, m] = state.simulatedTime.split(':').map(Number);
    const d = new Date();
    d.setHours(h, m, 0, 0);
    return d;
  }
  return new Date();
}

function getActualDayType(date = new Date()) {
  const day = date.getDay();
  if (day === 0) return 'festivos';
  if (day === 6) return 'sabados';
  return 'laborables';
}

function getActiveDayType() {
  if (state.selectedDayType !== 'auto') {
    return state.selectedDayType;
  }
  return getActualDayType(getEffectiveDate());
}

function parseTimeToMinutes(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function formatMinutesToTime(totalMin) {
  let m = totalMin % 1440;
  if (m < 0) m += 1440;
  const hours = Math.floor(m / 60);
  const mins = m % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

function getDayTypeLabel(dayType) {
  switch (dayType) {
    case 'laborables': return 'Lunes a Viernes';
    case 'sabados': return 'Sábados';
    case 'festivos': return 'Domingos y Festivos';
    default: return 'Hoy';
  }
}

function calculateNextBusInfo() {
  const dir = LINE_DATA.directions[state.currentDirection];
  const now = getEffectiveDate();
  const currentMinutes = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
  const activeDayType = getActiveDayType();
  const scheduleList = dir.schedules[activeDayType] || [];

  const userStop = dir.stops.find(s => s.id === state.selectedStopId) || dir.stops[0];
  const stopOffset = userStop.offsetMin;

  let nextBus = null;
  let upcomingBuses = [];
  let inTransitBus = null;

  const totalRouteDuration = 52;

  for (let i = 0; i < scheduleList.length; i++) {
    const item = scheduleList[i];
    const depMinutes = parseTimeToMinutes(item.time);
    const stopPassMinutes = depMinutes + stopOffset;
    const diffMinutes = stopPassMinutes - currentMinutes;

    const elapsedSinceDeparture = currentMinutes - depMinutes;
    if (elapsedSinceDeparture >= 0 && elapsedSinceDeparture <= totalRouteDuration && !inTransitBus) {
      const progressRatio = Math.min(1, Math.max(0, elapsedSinceDeparture / totalRouteDuration));
      
      const nearestStop = dir.stops.reduce((prev, curr) => {
        return Math.abs(curr.offsetMin - elapsedSinceDeparture) < Math.abs(prev.offsetMin - elapsedSinceDeparture) ? curr : prev;
      }, dir.stops[0]);

      inTransitBus = {
        departureTime: item.time,
        elapsedMin: Math.floor(elapsedSinceDeparture),
        progressPercent: Math.round(progressRatio * 100),
        nearestStop: nearestStop,
        special: item.special
      };
    }

    if (diffMinutes >= 0) {
      if (!nextBus) {
        nextBus = {
          ...item,
          departureTime: item.time,
          stopEstimatedTime: formatMinutesToTime(stopPassMinutes),
          diffMinutes: diffMinutes,
          isToday: true,
          stop: userStop
        };
      } else {
        upcomingBuses.push({
          ...item,
          departureTime: item.time,
          stopEstimatedTime: formatMinutesToTime(stopPassMinutes),
          diffMinutes: diffMinutes
        });
      }
    }
  }

  let nextDayBus = null;
  if (!nextBus && scheduleList.length > 0) {
    const firstItem = scheduleList[0];
    const firstMinutes = parseTimeToMinutes(firstItem.time) + stopOffset;
    const diffUntilTomorrow = (1440 - currentMinutes) + firstMinutes;
    nextDayBus = {
      ...firstItem,
      departureTime: firstItem.time,
      stopEstimatedTime: formatMinutesToTime(firstMinutes),
      diffMinutes: diffUntilTomorrow,
      isTomorrow: true,
      stop: userStop
    };
  }

  return {
    currentMinutes,
    activeDayType,
    nextBus,
    nextDayBus,
    upcomingBuses,
    inTransitBus,
    userStop,
    scheduleList
  };
}

// ==========================================
// 6. DOM RENDERING
// ==========================================

function updateHeaderClock() {
  const clockEl = document.getElementById('live-clock-text');
  if (clockEl) {
    const now = getEffectiveDate();
    const timeStr = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clockEl.textContent = state.isSimulating ? `${timeStr} (Simulado)` : timeStr;
  }
}

function renderDirectionControls() {
  const btnIda = document.getElementById('btn-dir-ida');
  const btnVuelta = document.getElementById('btn-dir-vuelta');
  const routeTitle = document.getElementById('header-route-title');

  if (state.currentDirection === 'ida') {
    btnIda?.classList.add('active');
    btnVuelta?.classList.remove('active');
    if (routeTitle) routeTitle.innerHTML = `Torres de Cotillas <span style="color:var(--movibus-lime); margin:0 4px;">–</span> Murcia`;
  } else {
    btnVuelta?.classList.add('active');
    btnIda?.classList.remove('active');
    if (routeTitle) routeTitle.innerHTML = `Murcia <span style="color:var(--movibus-lime); margin:0 4px;">–</span> Torres de Cotillas`;
  }
}

function renderDayFilterPills() {
  const container = document.getElementById('day-pills-row');
  if (!container) return;

  const currentActual = getActualDayType(getEffectiveDate());
  const options = [
    { key: 'auto', label: `Hoy (${getDayTypeLabel(currentActual).split(' ')[0]})` },
    { key: 'laborables', label: 'Laborables (L-V)' },
    { key: 'sabados', label: 'Sábados' },
    { key: 'festivos', label: 'Dom / Festivos' }
  ];

  container.innerHTML = options.map(opt => `
    <button class="day-tab-pill ${state.selectedDayType === opt.key ? 'active' : ''}" data-day="${opt.key}">
      ${opt.label}
    </button>
  `).join('');

  container.querySelectorAll('.day-tab-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedDayType = btn.dataset.day;
      renderAll();
    });
  });
}

function renderHeroCard() {
  const heroCard = document.getElementById('hero-next-bus');
  if (!heroCard) return;

  const { nextBus, nextDayBus, upcomingBuses, inTransitBus, userStop } = calculateNextBusInfo();
  const dir = LINE_DATA.directions[state.currentDirection];

  const targetBus = nextBus || nextDayBus;

  let warningHtml = '';
  if (state.currentDirection === 'vuelta' && dir.warning) {
    warningHtml = `
      <div class="special-route-notice">
        ${SVG_ICONS.warning}
        <div>
          <strong>Aviso Floridablanca:</strong> El autobús pasa aprox. 15 minutos antes de su salida oficial en Estación de Autobuses.
        </div>
      </div>
    `;
  } else if (targetBus && targetBus.special && targetBus.note) {
    warningHtml = `
      <div class="special-route-notice">
        ${SVG_ICONS.building}
        <div><strong>Expedición especial:</strong> ${targetBus.note}</div>
      </div>
    `;
  }

  let inTransitHtml = '';
  if (inTransitBus) {
    inTransitHtml = `
      <div class="transit-progress-box">
        <div class="transit-progress-header">
          <span style="display:flex; align-items:center; gap:5px;">
            ${SVG_ICONS.bus} Bus en ruta (Salida ${inTransitBus.departureTime})
          </span>
          <span style="color: var(--movibus-primary); font-weight:800;">Aprox. cerca de ${inTransitBus.nearestStop.name}</span>
        </div>
        <div class="transit-bar-track">
          <div class="transit-bar-fill" style="width: ${inTransitBus.progressPercent}%;"></div>
        </div>
      </div>
    `;
  }

  if (targetBus) {
    const diffSecTotal = Math.max(0, Math.floor(targetBus.diffMinutes * 60));
    const diffHours = Math.floor(diffSecTotal / 3600);
    const diffMins = Math.floor((diffSecTotal % 3600) / 60);
    const diffSecs = diffSecTotal % 60;

    let countdownStr = '';
    if (diffHours > 0) {
      countdownStr = `${diffHours}h ${diffMins}m`;
    } else if (diffMins > 0) {
      countdownStr = `${diffMins} min ${String(diffSecs).padStart(2, '0')} s`;
    } else {
      countdownStr = `Saliendo (${diffSecs}s)`;
    }

    const isUrgent = diffMins < 10 && diffHours === 0;
    const badgeLabel = targetBus.isTomorrow 
      ? `${SVG_ICONS.moon} Mañana a primera hora` 
      : (isUrgent ? `${SVG_ICONS.bolt} SALIDA INMINENTE` : `${SVG_ICONS.clock} PRÓXIMA SALIDA`);

    let upcomingHtml = '';
    if (upcomingBuses.length > 0) {
      upcomingHtml = `
        <div class="hero-upcoming-container">
          <div class="upcoming-header-txt">Siguientes salidas programadas hoy</div>
          <div class="upcoming-cards-flex">
            ${upcomingBuses.map(b => `
              <div class="upcoming-mini-card ${b.special ? 'special-stop' : ''}" onclick="setAlarmForTime('${b.departureTime}')">
                <span class="time-val">${b.departureTime}</span>
                <span class="sub-val" style="display:flex; align-items:center; gap:2px;">
                  ${b.special ? `${SVG_ICONS.building} Extranjería` : `${SVG_ICONS.bolt} Directo`}
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (targetBus.isTomorrow) {
      upcomingHtml = `
        <div class="hero-upcoming-container">
          <div class="upcoming-header-txt" style="color: var(--text-muted);">No quedan más salidas por hoy. Primera salida de mañana: <strong>${targetBus.departureTime}</strong></div>
        </div>
      `;
    }

    const isFav = state.favoriteStopId === userStop.id;

    heroCard.className = `hero-bus-card ${isUrgent ? 'has-urgent-departure' : ''}`;
    heroCard.innerHTML = `
      <div class="hero-card-header">
        <span class="hero-status-pill ${targetBus.isTomorrow ? 'offline' : ''}">${badgeLabel}</span>
        <span class="hero-day-indicator">
          ${SVG_ICONS.calendar}
          ${getDayTypeLabel(getActiveDayType())}
        </span>
      </div>

      <div class="hero-main-row">
        <div>
          <div class="hero-time-big">${targetBus.departureTime}</div>
          <div class="hero-origin-info">
            Salida oficial desde: <strong>${dir.origin}</strong>
          </div>
        </div>

        <div class="hero-countdown-box">
          <div class="countdown-badge-pill">
            <span class="countdown-accent">${countdownStr}</span>
          </div>
          <div class="countdown-sub-label">Cuenta atrás en vivo</div>
        </div>
      </div>

      ${inTransitHtml}
      ${warningHtml}

      <div class="hero-stop-selector-box">
        <div class="stop-selector-header-row">
          <span class="stop-selector-title" style="display:flex; align-items:center; gap:4px;">
            ${SVG_ICONS.pin} Paso en tu parada:
          </span>
          <button class="btn-stop-action ${isFav ? 'is-fav' : ''}" id="btn-toggle-fav-hero">
            ${isFav ? SVG_ICONS.starFilled : SVG_ICONS.star}
            <span>${isFav ? 'Parada Habitual' : 'Guardar favorita'}</span>
          </button>
        </div>

        <div class="custom-select-container">
          <select class="custom-stop-select" id="hero-stop-select">
            ${dir.stops.map(s => `
              <option value="${s.id}" ${s.id === userStop.id ? 'selected' : ''}>
                ${s.name} (${s.town})
              </option>
            `).join('')}
          </select>
          <div class="select-caret-icon">${SVG_ICONS.caretDown}</div>
        </div>

        <div class="stop-arrival-result-row">
          <span class="arrival-tag-label">Hora estimada en <strong>${userStop.name}</strong>:</span>
          <span class="arrival-time-pill">~${targetBus.stopEstimatedTime}</span>
        </div>
      </div>

      ${upcomingHtml}
    `;

    document.getElementById('hero-stop-select')?.addEventListener('change', (e) => {
      state.selectedStopId = e.target.value;
      renderAll();
    });

    document.getElementById('btn-toggle-fav-hero')?.addEventListener('click', () => {
      toggleFavoriteStop(userStop.id);
    });

  } else {
    heroCard.innerHTML = `
      <div class="hero-card-header">
        <span class="hero-status-pill offline">Sin Salidas</span>
      </div>
      <div class="hero-time-big" style="font-size: 1.6rem; margin: 12px 0;">No hay salidas registradas</div>
    `;
  }
}

function renderTripPlanner() {
  const container = document.getElementById('trip-planner-container');
  if (!container) return;

  const dir = LINE_DATA.directions[state.currentDirection];
  const stops = dir.stops;

  if (!state.plannerOrigin) state.plannerOrigin = stops[0].id;
  if (!state.plannerDest) state.plannerDest = stops[stops.length - 1].id;

  const originStop = stops.find(s => s.id === state.plannerOrigin) || stops[0];
  const destStop = stops.find(s => s.id === state.plannerDest) || stops[stops.length - 1];

  const originIdx = stops.findIndex(s => s.id === originStop.id);
  const destIdx = stops.findIndex(s => s.id === destStop.id);

  let resultHtml = '';
  if (originIdx >= 0 && destIdx >= 0 && originIdx !== destIdx) {
    const isForward = originIdx < destIdx;
    const duration = Math.abs(destStop.offsetMin - originStop.offsetMin);
    const numStops = Math.abs(destIdx - originIdx);
    const { nextBus } = calculateNextBusInfo();
    const baseDep = nextBus ? nextBus.departureTime : '08:00';
    const depMinutes = parseTimeToMinutes(baseDep) + originStop.offsetMin;
    const arrMinutes = depMinutes + duration;

    resultHtml = `
      <div class="planner-result-box active">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span style="font-size:0.85rem; font-weight:800; color:var(--text-primary); display:flex; align-items:center; gap:5px;">
            ${SVG_ICONS.clock} Tiempo de trayecto: <strong>${duration} min</strong>
          </span>
          <span class="pdf-tri-badges" style="font-size:0.75rem;">${numStops} paradas</span>
        </div>

        <div style="font-size:0.82rem; color:var(--text-secondary); line-height:1.4;">
          ${isForward ? `
            • Subida en <strong>${originStop.name}</strong> a las <strong>~${formatMinutesToTime(depMinutes)}</strong><br>
            • Bajada en <strong>${destStop.name}</strong> a las <strong>~${formatMinutesToTime(arrMinutes)}</strong>
          ` : `
            <div style="display:flex; align-items:center; gap:4px; color:var(--status-warning-text);">
              ${SVG_ICONS.warning} Este trayecto corresponde al sentido contrario. Te sugerimos <button onclick="toggleDirection()" style="background:none; border:none; color:var(--movibus-primary); font-weight:800; text-decoration:underline; cursor:pointer;">cambiar de sentido</button>.
            </div>
          `}
        </div>

        <div style="margin-top:10px; display:flex; gap:8px;">
          <button class="btn-stop-action is-fav" onclick="shareTripDetails('${originStop.name}', '${destStop.name}', '${formatMinutesToTime(depMinutes)}', '${formatMinutesToTime(arrMinutes)}')">
            ${SVG_ICONS.share}
            <span>Compartir Itinerario</span>
          </button>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="trip-planner-card">
      <div class="planner-header-row">
        <div class="planner-title">
          ${SVG_ICONS.compass}
          <span>Planificador de Trayecto</span>
        </div>
        <button class="btn-stop-action" onclick="swapPlannerStops()">
          ${SVG_ICONS.swap}
          <span>Invertir</span>
        </button>
      </div>

      <div class="planner-inputs-grid">
        <div class="planner-field">
          <label class="planner-field-label">Origen</label>
          <div class="custom-select-container">
            <select class="custom-stop-select" id="planner-origin-select" style="padding:8px 28px 8px 10px; font-size:0.82rem;">
              ${stops.map(s => `
                <option value="${s.id}" ${s.id === originStop.id ? 'selected' : ''}>${s.name}</option>
              `).join('')}
            </select>
            <div class="select-caret-icon" style="right:8px; font-size:0.7rem;">${SVG_ICONS.caretDown}</div>
          </div>
        </div>

        <div style="font-size:1.1rem; color:var(--text-muted); text-align:center; display:flex; align-items:center; justify-content:center;">
          ${SVG_ICONS.arrowRight}
        </div>

        <div class="planner-field">
          <label class="planner-field-label">Destino</label>
          <div class="custom-select-container">
            <select class="custom-stop-select" id="planner-dest-select" style="padding:8px 28px 8px 10px; font-size:0.82rem;">
              ${stops.map(s => `
                <option value="${s.id}" ${s.id === destStop.id ? 'selected' : ''}>${s.name}</option>
              `).join('')}
            </select>
            <div class="select-caret-icon" style="right:8px; font-size:0.7rem;">${SVG_ICONS.caretDown}</div>
          </div>
        </div>
      </div>

      ${resultHtml}
    </div>
  `;

  document.getElementById('planner-origin-select')?.addEventListener('change', (e) => {
    state.plannerOrigin = e.target.value;
    renderTripPlanner();
  });

  document.getElementById('planner-dest-select')?.addEventListener('change', (e) => {
    state.plannerDest = e.target.value;
    renderTripPlanner();
  });
}

function swapPlannerStops() {
  const temp = state.plannerOrigin;
  state.plannerOrigin = state.plannerDest;
  state.plannerDest = temp;
  renderTripPlanner();
}

function shareTripDetails(origin, dest, depTime, arrTime) {
  const msg = `Movibus Línea 34: Saldré de ${origin} a las ~${depTime} y llegaré a ${dest} a las ~${arrTime}.`;
  if (navigator.share) {
    navigator.share({
      title: 'Itinerario Línea 34 Movibus',
      text: msg,
      url: window.location.href
    }).catch(() => {});
  } else {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  }
}

function renderScheduleTab() {
  const container = document.getElementById('tab-horarios-content');
  if (!container) return;

  const dir = LINE_DATA.directions[state.currentDirection];
  const activeDayType = getActiveDayType();
  const { nextBus } = calculateNextBusInfo();

  const sections = [
    { key: 'laborables', title: 'Lunes a Viernes (Laborables)', icon: SVG_ICONS.calendar },
    { key: 'sabados', title: 'Sábados', icon: SVG_ICONS.weekend },
    { key: 'festivos', title: 'Domingos y Festivos', icon: SVG_ICONS.sun }
  ];

  container.innerHTML = `
    <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
      <span style="font-size: 0.8rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">
        Salidas Oficiales desde ${dir.origin}
      </span>
      <a href="${LINE_DATA.pdfFile}" target="_blank" class="btn-stop-action" style="font-size:0.75rem;">
        ${SVG_ICONS.pdf}
        <span>Ver PDF Original</span>
      </a>
    </div>

    ${sections.map(sec => {
      const items = dir.schedules[sec.key] || [];
      const isCurrentSection = (activeDayType === sec.key);

      return `
        <div class="schedule-group-card ${isCurrentSection ? 'is-active-day' : ''}">
          <div class="group-title-row">
            <div class="group-title-txt">
              <span>${sec.icon}</span>
              <span>${sec.title}</span>
            </div>
            ${isCurrentSection ? '<span class="tri-badge" style="font-size: 0.65rem;">HOY ACTIVO</span>' : ''}
          </div>

          <div class="schedule-grid-layout">
            ${items.map(item => {
              const isThisNextBus = isCurrentSection && nextBus && nextBus.departureTime === item.time;

              return `
                <div class="schedule-card-item ${isThisNextBus ? 'is-current-next' : ''}" onclick="setAlarmForTime('${item.time}')">
                  ${isThisNextBus ? '<div class="sch-floating-pill">Próximo</div>' : ''}
                  <div class="sch-dep-time">${item.time}</div>
                  ${item.special ? `<div class="sch-special-badge" style="display:flex; align-items:center; gap:3px;">${SVG_ICONS.building} Extranjería</div>` : `<div style="font-size: 0.65rem; color: var(--text-muted); margin-top: 4px; display:flex; align-items:center; gap:2px;">${SVG_ICONS.bolt} Directo</div>`}
                  <button class="btn-sch-alarm" title="Avisar antes de salir">
                    ${SVG_ICONS.bell}
                    <span>Avisar</span>
                  </button>
                </div>
              `;
            }).join('')}
          </div>

          ${sec.key === 'laborables' ? `
            <div class="official-notice-callout">
              <strong>● Observaciones del PDF:</strong> ${state.currentDirection === 'ida' ? 'La expedición subrayada (07:00) pasa por las paradas de Cabezo Cortado y Extranjería.' : 'Las expediciones subrayadas (08:00 y 14:00) pasan por las paradas de Cabezo Cortado y Extranjería.'}
            </div>
          ` : ''}
        </div>
      `;
    }).join('')}

    ${dir.warning ? `
      <div class="official-notice-callout" style="border-left-color: #f59e0b; background: var(--status-warning-bg); margin-top: 14px;">
        <strong style="color: #b45309; display:flex; align-items:center; gap:4px;">
          ${SVG_ICONS.warning} ADVERTENCIA OFICIAL:
        </strong>
        <p style="color: #92400e; margin-top: 4px;">${dir.warning}</p>
      </div>
    ` : ''}
  `;
}

function renderStopsTab() {
  const container = document.getElementById('tab-paradas-content');
  if (!container) return;

  const dir = LINE_DATA.directions[state.currentDirection];
  const { nextBus } = calculateNextBusInfo();
  const search = state.searchTerm.toLowerCase().trim();

  const filteredStops = dir.stops.filter(s => {
    if (!search) return true;
    return s.name.toLowerCase().includes(search) || 
           s.town.toLowerCase().includes(search) || 
           (s.landmark && s.landmark.toLowerCase().includes(search));
  });

  const baseDepTime = nextBus ? nextBus.departureTime : '08:00';
  const baseMinutes = parseTimeToMinutes(baseDepTime);

  container.innerHTML = `
    <div class="search-filter-box">
      <svg class="search-field-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
      <input type="text" class="search-input-field" id="stops-search-input" placeholder="Buscar parada o zona (ej. Myrtea, Barnés, Monjas...)" value="${state.searchTerm}">
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding: 0 4px;">
      <span style="font-size: 0.78rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">
        ${filteredStops.length} Paradas en sentido ${dir.name}
      </span>
      <span style="font-size: 0.75rem; color: var(--movibus-primary); font-weight: 800;">
        Salida base: <strong>${baseDepTime}</strong>
      </span>
    </div>

    <div class="timeline-route-wrapper">
      ${filteredStops.map((stop, idx) => {
        const isUserSelected = stop.id === state.selectedStopId;
        const isCabecera = idx === 0 && !search;
        const isTermino = idx === filteredStops.length - 1 && !search;
        const passMin = baseMinutes + stop.offsetMin;
        const estimatedPassTime = formatMinutesToTime(passMin);
        const isFav = state.favoriteStopId === stop.id;

        return `
          <div class="timeline-row-item ${isCabecera ? 'is-cabecera' : ''} ${isTermino ? 'is-termino' : ''} ${isUserSelected ? 'is-user-selected' : ''}" data-stop-id="${stop.id}">
            <div class="timeline-circle-node">
              ${isCabecera ? 'A' : (isTermino ? 'B' : (idx + 1))}
            </div>

            <div class="timeline-text-content">
              <div class="timeline-name-row">
                <span class="timeline-stop-title">${stop.name}</span>
                <span class="timeline-eta-pill">~${estimatedPassTime}</span>
              </div>

              <div class="timeline-stop-subtitle">
                ${stop.town}${stop.landmark ? ` • ${stop.landmark}` : ''}
              </div>

              ${stop.note ? `<div class="sch-special-badge" style="display:inline-flex; align-items:center; gap:3px; margin-top:2px;">${SVG_ICONS.warning} ${stop.note}</div>` : ''}

              <div class="timeline-button-group">
                <button class="btn-stop-action ${isFav ? 'is-fav' : ''}" onclick="toggleFavoriteStop('${stop.id}')">
                  ${isFav ? SVG_ICONS.starFilled : SVG_ICONS.star}
                  <span>${isFav ? 'Favorita' : 'Guardar'}</span>
                </button>
                <button class="btn-stop-action" onclick="focusStopOnMap('${stop.id}')">
                  ${SVG_ICONS.map}
                  <span>Mapa</span>
                </button>
                <button class="btn-stop-action" onclick="selectStopAsActive('${stop.id}')">
                  ${SVG_ICONS.pin}
                  <span>Fijar en Inicio</span>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  const searchInput = document.getElementById('stops-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchTerm = e.target.value;
      renderStopsTab();
      const newInput = document.getElementById('stops-search-input');
      if (newInput) {
        newInput.focus();
        newInput.setSelectionRange(newInput.value.length, newInput.value.length);
      }
    });
  }
}

function renderInfoTab() {
  const container = document.getElementById('tab-info-content');
  if (!container) return;

  container.innerHTML = `
    <!-- INSTALL APP CARD -->
    <div class="info-section-card" style="border: 2px solid var(--movibus-lime); background: linear-gradient(145deg, var(--bg-card) 0%, var(--movibus-lime-soft) 100%);">
      <div class="group-title-txt" style="color: var(--movibus-dark);">
        ${SVG_ICONS.install}
        <span>Instalar App en tu Móvil (PWA)</span>
      </div>

      <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 10px 0 14px; line-height: 1.5;">
        Instala esta aplicación directamente en la pantalla de inicio de tu smartphone para acceder a los horarios al instante y consultarlos <strong>incluso sin conexión a internet ni cobertura</strong>.
      </p>

      <button onclick="triggerAppInstallModal()" class="contact-action-row" style="width:100%; background: var(--movibus-primary); color:#ffffff; border:none; cursor:pointer;">
        <div class="contact-left-block">
          <div class="contact-icon-circle" style="background: var(--movibus-lime); color: var(--movibus-dark);">
            ${SVG_ICONS.install}
          </div>
          <div style="text-align:left;">
            <div style="font-size: 0.95rem; font-weight: 800; color:#ffffff;">Instalar en este Dispositivo</div>
            <div style="font-size: 0.75rem; color: #d0ebe3;">Acceso directo rápido y sin descargas pesadas</div>
          </div>
        </div>
        <span style="font-size: 0.85rem; color: var(--movibus-lime); font-weight: 800;">Instalar →</span>
      </button>

      <div style="margin-top: 12px; font-size: 0.78rem; color: var(--text-secondary); line-height: 1.45;">
        <strong>Instrucciones según tu móvil:</strong><br>
        • <strong>Android (Chrome):</strong> Pulsa el botón de arriba o en el menú ⋮ selecciona <em>"Añadir a pantalla de inicio"</em>.<br>
        • <strong>iPhone / iOS (Safari):</strong> Pulsa el botón <strong>Compartir</strong> (icono de cuadrado con flecha hacia arriba) y elige <strong>"Añadir a la pantalla de inicio"</strong>.
      </div>

      <button onclick="checkForAppUpdates()" class="btn-stop-action is-fav" style="margin-top: 12px; width: 100%; justify-content: center; padding: 9px 14px; font-size: 0.8rem; font-weight:800; cursor:pointer;">
        ${SVG_ICONS.bolt}
        <span>Comprobar Actualizaciones en Vivo</span>
      </button>
    </div>

    <!-- CONTACT CARD -->
    <div class="info-section-card">
      <div class="group-title-txt">
        ${SVG_ICONS.phone}
        <span>Atención al Cliente e Información</span>
      </div>

      <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 10px 0 14px;">
        Servicio oficial operado por <strong>Interbus Murcia</strong> dentro de la red de transporte interurbano <strong>Movibus (Región de Murcia)</strong>.
      </p>

      <a href="tel:618640733" class="contact-action-row">
        <div class="contact-left-block">
          <div class="contact-icon-circle">
            ${SVG_ICONS.phone}
          </div>
          <div>
            <div style="font-size: 0.95rem; font-weight: 800;">618 640 733</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Teléfono de información y objetos perdidos</div>
          </div>
        </div>
        <span style="font-size: 0.85rem; color: var(--movibus-primary); font-weight: 800;">Llamar →</span>
      </a>

      <a href="https://www.interbusmurcia.es" target="_blank" rel="noopener noreferrer" class="contact-action-row">
        <div class="contact-left-block">
          <div class="contact-icon-circle" style="background: var(--movibus-lime); color: var(--movibus-dark);">
            ${SVG_ICONS.globe}
          </div>
          <div>
            <div style="font-size: 0.95rem; font-weight: 800;">interbusmurcia.es</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Portal web oficial Movibus</div>
          </div>
        </div>
        <span style="font-size: 0.85rem; color: var(--movibus-primary); font-weight: 800;">Visitar ↗</span>
      </a>

      <a href="${LINE_DATA.pdfFile}" download class="contact-action-row" style="margin-top:10px;">
        <div class="contact-left-block">
          <div class="contact-icon-circle" style="background: #e11d48; color: #fff;">
            ${SVG_ICONS.pdf}
          </div>
          <div>
            <div style="font-size: 0.95rem; font-weight: 800;">Descargar PDF Oficial</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Línea 34 - Versión 2 (PDF Original)</div>
          </div>
        </div>
        <span style="font-size: 0.85rem; color: var(--movibus-primary); font-weight: 800;">Bajar PDF ↓</span>
      </a>
    </div>

    <!-- FAQ Accordion -->
    <div class="info-section-card">
      <div class="group-title-txt" style="margin-bottom:12px;">
        ${SVG_ICONS.faq}
        <span>Preguntas Frecuentes</span>
      </div>

      <div class="faq-accordion-item">
        <button class="faq-question-btn" onclick="toggleFaq(this)">
          <span>¿Se puede pagar con tarjeta bancaria en el bus?</span>
          <span class="faq-caret">${SVG_ICONS.caretDown}</span>
        </button>
        <div class="faq-answer-txt">
          Sí, todos los autobuses de Movibus disponen de terminal de pago con tarjeta bancaria contactless y móvil.
        </div>
      </div>

      <div class="faq-accordion-item">
        <button class="faq-question-btn" onclick="toggleFaq(this)">
          <span>¿Dónde para en Murcia para enlazar con el Tranvía?</span>
          <span class="faq-caret">${SVG_ICONS.caretDown}</span>
        </button>
        <div class="faq-answer-txt">
          Puedes hacer trasbordo inmediato con la Línea 1 del Tranvía en las paradas de <strong>Plaza Circular</strong>, <strong>Barnés</strong> y <strong>Biblioteca Regional</strong>.
        </div>
      </div>

      <div class="faq-accordion-item">
        <button class="faq-question-btn" onclick="toggleFaq(this)">
          <span>¿Puedo viajar con bicicleta o patinete?</span>
          <span class="faq-caret">${SVG_ICONS.caretDown}</span>
        </button>
        <div class="faq-answer-txt">
          Los patinetes y bicicletas plegables pueden viajar en el maletero o espacio habilitado siempre que no comprometan la seguridad ni ocupen pasillos.
        </div>
      </div>
    </div>
  `;
}

function triggerAppInstallModal() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
    });
  } else {
    showToast('Para instalar: usa el menú de tu navegador "Añadir a pantalla de inicio"');
  }
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-accordion-item');
  if (item) {
    item.classList.toggle('open');
  }
}

// ==========================================
// 7. LEAFLET INTERACTIVE MAP
// ==========================================

function initMapIfNeeded() {
  const mapContainer = document.getElementById('leaflet-map');
  if (!mapContainer || typeof L === 'undefined') return;

  if (!state.mapInstance) {
    state.mapInstance = L.map('leaflet-map', {
      zoomControl: true,
      attributionControl: true
    }).setView([38.010, -1.190], 12);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap, © CARTO, Movibus'
    }).addTo(state.mapInstance);
  }

  renderMapRouteAndStops();
}

function renderMapRouteAndStops() {
  if (!state.mapInstance || typeof L === 'undefined') return;

  state.mapMarkers.forEach(m => state.mapInstance.removeLayer(m));
  state.mapMarkers = [];
  if (state.mapPolyline) {
    state.mapInstance.removeLayer(state.mapPolyline);
    state.mapPolyline = null;
  }
  if (state.busMarker) {
    state.mapInstance.removeLayer(state.busMarker);
    state.busMarker = null;
  }

  const dir = LINE_DATA.directions[state.currentDirection];
  const latLngs = [];

  const createMarkerIcon = (color, text) => {
    return L.divIcon({
      className: 'custom-map-icon',
      html: `<div style="background:${color}; width:28px; height:28px; border-radius:50%; border:2px solid #ffffff; display:flex; align-items:center; justify-content:center; color:#ffffff; font-weight:800; font-size:11px; box-shadow:0 4px 10px rgba(0,0,0,0.35);">${text}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });
  };

  dir.stops.forEach((stop, index) => {
    if (!stop.coords) return;
    latLngs.push(stop.coords);

    const isOrigin = index === 0;
    const isDest = index === dir.stops.length - 1;
    const isUserStop = stop.id === state.selectedStopId;

    let markerColor = '#06483c';
    let label = `${index + 1}`;
    if (isOrigin) { markerColor = '#04362d'; label = 'A'; }
    else if (isDest) { markerColor = '#b91c1c'; label = 'B'; }
    else if (isUserStop) { markerColor = '#bde74e'; label = 'P'; }

    const icon = createMarkerIcon(markerColor, label);
    const marker = L.marker(stop.coords, { icon: icon }).addTo(state.mapInstance);

    const popupContent = `
      <div style="font-family: inherit; font-size: 13px; min-width:180px;">
        <strong style="color: #06483c; font-size:14px;">${stop.name}</strong><br>
        <span style="color: #666;">${stop.town}</span><br>
        <div style="margin-top:6px; font-weight:700; color:#06483c; background:#f2fad9; padding:3px 8px; border-radius:4px;">
          Paso estimado: ~${stop.offsetMin >= 0 ? '+' : ''}${stop.offsetMin} min
        </div>
        <button onclick="selectStopAsActive('${stop.id}')" style="margin-top:8px; width:100%; background:#06483c; color:#fff; border:none; padding:4px 8px; border-radius:4px; font-size:11px; font-weight:700; cursor:pointer;">
          Seleccionar como mi parada
        </button>
      </div>
    `;
    marker.bindPopup(popupContent);
    state.mapMarkers.push(marker);
  });

  if (latLngs.length > 1) {
    state.mapPolyline = L.polyline(latLngs, {
      color: '#06483c',
      weight: 5,
      opacity: 0.9,
      dashArray: '6, 8',
      lineCap: 'round'
    }).addTo(state.mapInstance);

    state.mapInstance.fitBounds(state.mapPolyline.getBounds(), { padding: [30, 30] });

    const { inTransitBus } = calculateNextBusInfo();
    if (inTransitBus && inTransitBus.nearestStop && inTransitBus.nearestStop.coords) {
      const busIcon = L.divIcon({
        className: 'live-bus-map-icon',
        html: `<div style="background:#bde74e; width:34px; height:34px; border-radius:50%; border:3px solid #04362d; display:flex; align-items:center; justify-content:center; box-shadow:0 0 16px rgba(189,231,78,0.9); animation: pulse-glow 1.5s infinite;">${SVG_ICONS.bus}</div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });

      state.busMarker = L.marker(inTransitBus.nearestStop.coords, { icon: busIcon })
        .addTo(state.mapInstance)
        .bindPopup(`<strong>Autobús en Ruta</strong><br>Salida: ${inTransitBus.departureTime}<br>Cerca de: ${inTransitBus.nearestStop.name}`);
    }
  }
}

function focusStopOnMap(stopId) {
  switchTab('mapa');
  setTimeout(() => {
    if (!state.mapInstance) return;
    const dir = LINE_DATA.directions[state.currentDirection];
    const stop = dir.stops.find(s => s.id === stopId);
    if (stop && stop.coords) {
      state.mapInstance.setView(stop.coords, 16);
      const marker = state.mapMarkers.find((m, i) => dir.stops[i].id === stopId);
      if (marker) marker.openPopup();
    }
  }, 200);
}

function locateUserOnMap() {
  if (!navigator.geolocation) {
    showToast('Tu navegador no soporta geolocalización');
    return;
  }

  showToast('Localizando tu parada más cercana...');
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      if (!state.mapInstance) return;

      const userIcon = L.divIcon({
        className: 'user-loc-icon',
        html: `<div style="background:#2563eb; width:22px; height:22px; border-radius:50%; border:3px solid #ffffff; box-shadow:0 0 12px rgba(37,99,235,0.8);"></div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });

      L.marker([lat, lng], { icon: userIcon })
        .addTo(state.mapInstance)
        .bindPopup('<strong>Tu ubicación actual</strong>')
        .openPopup();

      const dir = LINE_DATA.directions[state.currentDirection];
      let closestStop = null;
      let minDistance = Infinity;

      dir.stops.forEach(s => {
        if (!s.coords) return;
        const dLat = (s.coords[0] - lat) * 111.32;
        const dLng = (s.coords[1] - lng) * 40075 * Math.cos((lat * Math.PI) / 180) / 360;
        const distKm = Math.sqrt(dLat * dLat + dLng * dLng);
        if (distKm < minDistance) {
          minDistance = distKm;
          closestStop = s;
        }
      });

      state.mapInstance.setView([lat, lng], 15);
      if (closestStop) {
        const distMeters = Math.round(minDistance * 1000);
        showToast(`Parada más cercana: ${closestStop.name} (a ${distMeters} m)`);
      }
    },
    (err) => {
      showToast('No se pudo acceder a tu ubicación');
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

// ==========================================
// 8. USER ACTIONS & TABS
// ==========================================

function switchTab(tabId) {
  state.activeTab = tabId;

  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  document.querySelectorAll('.tab-content-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-${tabId}`);
  });

  if (tabId === 'mapa') {
    setTimeout(() => {
      initMapIfNeeded();
      if (state.mapInstance) state.mapInstance.invalidateSize();
    }, 100);
  }
}

function toggleDirection() {
  state.currentDirection = state.currentDirection === 'ida' ? 'vuelta' : 'ida';
  localStorage.setItem('movibus_direction', state.currentDirection);
  state.selectedStopId = LINE_DATA.directions[state.currentDirection].stops[0].id;
  state.plannerOrigin = null;
  state.plannerDest = null;
  
  renderAll();
  showToast(`Sentido: ${LINE_DATA.directions[state.currentDirection].name}`);
}

function selectStopAsActive(stopId) {
  state.selectedStopId = stopId;
  renderAll();
  showToast('Parada seleccionada');
}

function toggleFavoriteStop(stopId) {
  if (state.favoriteStopId === stopId) {
    state.favoriteStopId = null;
    localStorage.removeItem('movibus_fav_stop');
    showToast('Parada quitada de favoritas');
  } else {
    state.favoriteStopId = stopId;
    localStorage.setItem('movibus_fav_stop', stopId);
    showToast('Parada guardada como habitual');
  }
  renderAll();
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('movibus_theme', state.theme);
  showToast(`Modo ${state.theme === 'dark' ? 'Oscuro' : 'Claro'} activado`);
}

function setAlarmForTime(timeStr) {
  const modal = document.getElementById('alarm-modal');
  const modalTime = document.getElementById('modal-alarm-time');
  if (modal && modalTime) {
    modalTime.textContent = timeStr;
    modal.dataset.alarmTime = timeStr;
    modal.classList.add('open');
  }
}

function closeAlarmModal() {
  const modal = document.getElementById('alarm-modal');
  if (modal) modal.classList.remove('open');
}

function confirmAlarm(minutesBefore) {
  const modal = document.getElementById('alarm-modal');
  const timeStr = modal?.dataset.alarmTime;
  closeAlarmModal();

  if (!timeStr) return;

  playTransitChime();

  if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
    Notification.requestPermission();
  }

  showToast(`Aviso activado ${minutesBefore} min antes de las ${timeStr}`);
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `<span style="display:inline-flex; align-items:center;">${SVG_ICONS.check}</span><span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================
// 9. SIMULATOR
// ==========================================

function toggleSimulator() {
  const box = document.getElementById('simulator-box');
  if (box) {
    box.classList.toggle('open');
  }
}

function applySimulatedTime() {
  const input = document.getElementById('sim-time-input');
  if (input && input.value) {
    state.isSimulating = true;
    state.simulatedTime = input.value;
    renderAll();
    showToast(`Hora simulada: ${input.value}`);
  }
}

function resetSimulatedTime() {
  state.isSimulating = false;
  state.simulatedTime = null;
  const input = document.getElementById('sim-time-input');
  if (input) input.value = '';
  toggleSimulator();
  renderAll();
  showToast('Restaurado a la hora real');
}

// ==========================================
// 10. RENDER ALL & TICK LOOP
// ==========================================

function renderAll() {
  updateHeaderClock();
  renderDirectionControls();
  renderDayFilterPills();
  renderHeroCard();
  renderTripPlanner();
  renderScheduleTab();
  renderStopsTab();
  renderInfoTab();
  if (state.activeTab === 'mapa') {
    renderMapRouteAndStops();
  }
}

function startLiveTicker() {
  setInterval(() => {
    updateHeaderClock();
    renderHeroCard();
  }, 1000);
}

// ==========================================
// 11. EXPOSE TO WINDOW FOR DOM EVENTS
// ==========================================

window.switchTab = switchTab;
window.toggleDirection = toggleDirection;
window.selectStopAsActive = selectStopAsActive;
window.toggleFavoriteStop = toggleFavoriteStop;
window.toggleTheme = toggleTheme;
window.setAlarmForTime = setAlarmForTime;
window.closeAlarmModal = closeAlarmModal;
window.confirmAlarm = confirmAlarm;
window.focusStopOnMap = focusStopOnMap;
window.locateUserOnMap = locateUserOnMap;
window.toggleSimulator = toggleSimulator;
window.applySimulatedTime = applySimulatedTime;
window.resetSimulatedTime = resetSimulatedTime;
window.swapPlannerStops = swapPlannerStops;
window.shareTripDetails = shareTripDetails;
window.toggleFaq = toggleFaq;
window.triggerAppInstallModal = triggerAppInstallModal;
window.checkForAppUpdates = checkForAppUpdates;

// ==========================================
// 12. INITIALIZATION & AUTO-UPDATE ENGINE
// ==========================================

let deferredPrompt = null;
let swRegistration = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBanner = document.getElementById('pwa-install-banner');
  if (installBanner) installBanner.style.display = 'flex';
});

window.installPWA = () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      const installBanner = document.getElementById('pwa-install-banner');
      if (installBanner) installBanner.style.display = 'none';
    });
  } else {
    triggerAppInstallModal();
  }
};

function checkForAppUpdates() {
  if (!swRegistration) {
    showToast('Comprobando versión...');
    setTimeout(() => showToast('Tu aplicación está en la versión más reciente'), 800);
    return;
  }
  showToast('Buscando actualizaciones...');
  swRegistration.update().then(() => {
    setTimeout(() => {
      showToast('Tu aplicación está en la versión más reciente');
    }, 1000);
  }).catch(() => {
    showToast('No se pudo verificar la actualización');
  });
}

function initServiceWorkerAutoUpdate() {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.register('./sw.js').then((registration) => {
    swRegistration = registration;

    // Check for updates immediately when opening the app
    registration.update();

    // Listen for new updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New version installed in background: activate immediately
            showToast('Actualizando a la última versión...');
            newWorker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      }
    });
  }).catch((err) => {
    console.log('ServiceWorker registration error:', err);
  });

  // Seamlessly reload when the new Service Worker takes over
  let isRefreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!isRefreshing) {
      isRefreshing = true;
      window.location.reload();
    }
  });

  // Check for updates when user returns to the app from background/multitasking
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && swRegistration) {
      swRegistration.update();
    }
  });

  // Check for updates on window focus and reconnection
  window.addEventListener('focus', () => {
    if (swRegistration) swRegistration.update();
  });

  window.addEventListener('online', () => {
    if (swRegistration) swRegistration.update();
    showToast('Conexión a internet restablecida');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-theme', state.theme);

  if (!state.selectedStopId) {
    state.selectedStopId = LINE_DATA.directions[state.currentDirection].stops[0].id;
  }

  document.getElementById('btn-dir-ida')?.addEventListener('click', () => {
    if (state.currentDirection !== 'ida') toggleDirection();
  });

  document.getElementById('btn-dir-vuelta')?.addEventListener('click', () => {
    if (state.currentDirection !== 'vuelta') toggleDirection();
  });

  document.getElementById('btn-swap-direction')?.addEventListener('click', toggleDirection);
  document.getElementById('btn-theme-toggle')?.addEventListener('click', toggleTheme);

  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  document.getElementById('btn-toggle-sim')?.addEventListener('click', toggleSimulator);
  document.getElementById('btn-apply-sim')?.addEventListener('click', applySimulatedTime);
  document.getElementById('btn-reset-sim')?.addEventListener('click', resetSimulatedTime);

  document.getElementById('btn-close-modal')?.addEventListener('click', closeAlarmModal);
  document.querySelectorAll('.btn-alarm-option').forEach(btn => {
    btn.addEventListener('click', () => confirmAlarm(btn.dataset.mins));
  });

  renderAll();
  startLiveTicker();
  initServiceWorkerAutoUpdate();
});
