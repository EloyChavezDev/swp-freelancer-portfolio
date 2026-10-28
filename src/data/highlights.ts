/**
 * Copy blocks for the homepage sections that are one-of-a-kind.
 * Longer, repeating content lives in its own data file or content
 * collection instead.
 */

/**
 * Bloques de contenido para las secciones de la página principal.
 */

export const hero = {
  greeting: 'Hola. Soy tu',
  nameLines: ['Consultor', 'Financiero'],
  intro:
    'Te ayudo a poner en orden tus finanzas personales a través de talleres y asesorías personalizadas. Estrategias creadas según tu estilo de vida para lograr tus metas de gastos, salir de deudas o ahorrar para lograr tus sueños.',
  ctaLabel: 'Agenda una asesoría',
  ctaHref: '/contact/',
  photo: {
    src: '/images/hero-portrait.jpg',
    alt: 'Consultor financiero',
    width: 960,
    height: 1210,
  },
  aside: {
    roleLine: ['Asesoría Financiera', 'Personal & Empresarial'],
    title: ['Ordena', 'Tus Finanzas'],
    stack: ['/images/avatar-02.webp', '/images/avatar-01.webp', '/images/avatar-03.webp'],
    stackBadge: '100%',
    kpi: '100+',
    kpiLabel: 'familias asesoradas',
    note: 'Asesorías en línea y presenciales',
  },
};

export const collaborate = {
  eyebrow: 'Trabajemos juntos',
  title: 'Tu situación financiera actual no tiene que definir tu futuro.',
  body: 'Cuéntame tu caso y te ayudo a crear un plan práctico y realista, adaptado a tu estilo de vida. Juntos trazaremos el camino para alcanzar tus metas financieras.',
  badge: 'Resultados reales',
  ctaLabel: 'Solicita tu asesoría',
  ctaHref: '/contact/',
  images: [
    {
      src: '/images/collab-team.webp',
      alt: 'Asesoría financiera en reunión',
      width: 760,
      height: 760,
    },
    {
      src: '/images/collab-meeting.webp',
      alt: 'Planificación financiera personalizada',
      width: 760,
      height: 760,
    },
  ],
};

export const about = {
  eyebrow: 'Acerca de mí',
  title: 'Finanzas claras para decisiones acertadas.',
  body: 'Te ayudo a poner en orden tus finanzas personales mediante estrategias prácticas, realistas y adaptadas a tu estilo de vida. Mi objetivo es que logres controlar tus gastos, salir de deudas, ahorrar y alcanzar tus sueños sin sacrificar lo que más valoras.',
  points: [
    'Estrategias personalizadas según tu realidad financiera.',
    'Plan práctico y aplicable desde el primer día.',
    'Enfoque en hábitos sostenibles a largo plazo.',
  ],
  image: {
    src: '/images/about-studio.webp',
    alt: 'Asesoría financiera',
    width: 900,
    height: 954,
  },
  badge: {
    value: '10+',
    label: 'Años ayudando a ordenar finanzas personales y empresariales.',
  },
  ctaLabel: 'Conoce mis servicios',
  ctaHref: '/services/',
};

export const servicesHeading = {
  eyebrow: 'Servicios',
  title: 'Mis servicios para ordenar tus finanzas.',
  ctaLabel: 'Solicita información',
  ctaHref: '/contact/',
};

export const workHeading = {
  eyebrow: 'Testimonios',
  title: 'Lo que dicen mis clientes.',
};

export const journalHeading = {
  eyebrow: 'Blog',
  title: 'Consejos financieros prácticos.',
  ctaLabel: 'Ver todos los artículos',
  ctaHref: '/journal/',
};

export const cta = {
  title: '¿Listo para poner en orden tus finanzas?',
  body: 'Cuéntame tus metas, desafíos o inquietudes. Te ayudo a crear un plan claro para alcanzar tus objetivos financieros.',
  primaryLabel: 'Agenda tu asesoría',
};
